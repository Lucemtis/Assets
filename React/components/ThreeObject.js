import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../styles/threeObject.scss';
import threeObject from '../medias/ThreeObject/Denis.glb';
import colors from '../utils/colors';

function ThreeObject() {
  const containerRef = useRef(null);
  const objectRef = useRef(null);
  const boxSizeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    // Initialisation de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 85);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Activation de l'anti-aliasing
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Chargement de l'objet GLTF
    const loader = new GLTFLoader();
    loader.load(threeObject, (gltf) => {
      const object = gltf.scene;
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3()).length();
      const scale = 6 / size;
      object.scale.set(scale, scale, scale);
      object.rotation.x= -0.2;
      object.rotation.y= 0.5;
      object.rotation.z= -0.1;

      const boxSize = box.getSize(new THREE.Vector3());
      boxSizeRef.current = boxSize; // Stocke la taille de la boîte

      // Matériau avec couleur grise et effet luisant
      const material = new THREE.MeshPhongMaterial({
        color: colors.darkColor, // Remplacez par la valeur de couleur souhaitée en hexadécimal
        shininess: 100,
      });
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
        }
      });

      scene.add(object);
      objectRef.current = object.children[0]; // Stocke l'objet mesh au lieu de la scène

            // Position initiale en fonction de la hauteur de l'écran
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const maxDimension = Math.max(windowWidth, windowHeight);
            const windowScale = maxDimension;
            
            const initialY = -4.6 - ((windowScale - 800 ) / 1000) ; // Ajustez les valeurs pour correspondre à votre besoin
            object.position.set(-0.3, initialY, -2);
            handleScroll();
    });

    // Ajout d'une lumière
    const lightColor = colors.primaryColor;
    const lightColor2 = colors.secondaryColor;
    const lightColor3 = colors.thirdColor;
    const lightIntensity = 40; // Intensité de la lumière

    const light = new THREE.DirectionalLight(lightColor, lightIntensity);
    light.position.set(-1, 1, 0);
    scene.add(light);

    const light2 = new THREE.DirectionalLight(lightColor2, lightIntensity);
    light2.position.set(1, 0, 0);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(lightColor3, lightIntensity);
    light3.position.set(0, 2, 1);
    scene.add(light3);

// Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (objectRef.current) {
        const object = objectRef.current;
        object.rotation.y += rotate; // Ajouter la valeur de "rotate" à la rotation en Y de l'objet

        // Définir les limites de rotation
        const maxRotation = Math.PI / 16; // Limite maximale (45 degrés)
        const minRotation = -Math.PI / 16; // Limite minimale (-45 degrés)

        if (object.rotation.y >= maxRotation || object.rotation.y <= minRotation) {
          // Inverser la valeur de "rotate" pour changer la direction de rotation
          rotate = -rotate;
        }
      }

      renderer.render(scene, camera);
    };

    let rotate = 0.0001; // Valeur initiale de rotation
    animate();


    // Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

// Mise à jour de la position du rendu en fonction du défilement
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollFactor = 0.005;

  if (objectRef.current) {
    const object = objectRef.current;

    // Translation de l'objet en fonction du défilement
    object.position.y = (scrollTop / 5) * scrollFactor;
    object.position.x = -(scrollTop / 4) * scrollFactor;
    object.rotation.y = (scrollTop / 10) * scrollFactor;

    const firstStep= 500;

    if( scrollTop >= firstStep){
      object.position.y = (firstStep / 5) * scrollFactor;
      object.position.x = -(firstStep / 4) * scrollFactor;
      object.rotation.y = (firstStep / 10) * scrollFactor + ((firstStep / 10) * scrollFactor - ((scrollTop / 10) * scrollFactor))/ 2;
    }

    // Définir les valeurs d'opacité en fonction du défilement
    const maxOpacity = 1; // Opacité maximale lorsque le scroll est à 0
    const minOpacity = 0.5; // Opacité minimale lorsque le scroll atteint la valeur seuil

    const thresholdScroll = 200; // Valeur seuil du défilement pour atteindre l'opacité minimale

    // Récupérer l'élément HTML correspondant à l'objet avec la classe "threeObject"
    const objectElement = document.querySelector('.threeObject');

    if (objectElement) {
      if (scrollTop >= thresholdScroll) {
        // L'opacité est bloquée à la valeur minimale
        objectElement.style.opacity = minOpacity;
      } else {
        // Calculer l'opacité en fonction du défilement
        const opacity = maxOpacity - (scrollTop / thresholdScroll) * (maxOpacity - minOpacity);
        objectElement.style.opacity = opacity;
      }
    }
  }
};

window.addEventListener('scroll', handleScroll);



    window.addEventListener('scroll', handleScroll);

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="threeObject" ref={containerRef}></div>;
}

export default ThreeObject;

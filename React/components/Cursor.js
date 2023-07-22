import React, { useEffect } from 'react';
import "../styles/cursor.scss";

function Cursor() {
  useEffect(() => {
    const updateCursors = (event) => {
      const cursor = document.querySelector(".cursor");
      const cursor2 = document.querySelector(".cursor2");
      const cursor3 = document.querySelector(".cursor3");
      cursor.style.left = event.clientX + "px";
      cursor.style.top = event.clientY + "px";
      cursor2.style.left = event.clientX + "px";
      cursor2.style.top = event.clientY + "px";
      cursor3.style.left = event.clientX + "px";
      cursor3.style.top = event.clientY + "px";
    };

    const detectInteraction = () => {
      const cursor = document.querySelector(".cursor");
      const cursor2 = document.querySelector(".cursor2");
      const cursor3 = document.querySelector(".cursor3");
      if (
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      ) {
        // Interaction tactile détectée
        cursor.classList.add('touch-interaction');
        cursor2.classList.add('touch-interaction');
        cursor3.classList.add('touch-interaction');
      } else {
        // Interaction avec souris ou stylus
        cursor.classList.remove('touch-interaction');
        cursor2.classList.remove('touch-interaction');
        cursor3.classList.remove('touch-interaction');
      }
    };

    detectInteraction();

    const addHoverClass = () => {
      const cursor2 = document.querySelector(".cursor2");
      const cursor3 = document.querySelector(".cursor3");
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    };

    const removeHoverClass = () => {
      const cursor2 = document.querySelector(".cursor2");
      const cursor3 = document.querySelector(".cursor3");
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    const handleMouseMove = (event) => {
      requestAnimationFrame(() => {
        updateCursors(event);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", addHoverClass);
      target.addEventListener("mouseout", removeHoverClass);
    });

    return () => {
      // Nettoyage des écouteurs d'événements lors de la suppression du composant
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseover", addHoverClass);
        target.removeEventListener("mouseout", removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
      <div className="cursor3"></div>
    </>
  );
}

export default Cursor;

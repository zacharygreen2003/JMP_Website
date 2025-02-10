"use client"; // Ensure it's a Client Component

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Slideshow = ({ images }) => {
  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationFrame;
    const scrollSpeed = 1.2; // Smooth speed

    const autoScroll = () => {
      if (slideRef.current && !isDragging) {
        slideRef.current.scrollLeft += scrollSpeed;

        // Infinite loop logic: Forward scrolling
        if (slideRef.current.scrollLeft >= slideRef.current.scrollWidth / 3) {
          slideRef.current.scrollLeft -= slideRef.current.scrollWidth / 3;
        }

        // Infinite loop logic: Backward scrolling
        if (slideRef.current.scrollLeft <= slideRef.current.scrollWidth / 3) {
          slideRef.current.scrollLeft += slideRef.current.scrollWidth / 3;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - slideRef.current.offsetLeft);
    setScrollLeft(slideRef.current.scrollLeft);
  };

  const whileDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    slideRef.current.scrollLeft = scrollLeft - walk;

    // Handle wrap-around when dragging backward
    if (slideRef.current.scrollLeft <= slideRef.current.scrollWidth / 3) {
      slideRef.current.scrollLeft += slideRef.current.scrollWidth / 3;
    }

    // Handle wrap-around when dragging forward
    if (slideRef.current.scrollLeft >= slideRef.current.scrollWidth / 3) {
      slideRef.current.scrollLeft -= slideRef.current.scrollWidth / 3;
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={slideRef}
      className="w-full overflow-hidden whitespace-nowrap flex cursor-grab select-none"
      onMouseDown={startDragging}
      onMouseMove={whileDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      {/* Triple duplication ensures infinite scrolling BOTH directions */}
      {[...images, ...images, ...images].map((img, i) => (
        <div key={i} className="flex-shrink-0 w-1/4">
          <Image
            src={img}
            alt="Application Image"
            width={300}
            height={200}
            className="object-cover rounded-md shadow-md w-full"
            draggable="false"
            onDragStart={(e) => e.preventDefault()} // Prevent ghost images
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

import { useState, useEffect } from "react";

// Sample images
const images = [
  "https://picsum.photos/id/1018/1920/800",
  "https://picsum.photos/id/1015/1920/800",
  "https://picsum.photos/id/1016/1920/800",
  "https://picsum.photos/id/1020/1920/800",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto play (change image every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer); // cleanup
  }, []);

  // Go to previous image
  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  // Go to next image
  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="w-screen-lg">
      {/* Image */}
      <img src={images[index]} alt="slide" className="w-full" />

      {/* Buttons */}
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

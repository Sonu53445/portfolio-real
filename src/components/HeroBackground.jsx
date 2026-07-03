import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 221;

export default function HeroBackground() {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload all image frames
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g., ezgif-frame-001.jpg, ezgif-frame-150.jpg)
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/scroll/ezgif-frame-${paddedIndex}.jpg`;

      img.onload = () => {
        loadedCount++;
        // Set loaded to true once ALL frames are downloaded so it doesn't flicker
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };

      // Fallback in case an image fails to load so it doesn't hang forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setLoaded(true);
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Helper function to draw a specific frame
    const drawFrame = (frameIndex) => {
      const img = images[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;

      // Set canvas physical size to match window dimensions multiplied by dpr
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Scale canvas CSS size to fit window
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // Object-contain calculation so NOTHING is ever cropped
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        // Canvas is wider: fit to height
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetY = 0;
        // Anchor to the right edge
        offsetX = canvas.width - drawWidth;
      } else {
        // Canvas is taller: fit to width
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        // Center vertically
        offsetY = (canvas.height - drawHeight) / 2;
      }

      // Clear the canvas and draw the calculated image slice
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Draw the very first frame immediately upon load
    drawFrame(0);

    const handleScroll = () => {
      // Find the total scrollable height of the page
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      // Calculate how far down the page we are (0.0 to 1.0)
      let fraction = scrollY / maxScroll;
      fraction = Math.max(0, Math.min(1, fraction));

      // Map the scroll fraction to the frame index (0 to 149)
      const frameIndex = Math.floor(fraction * (FRAME_COUNT - 1));
      drawFrame(frameIndex);
    };

    const handleResize = () => {
      handleScroll(); // Redraw immediately on resize
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, images]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-red-600 pointer-events-none z-0 transition-colors duration-500">
      <canvas
        ref={canvasRef}
        className="absolute w-full h-full z-0 transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0 }}
      />

      {/* Removed the dark gradient overlay to keep the airplane bright and text readable */}

      {/* Loading state since 150 frames might take a second to download */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500">
          <div className="text-white/20 animate-pulse text-sm tracking-widest">
            LOADING EXPERIENCE...
          </div>
        </div>
      )}
    </div>
  );
}
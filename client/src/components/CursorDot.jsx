import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = 0,
      my = 0;
    let rx = 0,
      ry = 0;
    let animId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2
                   w-2.5 h-2.5 rounded-full bg-amber-400
                   transition-[width,height,background-color] duration-300 ease-out"
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2
                   w-9 h-9 rounded-full border border-amber-400/50
                   transition-[width,height,opacity] duration-300 ease-out"
      />
    </>
  );
}

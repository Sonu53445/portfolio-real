import { useRef } from "react";

export default function HeroBackground() {
  const videoRef = useRef(null);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#050505] pointer-events-none z-0">
      {/* Background video layer */}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover z-0 mix-blend-screen"
        style={{ top: "300px", inset: "auto 0 0 0", opacity: 1 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay on video */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0" />
    </div>
  );
}

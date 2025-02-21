"use client";
import { useEffect, useRef, useState } from "react";
// import WAVES from "vanta/src/vanta.waves";
import CLOUD from "vanta/dist/vanta.clouds2.min";
import * as THREE from "three";

type HeroProps = {
  color?: string;
};

// VANTAエフェクトの型定義
type VantaEffect = {
  destroy: () => void;
  //
};

export default function Hero({ color = "#1f818c" }: HeroProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);

  useEffect(() => {
    // WebGLのサポートチェック
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        setIsWebGLAvailable(false);
        return;
      }

      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }

      if (vantaRef.current) {
        effectRef.current = CLOUD({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          speed: 0.3,
          backgroundColor: 0x252222,
          skyColor: 0x24485f,
          cloudColor: 0x70714,
          lightColor: 0x5c4b42,
          texturePath: "/noise.png",
        });
      }
    } catch (error) {
      console.error("WebGL initialization failed:", error);
      setIsWebGLAvailable(false);
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
      }
    };
  }, [color]);

  if (!isWebGLAvailable) {
    return <div className="w-full h-full bg-gradient-to-b from-cyan-900 to-cyan-600" style={{ minHeight: "400px" }} />;
  }

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      setIsWebGLAvailable(false);
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {isWebGLAvailable ? (
        <div
          className="w-full h-full"
          ref={vantaRef}
          style={{
            position: "relative",
            minHeight: "400px",
          }}
        />
      ) : (
        // WebGL が使用できない場合のフォールバック
        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-600" />
      )}
    </div>
  );
}

"use client";
// Simple Cesium viewer using CDN (no complex setup needed!)

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function CesiumCDNViewer() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run after Cesium script is loaded
    if (!isLoaded || !cesiumContainerRef.current) return;

    // Access Cesium from window object (loaded via CDN)
    const Cesium = (window as any).Cesium;
    
    if (!Cesium) {
      console.error("Cesium not loaded");
      return;
    }

    // Set your access token
    Cesium.Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;

    try {
      // Create the viewer
      const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
        timeline: false,
        animation: false,
        geocoder: false,
        homeButton: true,
        sceneModePicker: false,
        baseLayerPicker: true,
        navigationHelpButton: false,
        fullscreenButton: true,
      });

      viewerRef.current = viewer;

      // Fly to Kathmandu
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(85.3240, 27.7172, 10000),
        duration: 3,
      });

      // Add marker at Kathmandu
      viewer.entities.add({
        name: "Kathmandu, Nepal",
        position: Cesium.Cartesian3.fromDegrees(85.3240, 27.7172, 0),
        point: {
          pixelSize: 15,
          color: Cesium.Color.RED,
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 2,
        },
        label: {
          text: "Kathmandu 🇳🇵",
          font: "14pt sans-serif",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          pixelOffset: new Cesium.Cartesian2(0, -20),
        },
      });
    } catch (error) {
      console.error("Error creating Cesium viewer:", error);
    }

    // Cleanup
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [isLoaded]);

  return (
    <>
      {/* Load Cesium from CDN */}
      <Script
        src="https://cesium.com/downloads/cesiumjs/releases/1.110/Build/Cesium/Cesium.js"
        onLoad={() => setIsLoaded(true)}
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cesium.com/downloads/cesiumjs/releases/1.110/Build/Cesium/Widgets/widgets.css"
      />

      <div className="w-full h-full">
        {/* Title */}
        <div className="bg-black text-white p-4 text-center">
          <h2 className="text-2xl font-bold">My First Cesium 3D Globe 🌍</h2>
          <p className="text-sm mt-1">Scroll to zoom, drag to rotate, right-click + drag to pan</p>
        </div>

        {/* Loading message */}
        {!isLoaded && (
          <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <p className="text-xl font-semibold">Loading Cesium from CDN...</p>
            </div>
          </div>
        )}

        {/* Cesium container */}
        <div
          ref={cesiumContainerRef}
          className="w-full h-[600px] border-4 border-gray-300"
          style={{ display: isLoaded ? 'block' : 'none' }}
        />

        {/* Instructions */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 mt-2">
          <h3 className="font-semibold mb-2">🎮 Controls:</h3>
          <ul className="text-sm space-y-1">
            <li>🖱️ <strong>Left Click + Drag:</strong> Rotate the globe</li>
            <li>🖱️ <strong>Right Click + Drag:</strong> Pan/move the view</li>
            <li>🖱️ <strong>Scroll Wheel:</strong> Zoom in/out</li>
            <li>🏠 <strong>Home Button:</strong> Reset to Kathmandu view</li>
          </ul>
        </div>
      </div>
    </>
  );
}
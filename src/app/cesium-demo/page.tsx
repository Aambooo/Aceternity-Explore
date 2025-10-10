"use client";
// ⬆️ This line tells Next.js this is a Client Component (runs in browser)
// This is the page that displays your Cesium globe
// It will be accessible at: http://localhost:3000/cesium-demo

import dynamic from "next/dynamic";
// 'dynamic' allows us to load components only on the client-side
// Cesium needs to run in the browser, not on the server

// Import CesiumCDNViewer but tell Next.js to only load it in the browser
const CesiumViewer = dynamic(() => import("@/components/CesiumCDNViewer"), {
  ssr: false, // ssr = Server Side Rendering (we turn it OFF for Cesium)
  loading: () => (
    // This shows while Cesium is loading
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="text-4xl mb-4">🌍</div>
        <p className="text-xl font-semibold">Loading Cesium Globe...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait a moment</p>
      </div>
    </div>
  ),
});

export default function CesiumDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">🌍 Cesium 3D Globe Demo</h1>
          <p className="text-lg">Exploring Kathmandu, Nepal in 3D</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8">
        {/* Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">📍 About This Demo</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is a simple demonstration of the Cesium library integrated into a Next.js application.
            You're viewing a 3D interactive globe centered on Kathmandu, Nepal.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">🗺️ Technology</div>
              <div>Cesium + Next.js + React</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <div className="font-semibold text-green-600 dark:text-green-400 mb-1">📍 Location</div>
              <div>Kathmandu, Nepal</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <div className="font-semibold text-purple-600 dark:text-purple-400 mb-1">🎯 Purpose</div>
              <div>Learning & Internship</div>
            </div>
          </div>
        </div>

        {/* Cesium Viewer Component */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <CesiumViewer />
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 text-gray-600 dark:text-gray-400 mt-8">
        <p>Created during internship • Powered by Cesium & Next.js</p>
      </footer>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for the loader to finish
    const handleLoaderComplete = () => {
      setIsLoading(false);
    };

    // Add event listener for when loader completes
    window.addEventListener('loaderComplete', handleLoaderComplete);

    // Cleanup
    return () => {
      window.removeEventListener('loaderComplete', handleLoaderComplete);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center text-[#5d3136]">
            <h1 className="text-9xl mb-4">CASILYNZIRUI</h1>
            <p className="text-xl text-gray-300">Your content goes here</p>
          </div>
        </main>
      )}
    </div>
  );
}

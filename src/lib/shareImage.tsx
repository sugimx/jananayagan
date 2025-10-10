"use client";

import React, { useRef } from "react";
import { toJpeg } from "html-to-image";

const ShareImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (ref.current === null) return;

    const dataUrl = await toJpeg(ref.current, { quality: 0.95 });

    const link = document.createElement("a");
    link.download = "design.jpg";
    link.href = dataUrl;
    link.click();
  };

  const handleWhatsAppShare = async () => {
    if (ref.current === null) return;

    const dataUrl = await toJpeg(ref.current, { quality: 0.95 });

    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const file = new File([blob], "design.jpg", { type: "image/jpeg" });

    const text = encodeURIComponent(
      "Check out my design from https://jananayagan.vercel.app/"
    );
    const whatsappLink = `https://wa.me/?text=${text}`
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: 400,
          height: 300,
          background: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <h3>My Cool Design</h3>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            fontSize: 12,
            opacity: 0.7,
          }}
        >
          https://jananayagan.vercel.app/
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Download Design as Image
        </button>
        <button
          onClick={handleWhatsAppShare}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Share Website Link to WhatsApp
        </button>
        <p className="text-xs text-gray-600 mt-2">To share your design image on WhatsApp:<br />1. Download the image.<br />2. Open WhatsApp and paste the website link.<br />3. Attach the downloaded image manually.</p>
      </div>
    </div>
  );
};

export default ShareImage;

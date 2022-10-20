import React from "react";

export default function StickerRow({ onStickerSelected }) {
  const stickers = [
    "./assets/facebook.png",
    "../assets/emoji1.png",
    "../assets/emoji2.png",
    "assets/emoji3.png",
    "assets/emoji4.png",
    "assets/emoji5.png",
  ];

  return (
    <>
      <p>Choose a sticker</p>
      <div className="sticker-container">
        <div className="">
        {stickers.map((path, i) => (
          <img
            key={i}
            onClick={() => onStickerSelected(path)}
            src={path}
           // alt="sticker"
          />
        ))}
        </div>
      </div>
    </>
  );
}

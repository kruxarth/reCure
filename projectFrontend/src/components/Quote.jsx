import React, { useState } from "react";
import "./QuoteCard.css";

const Quote = () => {
  const [flipped, setFlipped] = useState(false);

  const quote = {
    front: {
      text: "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
      author: "Hippocrates",
    },
    back: {
      text: "The greatest wealth is health.",
      author: "Virgil",
    },
  };

  return (
    <div
      className="flip-card w-full max-w-md h-48 overflow-hidden cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner h-full ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front bg-white shadow-md rounded-2xl p-4 text-center h-full flex flex-col justify-center">
          <p className="italic text-gray-700 text-sm mb-1 px-2 line-clamp-3">
            "{quote.front.text}"
          </p>
          <p className="text-xs font-medium text-gray-500">- {quote.front.author}</p>
        </div>
        <div className="flip-card-back bg-white shadow-md rounded-2xl p-4 text-center h-full flex flex-col justify-center">
          <p className="italic text-gray-700 text-sm mb-1 px-2 line-clamp-3">
            "{quote.back.text}"
          </p>
          <p className="text-xs font-medium text-gray-500">- {quote.back.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;

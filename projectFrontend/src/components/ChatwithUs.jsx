import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatWithUs = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for sharing. Please take your medicines on time.",
        },
      ]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-4 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Chat with Us</h2>
          <Link
            to="/"
            className="text-blue-600 text-sm underline hover:text-blue-800"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 p-2 bg-gray-50 rounded">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md w-fit max-w-[80%] ${
                msg.from === "user" ? "ml-auto bg-blue-200" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-md focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 rounded-md"
          >
            Send
          </button>
          <button
            onClick={handleVoiceInput}
            className="bg-green-500 text-white px-4 rounded-md"
          >
            🎤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;

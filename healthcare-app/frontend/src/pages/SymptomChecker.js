// src/pages/SymptomChecker.js
import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import "../assets/styles/SymptomChecker.css";

const SymptomChecker = () => {
  const config = {
    initialMessages: [{ text: "How can I assist you with your symptoms?" }],
    botName: "HealthBot",
  };

  const messageParser = (message) => {
    // Here you can map symptoms to remedies
    if (message.toLowerCase().includes("fever")) {
      return "You should rest and stay hydrated. Consider taking paracetamol.";
    }
  };

  return (
    <div className="symptom-checker">
      <h2>Symptom Checker</h2>
      <Chatbot config={config} messageParser={messageParser} />
    </div>
  );
};

export default SymptomChecker;
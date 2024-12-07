import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import "../assets/styles/SymptomChecker.css";

// A more extensive symptom-to-remedy mapping
const symptomRemedies = {
  fever: "You should rest and stay hydrated. Consider taking paracetamol.",
  headache: "Try to rest in a dark room, hydrate, and consider taking an analgesic.",
  cough: "You may try drinking warm tea with honey and rest. If symptoms persist, consult a doctor.",
  fatigue: "Ensure you're getting enough rest and eating balanced meals. If persistent, consult a healthcare professional.",
};

const SymptomChecker = () => {
  const config = {
    initialMessages: [{ text: "How can I assist you with your symptoms?" }],
    botName: "HealthBot",
    customStyles: {
      botMessageBox: { backgroundColor: '#4CAF50' }, // Custom color for the bot's message box
      chatButton: { backgroundColor: '#4CAF50' },  // Custom color for the chat button
    },
  };

  const messageParser = (message) => {
    // Convert message to lowercase and check for matching symptoms
    const lowerCaseMessage = message.toLowerCase();
    
    // Check if any symptom matches the message
    for (let symptom in symptomRemedies) {
      if (lowerCaseMessage.includes(symptom)) {
        return symptomRemedies[symptom];
      }
    }

    // If no match is found, return a generic response
    return "I am sorry, I couldn't find a remedy for that. Please consult a healthcare provider.";
  };

  return (
    <div className="symptom-checker">
      <h2>Symptom Checker</h2>
      <Chatbot config={config} messageParser={messageParser} />
    </div>
  );
};

export default SymptomChecker;
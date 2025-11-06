'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import '../../components/chatboat/chatboart.css';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Function to scroll to the bottom of the chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll to bottom whenever messages update
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Add a welcome message when the component loads
    useEffect(() => {
        setMessages([
            {
                text: "Hello! I'm Medisa, your personal health assistant. How can I help you with general health questions or navigating our site today?",
                sender: 'bot'
            }
        ]);
    }, []);

    // Function to handle sending a message
    const handleSend = async (e) => {
        e.preventDefault();
        if (input.trim() === '' || isLoading) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Call your new backend endpoint
            const res = await fetch('https://medlist-backend.vercel.app/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            const botResponse = { text: data.reply, sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botResponse]);

        } catch (error) {
            console.error("Failed to get chatbot response:", error);
            const errorResponse = { text: "I'm sorry, but I'm having trouble connecting right now. Please try again later.", sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="chat-container">
                <div className="chat-header">
                    Chat with Medisa
                </div>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                            <div className="message-bubble">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message bot-message">
                            <div className="message-bubble typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form className="chat-input-form" onSubmit={handleSend}>
                    <input
                        type="text"
                        className="chat-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a general health question..."
                        disabled={isLoading}
                    />
                    <button type="submit" className="send-button" disabled={isLoading}>
                        {isLoading ? '...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}
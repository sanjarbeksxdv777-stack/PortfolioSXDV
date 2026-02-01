import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal, Loader2, Minimize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'System initialized. How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-black border border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-primary hover:text-black transition-all z-50 flex items-center justify-center rounded-none"
      >
        {isOpen ? <X size={24} /> : <Terminal size={24} />}
      </button>

      <div 
        className={`fixed bottom-24 right-6 w-full max-w-[350px] bg-[#020617] border border-primary/50 shadow-2xl z-50 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-primary/20 p-2 flex items-center justify-between border-b border-primary/30">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
             <span className="text-primary text-xs font-mono">AI_ASSISTANT_V1</span>
          </div>
          <Minimize2 size={14} className="text-primary cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        {/* Console Output */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/50 font-mono text-sm">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-[10px] text-slate-500 mb-1">
                  {msg.role === 'user' ? 'USER@IP' : 'SYSTEM'}
              </span>
              <div 
                className={`max-w-[90%] p-2 border ${
                  msg.role === 'user' 
                    ? 'border-primary/50 text-primary bg-primary/5' 
                    : 'border-slate-700 text-slate-300 bg-slate-900'
                }`}
              >
                <span className="mr-2 text-xs opacity-50">{msg.role === 'user' ? '$' : '>'}</span>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="flex items-center gap-2 text-primary text-xs font-mono animate-pulse">
                  <Loader2 size={12} className="animate-spin" /> PROCESSING_REQUEST...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Line */}
        <div className="p-2 bg-black border-t border-primary/30 flex items-center gap-2">
          <span className="text-primary text-sm font-mono">$</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent border-none text-white text-sm font-mono focus:ring-0 outline-none placeholder-slate-700"
            placeholder="Type command..."
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="text-primary hover:text-white disabled:opacity-30"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
import React, { useState, useEffect } from 'react';
import { Settings, X, QrCode, Lock, Copy, RefreshCw, Download, Timer, Play, Pause, RotateCcw } from 'lucide-react';

const ToolsWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'qr' | 'pass' | 'timer'>('qr');
  
  // QR State
  const [qrInput, setQrInput] = useState('');
  const [qrImage, setQrImage] = useState('');

  // Password State
  const [passLength, setPassLength] = useState(12);
  const [generatedPass, setGeneratedPass] = useState('');
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // Timer State (Pomodoro)
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  // Timer Logic
  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      alert("Vaqt tugadi!");
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // QR Logic
  const generateQR = () => {
    if (!qrInput) return;
    setQrImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrInput)}&color=06b6d4&bgcolor=020617`);
  };

  const downloadQR = async () => {
    if (!qrImage) return;
    try {
      const response = await fetch(qrImage);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed', error);
    }
  };

  // Password Logic
  const generatePass = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const symbols = "!@#$%^&*()_+{}[]";
    let validChars = chars;
    if (includeSymbols) validChars += symbols;

    let pass = "";
    for (let i = 0; i < passLength; i++) {
      pass += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }
    setGeneratedPass(pass);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nusxalandi!');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-black border border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-primary hover:text-black transition-all z-50 flex items-center justify-center rounded-none group"
        title="Foydali Vositalar"
      >
        {isOpen ? <X size={24} /> : <Settings size={24} className="group-hover:rotate-90 transition-transform duration-500" />}
      </button>

      <div 
        className={`fixed bottom-24 right-6 w-full max-w-[320px] bg-[#020617] border border-primary/50 shadow-2xl z-50 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary/10 p-3 flex items-center justify-between border-b border-primary/30">
          <div className="flex items-center gap-2">
             <Settings size={16} className="text-primary" />
             <span className="text-primary text-xs font-mono font-bold">FOYDALI_VOSITALAR</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-primary/20">
            <button 
                onClick={() => setActiveTab('qr')} 
                className={`flex-1 p-3 text-xs font-mono flex items-center justify-center gap-2 transition-colors ${activeTab === 'qr' ? 'bg-primary text-black font-bold' : 'text-slate-400 hover:text-white'}`}
            >
                <QrCode size={14} /> QR
            </button>
            <button 
                onClick={() => setActiveTab('pass')} 
                className={`flex-1 p-3 text-xs font-mono flex items-center justify-center gap-2 transition-colors ${activeTab === 'pass' ? 'bg-primary text-black font-bold' : 'text-slate-400 hover:text-white'}`}
            >
                <Lock size={14} /> PASS
            </button>
            <button 
                onClick={() => setActiveTab('timer')} 
                className={`flex-1 p-3 text-xs font-mono flex items-center justify-center gap-2 transition-colors ${activeTab === 'timer' ? 'bg-primary text-black font-bold' : 'text-slate-400 hover:text-white'}`}
            >
                <Timer size={14} /> VAQT
            </button>
        </div>

        {/* Content */}
        <div className="p-4 bg-slate-900/90 h-[300px] overflow-hidden">
            
            {/* QR GENERATOR */}
            {activeTab === 'qr' && (
                <div className="space-y-4 h-full flex flex-col">
                    <div>
                        <label className="text-xs text-primary font-mono mb-1 block">Matn yoki Link kiriting:</label>
                        <input 
                            type="text" 
                            value={qrInput}
                            onChange={(e) => setQrInput(e.target.value)}
                            placeholder="https://example.com"
                            className="w-full bg-slate-950 border border-slate-700 p-2 text-sm text-white focus:border-primary outline-none font-mono placeholder-slate-700"
                        />
                    </div>
                    <button 
                        onClick={generateQR}
                        className="w-full py-2 bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-black transition-all text-xs font-mono uppercase"
                    >
                        QR Kod Yaratish
                    </button>

                    <div className="flex-1 flex items-center justify-center bg-slate-950 border border-dashed border-slate-800 relative">
                        {qrImage ? (
                            <div className="relative group">
                                <img src={qrImage} alt="QR Code" className="w-28 h-28" />
                                <button 
                                    onClick={downloadQR}
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                                >
                                    <Download size={20} />
                                </button>
                            </div>
                        ) : (
                            <span className="text-slate-700 text-xs font-mono">Kutilyapti...</span>
                        )}
                    </div>
                </div>
            )}

            {/* PASSWORD GENERATOR */}
            {activeTab === 'pass' && (
                <div className="space-y-4 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between text-xs text-primary font-mono mb-2">
                            <span>Uzunlik:</span>
                            <span>{passLength}</span>
                        </div>
                        <input 
                            type="range" 
                            min="8" 
                            max="32" 
                            value={passLength} 
                            onChange={(e) => setPassLength(parseInt(e.target.value))}
                            className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        
                        <div className="mt-4 flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                id="symbols" 
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                className="accent-primary"
                            />
                            <label htmlFor="symbols" className="text-xs text-slate-300 font-mono">Belgilar qo'shish (!@#)</label>
                        </div>
                    </div>

                    <div className="bg-slate-950 p-3 border border-slate-700 flex items-center justify-between">
                        <code className="text-primary text-sm font-mono break-all">{generatedPass || "Kuting..."}</code>
                        {generatedPass && (
                            <button onClick={() => copyToClipboard(generatedPass)} className="text-slate-400 hover:text-white ml-2">
                                <Copy size={16} />
                            </button>
                        )}
                    </div>

                    <button 
                        onClick={generatePass}
                        className="w-full py-2 bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-black transition-all text-xs font-mono uppercase flex items-center justify-center gap-2"
                    >
                        <RefreshCw size={14} /> Parol Yaratish
                    </button>
                </div>
            )}

            {/* POMODORO TIMER */}
            {activeTab === 'timer' && (
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                    <div className="text-center">
                        <div className="text-xs text-slate-500 font-mono mb-2">POMODORO TIMER</div>
                        <div className="text-5xl font-mono text-white font-bold tracking-widest tabular-nums">
                            {formatTime(timeLeft)}
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <button 
                            onClick={toggleTimer}
                            className={`flex-1 py-3 border ${isActive ? 'border-yellow-500 text-yellow-500' : 'border-primary text-primary'} hover:bg-white/5 transition-all flex items-center justify-center gap-2 uppercase text-xs font-bold`}
                        >
                            {isActive ? <><Pause size={16} /> Pauza</> : <><Play size={16} /> Boshlash</>}
                        </button>
                        
                        <button 
                            onClick={resetTimer}
                            className="px-4 py-3 border border-slate-700 text-slate-400 hover:text-white hover:border-white transition-all flex items-center justify-center"
                        >
                            <RotateCcw size={16} />
                        </button>
                    </div>
                    
                    <div className="text-[10px] text-slate-600 font-mono text-center">
                        Diqqatni jamlash uchun 25 daqiqa ishlang, 5 daqiqa dam oling.
                    </div>
                </div>
            )}

        </div>
      </div>
    </>
  );
};

export default ToolsWidget;
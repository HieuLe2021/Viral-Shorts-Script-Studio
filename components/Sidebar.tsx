import React from 'react';
import { Step } from '../types';
import { X, Bot } from 'lucide-react';

interface SidebarProps {
  steps: Step[];
  selectedStep: Step;
  onSelectStep: (step: Step) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ steps, selectedStep, onSelectStep, isOpen, setIsOpen }) => {
  return (
    <>
      <aside 
        className={`fixed top-0 left-0 h-full bg-[var(--surface)] border-r border-[var(--border)] z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-full sm:w-80 md:w-64`}
      >
        <div className="flex justify-between items-center p-4 h-16 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
              <Bot className="w-7 h-7 text-[var(--primary)]"/>
              <h2 className="text-lg font-bold text-white">Script Studio</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-[var(--muted)] hover:text-white md:hidden p-2"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-2">
          <p className="text-xs font-semibold text-[var(--muted)] mb-2 px-2 uppercase tracking-wider">Chiến lược</p>
          <ul className="space-y-1">
            {steps.map(step => (
              <li key={step.id}>
                <button
                  onClick={() => onSelectStep(step)}
                  className={`w-full text-left p-2 rounded-md transition-colors duration-200 flex items-center gap-3 group ${selectedStep.id === step.id ? 'bg-[var(--secondary)] text-white' : 'text-[var(--muted)] hover:bg-[var(--secondary)] hover:text-white'}`}
                >
                  <step.icon size={20} className="flex-shrink-0" />
                  <span className="text-sm font-medium">{step.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 z-30 md:hidden"></div>}
    </>
  );
};

export default Sidebar;
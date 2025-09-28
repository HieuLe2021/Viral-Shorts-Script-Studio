import React, { useState, useCallback, useEffect } from 'react';
import { STEPS } from './constants';
import { Step } from './types';
import { generateScript } from './services/geminiService';
import Sidebar from './components/Sidebar';
import { Menu, Wand, Copy, Check, Bot, Loader2, Save, FileDown, RotateCw, History } from 'lucide-react';

// Mock shadcn/ui components for demonstration
const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={`bg-[var(--surface)] border border-[var(--border)] rounded-lg ${className}`}>{children}</div>;
const CardHeader = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={`p-6 pb-4 ${className}`}>{children}</div>;
const CardContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const CardFooter = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} className={`w-full bg-[var(--secondary)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--muted)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${props.className}`} />;
// FIX: Add `size` prop to Button component to support icon buttons and resolve type errors.
const Button = ({ children, variant = 'primary', size = 'default', className = '', ...props }: { children: React.ReactNode, variant?: 'primary' | 'secondary', size?: 'default' | 'icon', className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={`inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background)] focus:ring-[var(--primary)] disabled:opacity-50 disabled:pointer-events-none ${size === 'icon' ? 'h-9 w-9' : 'px-4 py-2'} ${variant === 'primary' ? 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-opacity-90' : 'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-opacity-80'} ${className}`}>
    {children}
  </button>
);
const Skeleton = ({ className = '' }: { className?: string }) => <div className={`animate-pulse rounded-md bg-[var(--secondary)] ${className}`} />;

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<Step>(STEPS[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      setError('Vui lòng nhập chủ đề trước khi tạo kịch bản.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setOutput('');
    // TODO: Implement API call logic
    const prompt = selectedStep.promptTemplate.replace(/\[TOPIC\]/g, topic);
    const result = await generateScript(prompt);
    if (result.startsWith('An error occurred')) {
        setError(result);
    } else {
        setOutput(result);
    }
    setIsLoading(false);
  }, [topic, selectedStep]);
  
  const handleSelectStep = (step: Step) => {
    setSelectedStep(step);
    if(window.innerWidth < 768) {
        setIsSidebarOpen(false);
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const renderResultContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-4 p-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      );
    }
    if (error) {
      return <div className="p-4 text-red-400">{error}</div>;
    }
    if (output) {
      return <pre className="p-4 whitespace-pre-wrap text-sm font-mono">{output}</pre>;
    }
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-[var(--muted)] p-8">
        <Bot size={48} className="mb-4" />
        <h3 className="font-semibold text-lg text-[var(--text)]">Kết quả sáng tạo</h3>
        <p className="text-sm">Kịch bản bạn tạo sẽ xuất hiện tại đây.</p>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar 
        steps={STEPS}
        selectedStep={selectedStep}
        onSelectStep={handleSelectStep}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <main className={`flex-1 flex flex-col h-screen overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <header className="flex items-center justify-between p-4 border-b border-[var(--border)] md:justify-end">
             {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--text)] md:hidden"
                aria-label="Open sidebar"
              >
                <Menu size={24} />
              </button>
          )}
          <div className="text-lg font-semibold md:hidden">Script Studio</div>
          <div>{/* Future header actions */}</div>
        </header>

        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col gap-8">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <h1 className="text-2xl font-bold text-white">{selectedStep.title}</h1>
              <p className="text-[var(--muted)] text-sm mt-1">{selectedStep.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label htmlFor="topic-input" className="text-sm font-medium">Chủ đề hoặc ngách</label>
                <Input 
                  id="topic-input" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder={`Ví dụ: '${selectedStep.placeholder} cho doanh nghiệp'`}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerate} disabled={isLoading || !topic.trim()} className="w-full sm:w-auto">
                {isLoading ? <Loader2 size={20} className="mr-2 animate-spin" /> : <Wand size={20} className="mr-2" />}
                Tạo kịch bản
              </Button>
            </CardFooter>
          </Card>

          {/* Result Panel */}
          <div className="flex-1 flex flex-col min-h-0">
             <Card className="flex-1 flex flex-col min-h-0">
                <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                    <h2 className="font-semibold">Kết quả</h2>
                    {output && !isLoading && (
                        <div className="flex items-center gap-2">
                             <Button variant="secondary" size="icon" onClick={handleCopy}>
                                {isCopied ? <Check size={16}/> : <Copy size={16}/>}
                            </Button>
                            <Button variant="secondary" size="icon"><Save size={16}/></Button>
                            <Button variant="secondary" size="icon"><FileDown size={16}/></Button>
                            <Button variant="secondary" size="icon"><RotateCw size={16}/></Button>
                            <Button variant="secondary" size="icon"><History size={16}/></Button>
                        </div>
                    )}
                </div>
                <div className="flex-1 overflow-y-auto">
                   {renderResultContent()}
                </div>
             </Card>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
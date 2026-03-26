import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, Play } from 'lucide-react';

// ─── Analysis Steps ──────────────────────────────────────────────────────────

const steps = [
  { time: 0, text: 'Initializing Herzog Companies assessment...', progress: 0 },
  { time: 2000, text: 'Connecting to Primavera P6 project database...', progress: 20 },
  { time: 3500, text: 'Cross-referencing FRA Part 213 compliance records...', progress: 40 },
  { time: 5000, text: 'Analyzing 2,800 employee workflows across 7 divisions...', progress: 65, counter: true },
  { time: 6500, text: 'Scanning PTC signal utilization across 4,200 track miles...', progress: 85 },
  { time: 8000, text: 'Identifying optimization opportunities...', progress: 100 },
  { time: 9000, text: 'done', progress: 100 },
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(target * progress));
      if (progress >= 1) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [target, duration]);

  return <span className="font-mono text-blue-400">{count.toLocaleString()}</span>;
}

// ─── Run Analysis Button ─────────────────────────────────────────────────────

export function RunAnalysisButton({ onStart }: { onStart: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      onClick={onStart}
      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"
    >
      <Play className="w-4 h-4" fill="currentColor" />
      <span className="font-medium">Run AI Assessment</span>
    </motion.button>
  );
}

// ─── Analysis Overlay ────────────────────────────────────────────────────────

export default function AnalysisOverlay({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Disable Escape during animation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') e.preventDefault();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Step progression
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach((step, i) => {
      const timer = setTimeout(() => {
        if (step.text === 'done') {
          setIsDone(true);
          return;
        }
        setCurrentStep(i);
        setProgress(step.progress);
      }, step.time);
      timers.push(timer);
    });

    // Auto-close after completion
    const closeTimer = setTimeout(() => {
      sessionStorage.setItem('analysis-complete', 'true');
      onComplete();
    }, 10000);
    timers.push(closeTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const stepData = steps[currentStep];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#16161A]/95"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-12"
      >
        <div className="w-8 h-8 rounded-lg bg-[#4285F4]/90 flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" strokeWidth={2.2} fill="currentColor" />
        </div>
        <span className="text-white/60 text-sm font-medium tracking-wide">UpSkiller AI</span>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key="loading"
            className="flex flex-col items-center w-full max-w-md px-6"
          >
            {/* Spinner */}
            <div className="w-10 h-10 mb-8 rounded-full border-2 border-slate-700 border-t-blue-500 animate-spin" />

            {/* Status text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-slate-300 text-center min-h-[40px]"
              >
                {stepData?.text}
                {stepData?.counter && (
                  <span className="block mt-1">
                    <AnimatedCounter target={2800} duration={1500} /> employees scanned
                  </span>
                )}
              </motion.p>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="w-full mt-8 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <p className="text-[11px] text-slate-600 mt-2">{progress}%</p>
          </motion.div>
        ) : (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mb-4" />
            <p className="text-xl text-white font-medium">Assessment Complete</p>
            <p className="text-sm text-emerald-400 mt-2">$5.8M in opportunities identified</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import { AlertTriangle } from 'lucide-react';

export default function PreliminaryBanner() {
  return (
    <div className="rounded-lg px-4 py-2 flex items-center gap-2" style={{ background: 'var(--cc-yellow-dim)', border: '1px solid rgba(245,158,11,0.2)' }}>
      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
      <span className="text-xs text-amber-400">Preliminary Estimate — Based on Industry Benchmarks</span>
    </div>
  );
}

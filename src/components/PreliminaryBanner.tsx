import { AlertTriangle } from 'lucide-react';

export default function PreliminaryBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 flex items-center gap-2">
      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
      <span className="text-xs text-amber-700">Preliminary Estimate — Based on Industry Benchmarks</span>
    </div>
  );
}

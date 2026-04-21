import { Code, Eye } from "lucide-react";

interface ToggleBarProps {
  viewSource: boolean;
  onToggle: () => void;
}

export default function ToggleBar({ viewSource, onToggle }: ToggleBarProps) {
  return (
    <div
      className={`sticky top-0 z-50 border-b backdrop-blur-sm transition-colors duration-300 ${
        viewSource
          ? "bg-[#0d1117]/90 border-slate-700/50"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center py-2.5">
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            viewSource ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {viewSource ? "resume.ts" : "rmcguiness.com"}
        </span>
        <button
          onClick={onToggle}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            viewSource
              ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {viewSource ? (
            <>
              <Eye size={14} />
              View Resume
            </>
          ) : (
            <>
              <Code size={14} />
              View Source
            </>
          )}
        </button>
      </div>
    </div>
  );
}

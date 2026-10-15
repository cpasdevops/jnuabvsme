import React, { useState } from 'react';
import { Download, Copy, Check, FileSpreadsheet, FileText, Info, ArrowRight } from 'lucide-react';
import { DatasetItem } from '../data/datasets';

interface DatasetCardProps {
  dataset: DatasetItem;
  onOpenDetails: (dataset: DatasetItem) => void;
}

export const DatasetCard: React.FC<DatasetCardProps> = ({ dataset, onOpenDetails }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(dataset.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  const isExcel = dataset.extension === 'xlsx';

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 hover:shadow-lg shadow-xs overflow-hidden">
      
      {/* Top accent bar */}
      <div 
        className={`h-1.5 w-full ${
          isExcel 
            ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
            : 'bg-gradient-to-r from-indigo-500 to-cyan-500'
        }`}
      />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        
        {/* Top Badges & File Format */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div 
              className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-2xs ${
                isExcel 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-600' 
                  : 'bg-indigo-50 border-indigo-200 text-indigo-600'
              }`}
            >
              {isExcel ? (
                <FileSpreadsheet className="w-6 h-6 stroke-[2]" />
              ) : (
                <FileText className="w-6 h-6 stroke-[2]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span 
                  className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wider font-mono uppercase ${
                    isExcel 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                      : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                  }`}
                >
                  .{dataset.extension}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {dataset.fileSizeApprox}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                {dataset.subCategory}
              </span>
            </div>
          </div>

          <span 
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
              dataset.difficulty === 'Beginner' 
                ? 'bg-teal-50 text-teal-700 border-teal-200' 
                : dataset.difficulty === 'Intermediate' 
                ? 'bg-blue-50 text-blue-700 border-blue-200' 
                : 'bg-purple-50 text-purple-700 border-purple-200'
            }`}
          >
            {dataset.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
          {dataset.title}
        </h3>

        {/* File Name pill */}
        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-200 mb-3 text-xs text-slate-700 font-mono break-all select-all">
          <span className="truncate">{dataset.fileName}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">
          {dataset.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {dataset.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80"
            >
              #{tag}
            </span>
          ))}
          {dataset.tags.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 text-slate-400">
              +{dataset.tags.length - 3}
            </span>
          )}
        </div>

      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 bg-white flex flex-col gap-2.5 border-t border-slate-100">
        
        {/* Main Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={dataset.url}
            download={dataset.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all shadow-xs active:scale-98 cursor-pointer ${
              isExcel 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download File</span>
          </a>

          <button
            onClick={handleCopyLink}
            title="Copy Direct Download URL"
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* View Specs Trigger */}
        <button
          onClick={() => onOpenDetails(dataset)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium text-slate-500 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>View Schema & Lab Exercises</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>

      </div>

    </div>
  );
};

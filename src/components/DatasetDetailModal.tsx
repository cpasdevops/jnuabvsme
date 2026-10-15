import React, { useState } from 'react';
import { X, Download, Copy, Check, FileSpreadsheet, FileText, CheckCircle, Lightbulb, Wrench, BookOpen, Quote } from 'lucide-react';
import { DatasetItem } from '../data/datasets';

interface DatasetDetailModalProps {
  dataset: DatasetItem | null;
  onClose: () => void;
}

export const DatasetDetailModal: React.FC<DatasetDetailModalProps> = ({ dataset, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!dataset) return null;

  const isExcel = dataset.extension === 'xlsx';

  const citationText = `Marketing Analytics Repository (2026). "${dataset.title}". Available at: ${dataset.url}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(dataset.url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {}
  };

  const handleCopyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citationText);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2000);
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl z-10 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex items-start gap-3.5 pr-6">
            <div className={`p-3 rounded-xl border ${
              isExcel 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-600' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-600'
            }`}>
              {isExcel ? <FileSpreadsheet className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono uppercase ${
                  isExcel ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-100 text-indigo-800'
                }`}>
                  .{dataset.extension}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {dataset.fileSizeApprox}
                </span>
                <span className="text-xs text-slate-300">•</span>
                <span className="text-xs text-emerald-700 font-medium">
                  Verified Resource
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {dataset.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6 text-sm text-slate-600">
          
          {/* File Name & Direct URL Bar */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-500 font-medium mb-1">Direct Download CDN URL:</div>
            <div className="flex items-center justify-between gap-2">
              <code className="text-xs text-emerald-700 font-mono break-all select-all font-semibold">
                {dataset.url}
              </code>
              <button
                onClick={handleCopyLink}
                className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2">
              Overview & Analysis Context
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {dataset.longDescription}
            </p>
          </div>

          {/* Audience & Difficulty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 block mb-0.5">Target Audience:</span>
              <span className="text-xs font-semibold text-slate-800">{dataset.targetAudience}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-0.5">Analytical Difficulty:</span>
              <span className="text-xs font-semibold text-teal-700">{dataset.difficulty} Level</span>
            </div>
          </div>

          {/* Key Attributes / Columns */}
          {dataset.sampleColumnsOrSections && (
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>{isExcel ? 'Sample Schema / Key Columns' : 'Document Outline & Sections'}</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                {dataset.sampleColumnsOrSections.map((col, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{col}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Key Dataset Highlights</span>
            </h4>
            <ul className="space-y-1.5">
              {dataset.keyAttributes.map((attr, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>{attr}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Practical Exercises */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Recommended Lab Exercises</span>
            </h4>
            <div className="space-y-2">
              {dataset.practicalExercises.map((ex, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Exercise {idx + 1}:</strong> {ex}
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tools */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-slate-500" />
              <span>Compatible Software & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {dataset.suggestedTools.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 border border-slate-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Citation Block */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-indigo-600" />
                <span>Reference Citation Format</span>
              </span>
              <button
                onClick={handleCopyCitation}
                className="text-[11px] text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 cursor-pointer"
              >
                {copiedCitation ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCitation ? 'Copied' : 'Copy Citation'}</span>
              </button>
            </div>
            <p className="text-xs font-mono text-slate-600 italic bg-white p-2 rounded-lg border border-slate-200">
              {citationText}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 flex items-center justify-end gap-3 p-4 sm:p-5 border-t border-slate-200 bg-white/95 backdrop-blur">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
          >
            Close
          </button>
          
          <a
            href={dataset.url}
            download={dataset.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
              isExcel 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download {dataset.fileName}</span>
          </a>
        </div>

      </div>

    </div>
  );
};

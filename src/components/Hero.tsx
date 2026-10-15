import React from 'react';
import { Download, FileSpreadsheet, FileText, ArrowDown, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBatchDownload: () => void;
  onExploreClick: () => void;
  datasetCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBatchDownload, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/90 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background subtle light radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[380px] bg-gradient-to-b from-emerald-100/60 via-teal-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-indigo-100/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Open Access Dataset Repository</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/70">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Marketing Analytics & AI Prompt Blueprints</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-6.5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
              Marketing Analytics & Campaign Datasets
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
            Download verified marketing campaign workbooks, evaluation question banks, and AI prompt engineering blueprints. Ready for immediate analysis in Excel, Python, Power BI, and Claude.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14">
            <button
              onClick={onOpenBatchDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Download All 5 Files</span>
            </button>
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-300 transition-all active:scale-98 shadow-xs cursor-pointer"
            >
              <ArrowDown className="w-4 h-4 text-emerald-600" />
              <span>Browse Dataset Cards</span>
            </button>
          </div>

          {/* Trust & Spec Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">Excel Data</span>
              </div>
              <div className="text-xl font-bold text-slate-900">2 Workbooks</div>
              <p className="text-xs text-slate-500 mt-0.5">100-sample & full master campaign records (.xlsx)</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">Word Docs</span>
              </div>
              <div className="text-xl font-bold text-slate-900">3 Word Guides</div>
              <p className="text-xs text-slate-500 mt-0.5">Question banks & AI prompt blueprints (.docx)</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">Delivery</span>
              </div>
              <div className="text-xl font-bold text-slate-900">Direct CDN</div>
              <p className="text-xs text-slate-500 mt-0.5">High-speed pocketacademy.live cloud storage</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">Access</span>
              </div>
              <div className="text-xl font-bold text-slate-900">100% Free</div>
              <p className="text-xs text-slate-500 mt-0.5">No login or subscription paywall required</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

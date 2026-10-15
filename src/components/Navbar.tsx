import React from 'react';
import { Download, ExternalLink, Sparkles, BookOpen, Database, BarChart3 } from 'lucide-react';

interface NavbarProps {
  onOpenBatchDownload: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBatchDownload }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                  Marketing Data Hub
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Datasets
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium line-clamp-1">
                Campaign Spreadsheets, Case Studies & AI Prompts
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
            <a
              href="#datasets"
              className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Database className="w-4 h-4 text-emerald-600" />
              Datasets & Files
            </a>
            <a
              href="#simulator"
              className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Interactive Lab
            </a>
            <a
              href="#prompts"
              className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              AI Prompt Guides
            </a>
            <a
              href="#guidelines"
              className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Coursework Guide
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenBatchDownload}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download All (5)</span>
            </button>
            <a
              href="https://pocketacademy.live"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs text-slate-500 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 transition"
              title="Dataset Hosted on PocketAcademy"
            >
              <span>PocketAcademy</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { BarChart3, ExternalLink, Download } from 'lucide-react';
import { DATASETS } from '../data/datasets';

interface FooterProps {
  onOpenBatchDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBatchDownload }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Overview */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                Marketing Analytics Data Hub
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md">
              A curated open-access repository for marketing analytics datasets, campaign case evaluation prompt banks, and AI dashboard blueprints.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={onOpenBatchDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-semibold hover:bg-emerald-100 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-700" />
                <span>Download All 5 Files</span>
              </button>

              <a
                href="https://pocketacademy.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition"
              >
                <span>pocketacademy.live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Direct File Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold mb-3">
              Direct File Downloads
            </h4>
            <ul className="space-y-2 text-xs">
              {DATASETS.map((d) => (
                <li key={d.id}>
                  <a
                    href={d.url}
                    download={d.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-700 transition flex items-center gap-1.5 truncate text-slate-600"
                    title={d.fileName}
                  >
                    <span className="text-slate-400 font-mono">.{d.extension}</span>
                    <span className="truncate">{d.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold mb-3">
              Navigation & Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#datasets" className="hover:text-emerald-700 transition">
                  Datasets Directory
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-emerald-700 transition">
                  Interactive KPI Simulator
                </a>
              </li>
              <li>
                <a href="#prompts" className="hover:text-emerald-700 transition">
                  AI Prompt Engineering Blueprints
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-emerald-700 transition">
                  Analytics & Tooling Guidelines
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Marketing Analytics Repository. Hosted on PocketAcademy CDN.
          </p>
          <p>
            Open access resources for students, researchers, and marketing professionals.
          </p>
        </div>

      </div>
    </footer>
  );
};

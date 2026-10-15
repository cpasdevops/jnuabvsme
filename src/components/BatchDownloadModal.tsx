import React, { useState } from 'react';
import { X, Download, Copy, Check, Terminal, FileSpreadsheet, FileText } from 'lucide-react';
import { DATASETS } from '../data/datasets';

interface BatchDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BatchDownloadModal: React.FC<BatchDownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadAll = () => {
    setDownloading(true);
    setDownloadProgress(0);

    DATASETS.forEach((dataset, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = dataset.url;
        link.download = dataset.fileName;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadProgress(index + 1);

        if (index === DATASETS.length - 1) {
          setTimeout(() => {
            setDownloading(false);
          }, 800);
        }
      }, index * 400); // 400ms spacing to prevent browser popup throttling
    });
  };

  const handleCopyAllUrls = async () => {
    const urlsText = DATASETS.map(d => d.url).join('\n');
    try {
      await navigator.clipboard.writeText(urlsText);
      setCopiedType('urls');
      setTimeout(() => setCopiedType(null), 2200);
    } catch {}
  };

  const handleCopyCurl = async () => {
    const curlCommands = DATASETS.map(d => `curl -LO "${d.url}"`).join('\n');
    try {
      await navigator.clipboard.writeText(curlCommands);
      setCopiedType('curl');
      setTimeout(() => setCopiedType(null), 2200);
    } catch {}
  };

  const handleCopyMarkdown = async () => {
    const markdownLinks = DATASETS.map(d => `- [${d.title} (${d.fileName})](${d.url})`).join('\n');
    try {
      await navigator.clipboard.writeText(markdownLinks);
      setCopiedType('markdown');
      setTimeout(() => setCopiedType(null), 2200);
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl z-10 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Download className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Download All Marketing Datasets
              </h3>
              <p className="text-xs text-slate-500">
                5 files ready for instant direct download via PocketAcademy CDN
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Main Action Banner */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200 text-center">
            <h4 className="text-base font-bold text-slate-900 mb-1">
              One-Click Batch Download
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
              Click below to initiate direct download of all 5 files to your Downloads folder. If your browser asks for "multiple file download" permission, please allow it.
            </p>

            <button
              onClick={handleDownloadAll}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>
                {downloading 
                  ? `Downloading ${downloadProgress} of ${DATASETS.length}...` 
                  : 'Download All 5 Files Now'}
              </span>
            </button>
          </div>

          {/* Individual Files Checklist */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
              <span>Included Resources:</span>
              <span>5 Items (2 .xlsx, 3 .docx)</span>
            </div>

            <div className="space-y-2">
              {DATASETS.map((item) => {
                const isExcel = item.extension === 'xlsx';
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isExcel ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-100 text-indigo-800'
                      }`}>
                        {isExcel ? <FileSpreadsheet className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      </div>
                      <div className="truncate">
                        <div className="font-semibold text-slate-800 truncate">{item.title}</div>
                        <div className="text-[11px] text-slate-500 font-mono truncate">{item.fileName}</div>
                      </div>
                    </div>

                    <a
                      href={item.url}
                      download={item.fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                      title="Download single file"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Copy Options */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-semibold text-slate-700 block mb-2.5">
              Copy Links for Scripts, Terminal, or Syllabus
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleCopyAllUrls}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition cursor-pointer"
              >
                {copiedType === 'urls' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'urls' ? 'Copied URLs' : 'Copy All 5 Raw URLs'}</span>
              </button>

              <button
                onClick={handleCopyCurl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition cursor-pointer"
              >
                {copiedType === 'curl' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Terminal className="w-3.5 h-3.5 text-amber-600" />}
                <span>{copiedType === 'curl' ? 'Copied cURL' : 'cURL Commands'}</span>
              </button>

              <button
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition cursor-pointer"
              >
                {copiedType === 'markdown' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-indigo-600" />}
                <span>{copiedType === 'markdown' ? 'Copied Markdown' : 'Markdown Links'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Hosted on pocketacademy.live CDN</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
};

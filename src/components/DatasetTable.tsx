import React, { useState } from 'react';
import { Download, Copy, Check, FileSpreadsheet, FileText, Info } from 'lucide-react';
import { DatasetItem } from '../data/datasets';

interface DatasetTableProps {
  datasets: DatasetItem[];
  onOpenDetails: (dataset: DatasetItem) => void;
}

export const DatasetTable: React.FC<DatasetTableProps> = ({ datasets, onOpenDetails }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase font-mono tracking-wider text-slate-500 border-b border-slate-200">
            <tr>
              <th scope="col" className="py-4 px-4 sm:px-6">Resource Name & File</th>
              <th scope="col" className="py-4 px-4">Type</th>
              <th scope="col" className="py-4 px-4 hidden md:table-cell">Category</th>
              <th scope="col" className="py-4 px-4 hidden lg:table-cell">Size</th>
              <th scope="col" className="py-4 px-4 hidden sm:table-cell">Level</th>
              <th scope="col" className="py-4 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {datasets.map((item) => {
              const isExcel = item.extension === 'xlsx';
              const isCopied = copiedId === item.id;

              return (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isExcel ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                      }`}>
                        {isExcel ? <FileSpreadsheet className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                      </div>
                      <div>
                        <button
                          onClick={() => onOpenDetails(item)}
                          className="font-bold text-slate-900 group-hover:text-emerald-700 text-left transition-colors cursor-pointer"
                        >
                          {item.title}
                        </button>
                        <div className="text-xs text-slate-500 font-mono mt-0.5 truncate max-w-xs sm:max-w-md">
                          {item.fileName}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono uppercase ${
                      isExcel 
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                        : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                    }`}>
                      .{item.extension}
                    </span>
                  </td>

                  <td className="py-4 px-4 hidden md:table-cell">
                    <span className="text-xs text-slate-600 font-medium">
                      {item.subCategory}
                    </span>
                  </td>

                  <td className="py-4 px-4 hidden lg:table-cell font-mono text-xs text-slate-500">
                    {item.fileSizeApprox}
                  </td>

                  <td className="py-4 px-4 hidden sm:table-cell">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      item.difficulty === 'Beginner' 
                        ? 'bg-teal-50 text-teal-700 border-teal-200' 
                        : item.difficulty === 'Intermediate' 
                        ? 'bg-blue-50 text-blue-700 border-blue-200' 
                        : 'bg-purple-50 text-purple-700 border-purple-200'
                    }`}>
                      {item.difficulty}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                      <button
                        onClick={() => onOpenDetails(item)}
                        title="View details & schema"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleCopy(item.id, item.url)}
                        title="Copy direct download link"
                        className={`p-2 rounded-lg border transition cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                            : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>

                      <a
                        href={item.url}
                        download={item.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer ${
                          isExcel 
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                      >
                        <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

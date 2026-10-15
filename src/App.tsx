/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { DATASETS, DatasetItem } from './data/datasets';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DatasetCard } from './components/DatasetCard';
import { DatasetTable } from './components/DatasetTable';
import { DatasetDetailModal } from './components/DatasetDetailModal';
import { BatchDownloadModal } from './components/BatchDownloadModal';
import { CampaignDataSimulator } from './components/CampaignDataSimulator';
import { PromptViewer } from './components/PromptViewer';
import { CourseworkGuide } from './components/CourseworkGuide';
import { Footer } from './components/Footer';
import { 
  Search, 
  LayoutGrid, 
  List, 
  Download, 
  FileSpreadsheet, 
  FileText, 
  Sparkles, 
  CheckCircle2,
  FolderOpen
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedDataset, setSelectedDataset] = useState<DatasetItem | null>(null);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);

  const datasetsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToDatasets = () => {
    datasetsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter logic
  const filteredDatasets = useMemo(() => {
    return DATASETS.filter((item) => {
      // Category filter
      if (selectedCategory === 'coursework' && item.category !== 'coursework') return false;
      if (selectedCategory === 'ai-prompts' && item.category !== 'ai-prompts') return false;
      if (selectedCategory === 'xlsx' && item.extension !== 'xlsx') return false;
      if (selectedCategory === 'docx' && item.extension !== 'docx') return false;

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesFileName = item.fileName.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        const matchesExt = item.extension.toLowerCase().includes(query);
        return matchesTitle || matchesFileName || matchesDesc || matchesTags || matchesExt;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Navigation */}
      <Navbar 
        onOpenBatchDownload={() => setIsBatchModalOpen(true)}
        activeSection="datasets"
      />

      {/* Hero Section */}
      <Hero 
        onOpenBatchDownload={() => setIsBatchModalOpen(true)}
        onExploreClick={scrollToDatasets}
        datasetCount={DATASETS.length}
      />

      {/* Main Datasets Repository Section */}
      <section 
        id="datasets" 
        ref={datasetsSectionRef} 
        className="py-12 sm:py-20 border-b border-slate-200 relative bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Verified Downloads Directory</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Datasets & Analytics Resource Files
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                Direct high-speed download links hosted on PocketAcademy CDN. Select any resource to download or inspect schema specifications.
              </p>
            </div>

            {/* Quick Action: Batch Downloader */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsBatchModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-300 hover:border-emerald-400 shadow-xs transition cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Batch Download Options</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Controls Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8 space-y-4">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by file name, keyword, tag, or extension..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 transition shadow-2xs"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* View Switcher (Grid vs Table) */}
              <div className="flex items-center justify-between sm:justify-end gap-2">
                <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'grid' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Grid Card View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span className="hidden sm:inline">Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'table' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Data Table View"
                  >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">Table</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 font-mono text-[11px] uppercase mr-1 hidden sm:inline">Filter:</span>

              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl font-medium transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Files ({DATASETS.length})
              </button>

              <button
                onClick={() => setSelectedCategory('coursework')}
                className={`px-3 py-1.5 rounded-xl font-medium transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'coursework'
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Marketing & Campaign Datasets (3)
              </button>

              <button
                onClick={() => setSelectedCategory('xlsx')}
                className={`px-3 py-1.5 rounded-xl font-medium transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === 'xlsx'
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Spreadsheets (.xlsx) (2)</span>
              </button>

              <button
                onClick={() => setSelectedCategory('docx')}
                className={`px-3 py-1.5 rounded-xl font-medium transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === 'docx'
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>Word Documents (.docx) (3)</span>
              </button>

              <button
                onClick={() => setSelectedCategory('ai-prompts')}
                className={`px-3 py-1.5 rounded-xl font-medium transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === 'ai-prompts'
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>AI Prompt Blueprints (2)</span>
              </button>
            </div>

          </div>

          {/* Results Count & Empty State */}
          {filteredDatasets.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No matching resources found</h3>
              <p className="text-sm text-slate-500 mb-4">
                No files matched your query "{searchQuery}". Try clearing search or switching filter categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 transition cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Card Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset) => (
                <DatasetCard
                  key={dataset.id}
                  dataset={dataset}
                  onOpenDetails={(item) => setSelectedDataset(item)}
                />
              ))}
            </div>
          ) : (
            /* Table View */
            <DatasetTable
              datasets={filteredDatasets}
              onOpenDetails={(item) => setSelectedDataset(item)}
            />
          )}

          {/* Bottom Fast Links Notice */}
          <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>All 5 files are verified, active, and hosted on high-availability CDN.</span>
            </div>
            <button
              onClick={() => setIsBatchModalOpen(true)}
              className="text-emerald-700 hover:text-emerald-800 font-semibold cursor-pointer"
            >
              Copy all direct download links →
            </button>
          </div>

        </div>
      </section>

      {/* Interactive Marketing Dataset Simulator & KPI Sandbox */}
      <CampaignDataSimulator />

      {/* AI Prompt Engineering Blueprints */}
      <PromptViewer />

      {/* Coursework & Lab Guide */}
      <CourseworkGuide />

      {/* Footer */}
      <Footer onOpenBatchDownload={() => setIsBatchModalOpen(true)} />

      {/* Modal: Dataset Details */}
      <DatasetDetailModal
        dataset={selectedDataset}
        onClose={() => setSelectedDataset(null)}
      />

      {/* Modal: Batch Download */}
      <BatchDownloadModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
      />

    </div>
  );
}

import React from 'react';
import { BookOpen, FileSpreadsheet, Terminal, Cpu, CheckSquare, HelpCircle } from 'lucide-react';

export const CourseworkGuide: React.FC = () => {
  return (
    <section id="guidelines" className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practical Analysis Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Use These Datasets in Your Analytics Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Step-by-step instructions to load, analyze, and present findings using popular analytics and data science toolchains.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Excel & Sheets */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">1. Excel & Google Sheets</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Open <code className="text-emerald-700 font-semibold font-mono">Marketing_Campaigns_100.xlsx</code>. Use Pivot Tables to group by <span className="text-slate-800 font-mono">Channel</span> and compute average ROAS and total spend.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-50 font-mono text-[11px] text-emerald-800 border border-slate-200">
              =AVERAGEIF(B:B, "Meta", H:H)
            </div>
          </div>

          {/* Card 2: Python / Pandas */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">2. Python & Jupyter</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Load directly into Pandas for correlation matrixes, CAC vs. ROAS scatter plots, and linear regression modeling.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-50 font-mono text-[11px] text-blue-800 border border-slate-200 truncate">
              import pandas as pd<br/>
              df = pd.read_excel('...')
            </div>
          </div>

          {/* Card 3: Power BI / Tableau */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">3. Power BI & Tableau</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Connect to <code className="text-amber-700 font-semibold font-mono">Marketing_Campaigns.xlsx</code> as an Excel Workbook source. Build KPI cards for Spend, Revenue, and ROAS.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-50 font-mono text-[11px] text-amber-800 border border-slate-200">
              ROAS = SUM(Revenue) / SUM(Spend)
            </div>
          </div>

          {/* Card 4: Claude & AI Prompts */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">4. AI Analysis in Claude</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Attach the .xlsx file and paste instructions from <code className="text-indigo-700 font-semibold font-mono">Claude_Dashboard_Prompt.docx</code> to generate interactive visual dashboard artifacts.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-50 font-mono text-[11px] text-indigo-800 border border-slate-200 truncate">
              Analyze CAC anomalies & build BI chart
            </div>
          </div>

        </div>

        {/* FAQs */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h4 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h4>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600">
            <div>
              <strong className="text-slate-900 block mb-0.5">Are these datasets free to download and use?</strong>
              <p className="text-slate-600">Yes, all files hosted on pocketacademy.live are free for learning, analysis, coursework, and personal projects.</p>
            </div>
            <div>
              <strong className="text-slate-900 block mb-0.5">Which dataset should I start with?</strong>
              <p className="text-slate-600">If you are doing a quick exercise or introductory tutorial, use <code className="text-emerald-700 font-semibold font-mono">Marketing_Campaigns_100.xlsx</code>. For deep statistical modeling and multi-page BI dashboards, use <code className="text-emerald-700 font-semibold font-mono">Marketing_Campaigns.xlsx</code>.</p>
            </div>
            <div>
              <strong className="text-slate-900 block mb-0.5">What is the difference between the two prompt documents?</strong>
              <p className="text-slate-600"><code className="text-indigo-700 font-semibold font-mono">Claude_Dashboard_Prompt.docx</code> is crafted for business intelligence and chart creation, while <code className="text-indigo-700 font-semibold font-mono">Lovable_Prompt_Landing_Page_with_Google_Sheets.docx</code> focuses on full-stack web development and Google Sheets form capture.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

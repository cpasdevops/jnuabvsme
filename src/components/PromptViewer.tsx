import React, { useState } from 'react';
import { Copy, Check, Download, Sparkles, Terminal, FileText, Code2 } from 'lucide-react';

export const PromptViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'claude' | 'lovable'>('claude');
  const [copied, setCopied] = useState(false);

  const claudePromptSnippet = `Role: Principal Analytics & BI Solutions Architect
Objective: Build a comprehensive, executive-ready Marketing Campaign Dashboard in React, Tailwind CSS, and Recharts using the provided marketing campaign dataset.

Data Input Schema:
- Columns: Campaign_ID, Channel, Spend ($), Impressions, Clicks, Conversions, Revenue ($), ROAS, CAC
- Format: Clean CSV or spreadsheet paste

Design & Behavioral Instructions:
1. Palette: Crisp modern theme, emerald for revenue & high ROAS, indigo for conversions, amber for alerts.
2. KPI Scorecard:
   - Total Gross Revenue vs. Total Media Spend
   - Aggregate Blended ROAS (Target benchmark: >= 4.0x)
   - Blended CAC & Overall Conversion Rate
3. Interactive Visuals:
   - Multi-channel spend vs. revenue comparative bar chart
   - ROAS efficiency scatter plot (X: Spend, Y: Revenue, Bubble Size: Conversions)
   - Date range selector & channel breakdown filter
4. Anomaly & Opportunity Engine:
   - Identify underperforming channels where CAC > Benchmark
   - Provide concrete budget reallocation recommendations`;

  const lovablePromptSnippet = `System Persona: Senior Full-Stack Next.js / React Engineer specializing in High-Converting Growth Landing Pages
Objective: Generate a clean, modern landing page connected directly to a Google Sheets backend via Google Apps Script webhooks.

Page Structure:
1. Hero: Dynamic headline, badge for early access, trust badges, primary CTA button.
2. Lead Capture Form:
   - Fields: Full Name, Email, Organization, Role, Dataset Interest
   - Client-side validation: Regex email check, non-empty text, disabled state during submission
3. Backend Connection (Google Sheets):
   - POST payload to Google Apps Script Web App URL with timestamp and referrer UTMs
   - Graceful fallback: local state persistence if offline
4. Confirmation State:
   - Animated checkmark modal with direct access to download resources`;

  const activeSnippet = activeTab === 'claude' ? claudePromptSnippet : lovablePromptSnippet;
  const activeFileName = activeTab === 'claude' ? 'Claude_Dashboard_Prompt.docx' : 'Lovable_Prompt_Landing_Page_with_Google_Sheets.docx';
  const activeUrl = activeTab === 'claude' 
    ? 'https://pocketacademy.live/dataset/jnuabvsme/Claude_Dashboard_Prompt.docx' 
    : 'https://pocketacademy.live/dataset/jnuabvsme/Lovable_Prompt_Landing_Page_with_Google_Sheets.docx';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  return (
    <section id="prompts" className="py-16 sm:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Prompt Engineering Blueprints</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curated AI Prompts for Analytics & Web Apps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            These accompanying guides contain engineered prompts designed for Claude and Lovable to prototype marketing dashboards and Google Sheets integrations in seconds.
          </p>
        </div>

        {/* Tab Selector & Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3 sm:p-4 border-b border-slate-200 bg-slate-50 gap-3">
            
            {/* Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80">
              <button
                onClick={() => setActiveTab('claude')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeTab === 'claude' 
                    ? 'bg-white text-indigo-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Claude Dashboard Prompt</span>
              </button>

              <button
                onClick={() => setActiveTab('lovable')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeTab === 'lovable' 
                    ? 'bg-white text-teal-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Lovable + Google Sheets</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  copied 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Prompt' : 'Copy Prompt Blueprint'}</span>
              </button>

              <a
                href={activeUrl}
                download={activeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download .DOCX</span>
              </a>
            </div>

          </div>

          {/* Prompt Code Block */}
          <div className="p-4 sm:p-6 bg-slate-900 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto relative">
            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Source File: {activeFileName}</span>
              </div>
              <span className="text-slate-400">Tested with Claude 3.7 & Lovable</span>
            </div>

            <pre className="whitespace-pre-wrap font-mono text-slate-100 selection:bg-indigo-500/40">
              {activeSnippet}
            </pre>
          </div>

          {/* Quick Explanation */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              💡 <strong>Tip:</strong> Feed this prompt directly into Claude along with data from <code className="text-emerald-700 font-semibold font-mono">Marketing_Campaigns_100.xlsx</code> to generate live dashboards without writing code manually!
            </span>
            <a
              href={activeUrl}
              className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Direct Link: {activeFileName}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

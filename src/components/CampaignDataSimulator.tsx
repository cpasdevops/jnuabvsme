import React, { useState, useMemo } from 'react';
import { SAMPLE_CAMPAIGN_ROWS } from '../data/datasets';
import { Calculator, Download, Search, ArrowUpDown, Target } from 'lucide-react';

export const CampaignDataSimulator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [sortField, setSortField] = useState<'spend' | 'revenue' | 'conversions'>('revenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Calculator inputs
  const [calcImpressions, setCalcImpressions] = useState<number>(50000);
  const [calcClicks, setCalcClicks] = useState<number>(2500);
  const [calcSpend, setCalcSpend] = useState<number>(1500);
  const [calcConversions, setCalcConversions] = useState<number>(175);
  const [calcRevenue, setCalcRevenue] = useState<number>(7500);

  // Derived metrics
  const computedCtr = calcImpressions > 0 ? ((calcClicks / calcImpressions) * 100).toFixed(2) : '0.00';
  const computedCpc = calcClicks > 0 ? (calcSpend / calcClicks).toFixed(2) : '0.00';
  const computedConvRate = calcClicks > 0 ? ((calcConversions / calcClicks) * 100).toFixed(2) : '0.00';
  const computedCac = calcConversions > 0 ? (calcSpend / calcConversions).toFixed(2) : '0.00';
  const computedRoas = calcSpend > 0 ? (calcRevenue / calcSpend).toFixed(2) : '0.00';
  const computedProfit = (calcRevenue - calcSpend).toFixed(2);

  // Filtered rows
  const filteredRows = useMemo(() => {
    return SAMPLE_CAMPAIGN_ROWS.filter(row => {
      const matchesSearch = row.channel.toLowerCase().includes(searchTerm.toLowerCase()) || row.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesChannel = selectedChannel === 'all' || row.channel.toLowerCase().includes(selectedChannel.toLowerCase());
      return matchesSearch && matchesChannel;
    }).sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });
  }, [searchTerm, selectedChannel, sortField, sortOrder]);

  const toggleSort = (field: 'spend' | 'revenue' | 'conversions') => {
    if (sortField === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <section id="simulator" className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Analytics Lab</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Marketing Dataset Explorer & KPI Sandbox
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Preview the schema structure of <code className="text-emerald-800 font-mono text-xs bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold">Marketing_Campaigns_100.xlsx</code> and calculate live campaign KPIs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://pocketacademy.live/dataset/jnuabvsme/Marketing_Campaigns_100.xlsx"
              download="Marketing_Campaigns_100.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Get 100 Sample Rows (.xlsx)</span>
            </a>
          </div>
        </div>

        {/* Interactive KPI Calculator Sandbox */}
        <div className="mb-10 p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Formula Lab: Live Campaign KPI Calculator
              </h3>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline font-mono">
              ROAS = Revenue ÷ Spend | CAC = Spend ÷ Conversions
            </span>
          </div>

          {/* Calculator Inputs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            <div>
              <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1">
                Impressions
              </label>
              <input
                type="number"
                min="0"
                value={calcImpressions}
                onChange={(e) => setCalcImpressions(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1">
                Clicks
              </label>
              <input
                type="number"
                min="0"
                value={calcClicks}
                onChange={(e) => setCalcClicks(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1">
                Ad Spend ($)
              </label>
              <input
                type="number"
                min="0"
                value={calcSpend}
                onChange={(e) => setCalcSpend(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1">
                Conversions
              </label>
              <input
                type="number"
                min="0"
                value={calcConversions}
                onChange={(e) => setCalcConversions(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-[11px] font-mono text-slate-500 uppercase mb-1">
                Gross Revenue ($)
              </label>
              <input
                type="number"
                min="0"
                value={calcRevenue}
                onChange={(e) => setCalcRevenue(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Computed Results Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">CTR (Clicks / Imp)</span>
              <span className="text-lg font-bold text-teal-700 font-mono">{computedCtr}%</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">CPC (Cost Per Click)</span>
              <span className="text-lg font-bold text-blue-700 font-mono">${computedCpc}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">Conv. Rate (%)</span>
              <span className="text-lg font-bold text-amber-700 font-mono">{computedConvRate}%</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">CAC (Acquisition Cost)</span>
              <span className="text-lg font-bold text-indigo-700 font-mono">${computedCac}</span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] uppercase font-mono text-emerald-800 block">ROAS & Net Return</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold text-emerald-800 font-mono">{computedRoas}x</span>
                <span className="text-xs text-emerald-700 font-mono font-semibold">+${computedProfit}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Dataset Explorer Table */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
          
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search channel or campaign ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedChannel('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition ${
                  selectedChannel === 'all' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                All Channels
              </button>
              <button
                onClick={() => setSelectedChannel('Google')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition ${
                  selectedChannel === 'Google' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Google
              </button>
              <button
                onClick={() => setSelectedChannel('Meta')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition ${
                  selectedChannel === 'Meta' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Meta
              </button>
              <button
                onClick={() => setSelectedChannel('LinkedIn')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition ${
                  selectedChannel === 'LinkedIn' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                LinkedIn
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-50 text-[11px] uppercase font-mono tracking-wider text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">ID & Channel</th>
                  <th 
                    className="py-3 px-3 cursor-pointer hover:text-slate-900"
                    onClick={() => toggleSort('spend')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Spend</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-3 hidden md:table-cell">Imp. / Clicks</th>
                  <th className="py-3 px-3">CTR</th>
                  <th 
                    className="py-3 px-3 cursor-pointer hover:text-slate-900"
                    onClick={() => toggleSort('conversions')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Conversions</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th 
                    className="py-3 px-3 cursor-pointer hover:text-slate-900"
                    onClick={() => toggleSort('revenue')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Revenue</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-3">ROAS</th>
                  <th className="py-3 px-4 text-right">CAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {filteredRows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">
                      <div className="font-mono text-xs text-emerald-700 font-bold">{row.id}</div>
                      <div className="text-xs sm:text-sm text-slate-800">{row.channel}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-700">${row.spend.toLocaleString()}</td>
                    <td className="py-3 px-3 hidden md:table-cell text-xs text-slate-500">
                      {row.impressions.toLocaleString()} / {row.clicks.toLocaleString()}
                    </td>
                    <td className="py-3 px-3 text-teal-700 font-semibold">{row.ctr}</td>
                    <td className="py-3 px-3 text-slate-800">{row.conversions} ({row.convRate})</td>
                    <td className="py-3 px-3 text-emerald-700 font-semibold">${row.revenue.toLocaleString()}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                        {row.roas}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-indigo-700 font-medium">{row.cac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>Showing {filteredRows.length} sample records from the marketing campaign dataset schema</span>
            <span className="font-mono text-[11px] text-slate-500">Master dataset contains all multi-channel dimensions</span>
          </div>

        </div>

      </div>
    </section>
  );
};

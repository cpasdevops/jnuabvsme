export interface DatasetItem {
  id: string;
  title: string;
  fileName: string;
  url: string;
  extension: 'xlsx' | 'docx';
  category: 'coursework' | 'ai-prompts';
  subCategory: 'Dataset' | 'Question Bank' | 'AI Prompt Guide';
  fileSizeApprox: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  longDescription: string;
  targetAudience: string;
  tags: string[];
  keyAttributes: string[];
  sampleColumnsOrSections?: string[];
  suggestedTools: string[];
  practicalExercises: string[];
  previewSnippet?: {
    type: 'table' | 'text';
    content: any;
  };
}

export const DATASETS: DatasetItem[] = [
  {
    id: 'marketing-question-bank',
    title: 'Marketing Dataset Question Bank',
    fileName: 'Marketing_Dataset_Question_Bank.docx',
    url: 'https://pocketacademy.live/dataset/jnuabvsme/Marketing_Dataset_Question_Bank.docx',
    extension: 'docx',
    category: 'coursework',
    subCategory: 'Question Bank',
    fileSizeApprox: '28 KB',
    difficulty: 'Intermediate',
    description: 'Comprehensive assignment questions, case evaluation rubrics, and analytical prompts for marketing campaign evaluation.',
    longDescription: 'Curated for marketing management and analytics students, this question bank provides structured analytical inquiries covering multichannel attribution, cost-per-acquisition benchmarking, Return on Ad Spend (ROAS) optimization, customer journey segmentation, and strategic media budget allocation.',
    targetAudience: 'MBA / Marketing Analytics Students, Business Researchers, Faculty Evaluators',
    tags: ['Marketing Analytics', 'Case Studies', 'Evaluation Rubric', 'Coursework', 'KPI Benchmarking'],
    keyAttributes: [
      'Multi-tier difficulty questions (Basic, Intermediate, Strategic Executive)',
      'Direct mapping to Marketing_Campaigns.xlsx dataset',
      'Attribution model comparisons (First-touch, Last-touch, Linear, Data-driven)',
      'Budget reallocation simulation scenarios',
      'Viva voce and presentation prompt templates'
    ],
    sampleColumnsOrSections: [
      'Section 1: Exploratory Campaign Performance & CTR Anomalies',
      'Section 2: Cost-Per-Acquisition (CAC) vs. Customer Lifetime Value (LTV)',
      'Section 3: Channel ROI Breakdown (Meta, Google, LinkedIn, Programmatic)',
      'Section 4: Budget Optimization & Marginal Return Curves',
      'Section 5: Executive Strategy Brief Preparation Guide'
    ],
    suggestedTools: ['Microsoft Word', 'Google Docs', 'Notion', 'Obsidian', 'ChatGPT / Claude'],
    practicalExercises: [
      'Calculate the optimal spend shift from high-CAC display ads to organic/paid search.',
      'Critique a low-performing paid campaign based on CTR vs. Conversion Rate divergence.',
      'Formulate a 90-day growth strategy presentation for an omnichannel retail brand.'
    ]
  },
  {
    id: 'marketing-campaigns-100',
    title: 'Marketing Campaigns (100 Sample Records)',
    fileName: 'Marketing_Campaigns_100.xlsx',
    url: 'https://pocketacademy.live/dataset/jnuabvsme/Marketing_Campaigns_100.xlsx',
    extension: 'xlsx',
    category: 'coursework',
    subCategory: 'Dataset',
    fileSizeApprox: '45 KB',
    difficulty: 'Beginner',
    description: 'Cleaned, pre-formatted 100-row sample dataset ideal for introductory lab exercises, quick pivot tables, and spreadsheet drills.',
    longDescription: 'A streamlined version of the primary marketing dataset containing 100 high-fidelity campaign rows across multiple marketing channels. Tailored for fast classroom demonstrations, quick regression testing in Python/R, or creating initial Power BI & Excel dashboards without performance overhead.',
    targetAudience: 'Undergraduate & Graduate Management Students, Data Analytics Beginners',
    tags: ['Excel (.xlsx)', 'Sample Data', 'Pivot Tables', 'Rapid Prototyping', '100 Rows'],
    keyAttributes: [
      'Pre-formatted currency, percentage, and integer columns',
      'Zero missing values for plug-and-play classroom execution',
      'Cross-platform compatibility (Excel, LibreOffice, Google Sheets, Pandas)',
      'Includes channel taxonomy, spend, impressions, clicks, conversions, and revenue'
    ],
    sampleColumnsOrSections: [
      'Campaign_ID (e.g., CMP_001 to CMP_100)',
      'Channel (Google Ads, Meta, LinkedIn, Email, TikTok, SEO)',
      'Target_Audience / Region',
      'Budget_Allocated ($) & Actual_Spend ($)',
      'Impressions, Clicks, CTR (%)',
      'Conversions, Conversion_Rate (%)',
      'Revenue_Generated ($), ROAS, CAC ($)'
    ],
    suggestedTools: ['Microsoft Excel', 'Google Sheets', 'Python (Pandas/Seaborn)', 'Power BI', 'Tableau Desktop'],
    practicalExercises: [
      'Build a summary pivot table displaying Average ROAS and CAC by Marketing Channel.',
      'Generate a scatter plot of Ad Spend vs. Revenue Generated with a linear trendline.',
      'Identify the top 10 most cost-effective campaigns by lowest Customer Acquisition Cost.'
    ]
  },
  {
    id: 'marketing-campaigns-master',
    title: 'Marketing Campaigns (Master Full Dataset)',
    fileName: 'Marketing_Campaigns.xlsx',
    url: 'https://pocketacademy.live/dataset/jnuabvsme/Marketing_Campaigns.xlsx',
    extension: 'xlsx',
    category: 'coursework',
    subCategory: 'Dataset',
    fileSizeApprox: '210 KB',
    difficulty: 'Advanced',
    description: 'Comprehensive enterprise-grade dataset featuring multi-period campaigns, multichannel attribution, and granular performance metrics.',
    longDescription: 'The complete master repository of commercial marketing campaigns across paid search, social media, influencer partnerships, email retention, and affiliate programs. Ideal for term papers, advanced econometric modeling, machine learning clustering, and multi-page BI dashboards.',
    targetAudience: 'Advanced MBA Students, Data Science Researchers, Capstone Teams',
    tags: ['Enterprise Dataset', 'Multichannel Attribution', 'Advanced Analytics', 'Machine Learning', 'Full Scale'],
    keyAttributes: [
      'Extensive historical data spanning quarterly marketing cycles',
      'Multi-touch interaction metrics and funnel stage identifiers',
      'Granular metrics: CPM, CPC, Cost per Lead, ROAS, Marginal ROI',
      'Ready for SQL database import or Jupyter Notebook pipeline'
    ],
    sampleColumnsOrSections: [
      'Campaign_ID, Campaign_Name, Quarter / Date_Launched',
      'Medium / Channel (Search, Display, Social, Retargeting, Influencer)',
      'Geographic_Market & Device_Type (Mobile, Desktop, Tablet)',
      'Impressions, Unique_Reach, Frequency, Clicks, Cost_Per_Click',
      'Leads_Acquired, Qualified_Leads, Sales_Conversions',
      'Total_Spend ($), Gross_Merchandise_Value ($), Net_Profit ($)',
      'Attribution_Weight, ROAS, Lifetime_Value_Estimate ($)'
    ],
    suggestedTools: ['Python (scikit-learn, statsmodels)', 'R / RStudio', 'Power BI / Tableau', 'PostgreSQL / DuckDB', 'Excel Power Query'],
    practicalExercises: [
      'Run an ordinary least squares (OLS) regression analyzing the elasticity of Ad Spend on Net Revenue.',
      'Perform K-Means clustering to segment campaigns into high-efficiency, scale-ready, and underperforming cohorts.',
      'Design an executive KPI dashboard with drill-down filters by Quarter and Marketing Channel.'
    ]
  },
  {
    id: 'lovable-prompt-landing-page',
    title: 'Lovable Prompt: Landing Page with Google Sheets',
    fileName: 'Lovable_Prompt_Landing_Page_with_Google_Sheets.docx',
    url: 'https://pocketacademy.live/dataset/Lovable_Prompt_Landing_Page_with_Google_Sheets.docx',
    extension: 'docx',
    category: 'ai-prompts',
    subCategory: 'AI Prompt Guide',
    fileSizeApprox: '24 KB',
    difficulty: 'Beginner',
    description: 'Turnkey prompt architecture to build high-converting landing pages integrated with live Google Sheets database backends.',
    longDescription: 'Engineered prompt blueprint designed for AI coding platforms (Lovable, Cursor, Bolt, AI Studio). Instructs the model to generate full-stack responsive landing pages with lead capture forms that immediately sync entries to Google Sheets without requiring complex custom backends.',
    targetAudience: 'Entrepreneurship Students, Growth Hackers, No-Code/Low-Code Builders',
    tags: ['AI Prompt', 'Lovable', 'Google Sheets Integration', 'Growth Hacking', 'No-Code Web'],
    keyAttributes: [
      'Complete prompt hierarchy with system role and edge case handling',
      'Google Apps Script webhook integration recipe included',
      'Form validation, error boundaries, and thank-you modal specifications',
      'Tailwind CSS UI styling directives for sleek modern conversion aesthetics'
    ],
    sampleColumnsOrSections: [
      'Prompt Blueprint 1: UI/UX & Tailwind Conversion Design Guidelines',
      'Prompt Blueprint 2: Google Apps Script Webhook Endpoint Setup',
      'Prompt Blueprint 3: Asynchronous Fetch, Loading States & Spam Prevention',
      'Prompt Blueprint 4: Responsive Mobile Layout & Analytics Tracking Setup'
    ],
    suggestedTools: ['Lovable.dev', 'Cursor / VS Code', 'Claude 3.7 / 3.5 Sonnet', 'Google Sheets & Apps Script', 'Google AI Studio'],
    practicalExercises: [
      'Deploy a live product waitlist landing page that writes registrations directly to a collaborative Google Sheet.',
      'Modify the prompt to include UTM parameter tracking from inbound marketing campaigns.'
    ]
  },
  {
    id: 'claude-dashboard-prompt',
    title: 'Claude Dashboard Prompt Guide',
    fileName: 'Claude_Dashboard_Prompt.docx',
    url: 'https://pocketacademy.live/dataset/Claude_Dashboard_Prompt.docx',
    extension: 'docx',
    category: 'ai-prompts',
    subCategory: 'AI Prompt Guide',
    fileSizeApprox: '26 KB',
    difficulty: 'Intermediate',
    description: 'Master prompt specifications for generating interactive executive analytics dashboards and visual business reports in Claude.',
    longDescription: 'A comprehensive, battle-tested prompt framework instructing Anthropic Claude (and other LLMs) to generate interactive, professional React/Tailwind/Recharts business dashboards from raw spreadsheet files. Includes design guidelines, palette rules, and metric card blueprints.',
    targetAudience: 'Business Analysts, Management Consultants, Product Managers',
    tags: ['Claude AI', 'BI Dashboard', 'Prompt Engineering', 'Recharts / React', 'Executive Reports'],
    keyAttributes: [
      'Instructions for structuring Claude Artifacts and interactive code previews',
      'Component library instructions (KPI cards, sparklines, stacked bar charts, heatmaps)',
      'Data sanitization instructions for CSV and Excel clipboard paste',
      'Color harmony guidelines avoiding generic AI visual cliches'
    ],
    sampleColumnsOrSections: [
      'Section 1: Persona Definition & Executive Analytics Tone Guidelines',
      'Section 2: Metric Calculations: ROAS, CPA, Churn Rate, MoM Growth',
      'Section 3: Interactive UI Component Specs (Recharts, Lucide Icons, Date Pickers)',
      'Section 4: Data Upload & CSV Parsing Instructions for Zero-Error Renders'
    ],
    suggestedTools: ['Anthropic Claude', 'ChatGPT Plus (Advanced Data Analysis)', 'Vite / React', 'shadcn/ui & Recharts'],
    practicalExercises: [
      'Paste the prompt into Claude alongside data from Marketing_Campaigns_100.xlsx to instantly build a live KPI dashboard.',
      'Ask Claude to produce a presentation-ready executive executive summary slide deck based on the computed metrics.'
    ]
  }
];

export const SAMPLE_CAMPAIGN_ROWS = [
  { id: 'CMP-101', channel: 'Google Search Ads', spend: 4200, impressions: 84000, clicks: 4200, ctr: '5.00%', conversions: 315, convRate: '7.50%', revenue: 18900, roas: '4.50x', cac: '$13.33' },
  { id: 'CMP-102', channel: 'Meta Instagram Story', spend: 3100, impressions: 165000, clicks: 2850, ctr: '1.73%', conversions: 198, convRate: '6.95%', revenue: 11200, roas: '3.61x', cac: '$15.66' },
  { id: 'CMP-103', channel: 'LinkedIn B2B Sponsored', spend: 5500, impressions: 48000, clicks: 960, ctr: '2.00%', conversions: 92, convRate: '9.58%', revenue: 26800, roas: '4.87x', cac: '$59.78' },
  { id: 'CMP-104', channel: 'Email Retention Flow', spend: 450, impressions: 32000, clicks: 3840, ctr: '12.00%', conversions: 420, convRate: '10.94%', revenue: 16800, roas: '37.33x', cac: '$1.07' },
  { id: 'CMP-105', channel: 'YouTube TrueView', spend: 2800, impressions: 140000, clicks: 1680, ctr: '1.20%', conversions: 84, convRate: '5.00%', revenue: 5880, roas: '2.10x', cac: '$33.33' },
  { id: 'CMP-106', channel: 'Influencer Collab Q3', spend: 6000, impressions: 220000, clicks: 5500, ctr: '2.50%', conversions: 360, convRate: '6.55%', revenue: 23400, roas: '3.90x', cac: '$16.67' },
  { id: 'CMP-107', channel: 'Meta Facebook Retarget', spend: 1850, impressions: 52000, clicks: 1950, ctr: '3.75%', conversions: 215, convRate: '11.03%', revenue: 12470, roas: '6.74x', cac: '$8.60' },
  { id: 'CMP-108', channel: 'Google Performance Max', spend: 4900, impressions: 110000, clicks: 3740, ctr: '3.40%', conversions: 285, convRate: '7.62%', revenue: 20500, roas: '4.18x', cac: '$17.19' },
];

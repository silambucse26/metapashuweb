/* ═══════════════════════════════════════════════════════
   MetaPashu Digital Twin – Interactive Dashboard JS
   ═══════════════════════════════════════════════════════ */

// ──── CATTLE DATA ────
const cattleData = [
  {
    name: 'Gauri',
    id: 'MP-GIR-001',
    breed: 'Gir',
    thumb: '/thumb-gauri.png',
    statusColor: 'green',
    age: '4 Years',
    heartRate: '72 bpm',
    bodyTemp: '38.5°C',
    activity: 'High',
    activityColor: 'green',
    milkYield: '18.6 L',
    totalHealth: 'Excellent',
    healthColor: 'green',
    fertility: 'Heat in 3 Days',
    fertilityColor: 'pink',
    vaccination: 'Up to date',
    vaccinationColor: 'green',
    disease: 'Normal',
    diseaseColor: 'green',
    genomic: 'High Lineage',
    genomicColor: 'aqua',
    trustScore: 96,
    performanceScore: 92,
    
    // NEW DATA: Profile Details
    gender: 'Female',
    lactation: '2nd Lactation',
    calvingDate: '12 Nov 2025',
    ownerName: 'Rajesh Patel',
    farmName: 'Green Meadows Dairy',
    location: 'Gujarat, India',

    // NEW DATA: NIRAMM AI
    niramm: {
      yieldToday: '18.6 L',
      avg7Day: '18.2 L',
      fat: '4.8%',
      snf: '8.6%',
      protein: '3.4%',
      scc: '110k cells/ml',
      qualityStatus: 'Premium',
      qualityColor: 'green',
      mastitisRisk: 'Low',
      mastitisColor: 'green',
      ketosisRisk: 'Low',
      ketosisColor: 'green',
      fertilityRisk: 'Low',
      fertilityColor: 'green',
      heatStress: 'Moderate',
      heatStressColor: 'gold',
      feedQuality: 'Good',
      waterQuality: 'Excellent'
    },

    // NEW DATA: Quadmastest
    quadmastest: {
      lastTest: 'Today, 08:30 AM',
      healthScore: '94/100',
      mastitisRisk: 'Low',
      sccEstimate: '110k',
      lfStatus: 'normal',
      rfStatus: 'normal',
      lrStatus: 'normal',
      rrStatus: 'normal',
      recommendation: 'Maintain standard hygiene',
      nextDue: 'In 7 days'
    },

    // NEW DATA: Vet Verified
    vet: {
      name: 'Dr. S. K. Sharma',
      qualification: 'B.V.Sc & A.H.',
      date: '14 Jun 2026',
      status: 'Verified Healthy',
      summary: 'Animal is in excellent physical condition with optimal BCS. Heart & lungs clear.',
    },

    // NEW DATA: AI Recommendation
    aiRecommendation: 'Gauri is healthy overall. Milk yield is stable and udder health is good. Quadmastest shows low mastitis risk. NIRAMM AI suggests moderate heat stress. Recommended action: Ensure adequate shading during peak afternoon hours and maintain current high-quality feed regimen.',

    analytics: {
      milkTrend: { value: '18.6 L', pct: 82, trend: 'up', trendVal: '+2.1 L vs last week' },
      healthScore: { value: '96', pct: 96, trend: 'up', trendVal: 'Optimal condition' },
      fertilityScore: { value: '88', pct: 88, trend: 'up', trendVal: 'Heat predicted in 3 days' },
      vaccinationComp: { value: '100%', pct: 100, trend: 'up', trendVal: 'Fully compliant' },
      diseaseAlerts: { value: '0', pct: 5, trend: 'up', trendVal: 'No active alerts' },
      feedEfficiency: { value: '91%', pct: 91, trend: 'up', trendVal: 'Above average' },
      farmProductivity: { value: '94', pct: 94, trend: 'up', trendVal: 'Top performer' },
      insights: [
        'Milk yield trending upward for 5 consecutive days',
        'Heat cycle predicted — prepare for AI in 3 days',
        'Body condition score is optimal at 3.5',
      ]
    }
  },
  {
    name: 'Nandini',
    id: 'MP-SAH-002',
    breed: 'Sahiwal',
    thumb: '/thumb-nandini.png',
    statusColor: 'green',
    age: '5 Years',
    heartRate: '70 bpm',
    bodyTemp: '38.4°C',
    activity: 'Good',
    activityColor: 'green',
    milkYield: '16.4 L',
    totalHealth: 'Good',
    healthColor: 'green',
    fertility: 'Open',
    fertilityColor: 'blue',
    vaccination: 'Up to date',
    vaccinationColor: 'green',
    disease: 'Low Risk',
    diseaseColor: 'gold',
    genomic: 'Strong Milk Lineage',
    genomicColor: 'aqua',
    trustScore: 94,
    performanceScore: 89,
    
    gender: 'Female',
    lactation: '3rd Lactation',
    calvingDate: '05 Aug 2025',
    ownerName: 'Rajesh Patel',
    farmName: 'Green Meadows Dairy',
    location: 'Gujarat, India',

    niramm: {
      yieldToday: '16.4 L',
      avg7Day: '16.1 L',
      fat: '4.6%',
      snf: '8.4%',
      protein: '3.2%',
      scc: '150k cells/ml',
      qualityStatus: 'Standard',
      qualityColor: 'green',
      mastitisRisk: 'Low',
      mastitisColor: 'green',
      ketosisRisk: 'Moderate',
      ketosisColor: 'gold',
      fertilityRisk: 'Low',
      fertilityColor: 'green',
      heatStress: 'Low',
      heatStressColor: 'green',
      feedQuality: 'Good',
      waterQuality: 'Good'
    },

    quadmastest: {
      lastTest: 'Yesterday, 07:15 AM',
      healthScore: '88/100',
      mastitisRisk: 'Low',
      sccEstimate: '150k',
      lfStatus: 'normal',
      rfStatus: 'normal',
      lrStatus: 'monitor',
      rrStatus: 'normal',
      recommendation: 'Monitor LR quarter slightly elevated SCC',
      nextDue: 'In 6 days'
    },

    vet: {
      name: 'Dr. Amit Verma',
      qualification: 'M.V.Sc',
      date: '10 Jun 2026',
      status: 'Routine Checked',
      summary: 'Slightly susceptible to ketosis based on metabolic panel. Otherwise healthy.',
    },

    aiRecommendation: 'Milk quality metrics are within normal ranges. No fertility activity detected—schedule checkup. NIRAMM AI flags a moderate ketosis risk. Recommended action: Increase energy density in the ration with bypass fat supplements.',

    analytics: {
      milkTrend: { value: '16.4 L', pct: 72, trend: 'up', trendVal: '+1.2 L vs last week' },
      healthScore: { value: '91', pct: 91, trend: 'up', trendVal: 'Good overall health' },
      fertilityScore: { value: '78', pct: 78, trend: 'neutral', trendVal: 'Open — no heat detected' },
      vaccinationComp: { value: '100%', pct: 100, trend: 'up', trendVal: 'Fully compliant' },
      diseaseAlerts: { value: '1', pct: 15, trend: 'neutral', trendVal: 'Low risk — monitor' },
      feedEfficiency: { value: '87%', pct: 87, trend: 'up', trendVal: 'Good conversion ratio' },
      farmProductivity: { value: '89', pct: 89, trend: 'up', trendVal: 'Consistent performer' },
      insights: [
        'Milk quality metrics are within excellent range',
        'No fertility activity detected — schedule checkup',
        'Low disease risk flagged — preventive care advised',
      ]
    }
  },
  {
    name: 'Lakshmi',
    id: 'MP-RED-003',
    breed: 'Red Sindhi',
    thumb: '/thumb-lakshmi.png',
    statusColor: 'green',
    age: '6 Years',
    heartRate: '69 bpm',
    bodyTemp: '38.3°C',
    activity: 'Stable',
    activityColor: 'gold',
    milkYield: '14.9 L',
    totalHealth: 'Good',
    healthColor: 'green',
    fertility: 'Pregnant',
    fertilityColor: 'green',
    vaccination: 'Due in 2 wks',
    vaccinationColor: 'gold',
    disease: 'Normal',
    diseaseColor: 'green',
    genomic: 'High Resistance',
    genomicColor: 'aqua',
    trustScore: 90,
    performanceScore: 85,

    gender: 'Female',
    lactation: '4th Lactation',
    calvingDate: '02 Mar 2025',
    ownerName: 'Rajesh Patel',
    farmName: 'Green Meadows Dairy',
    location: 'Gujarat, India',

    niramm: {
      yieldToday: '14.9 L',
      avg7Day: '15.2 L',
      fat: '4.5%',
      snf: '8.3%',
      protein: '3.1%',
      scc: '130k cells/ml',
      qualityStatus: 'Standard',
      qualityColor: 'green',
      mastitisRisk: 'Low',
      mastitisColor: 'green',
      ketosisRisk: 'Low',
      ketosisColor: 'green',
      fertilityRisk: 'None (Pregnant)',
      fertilityColor: 'green',
      heatStress: 'Low',
      heatStressColor: 'green',
      feedQuality: 'Excellent',
      waterQuality: 'Good'
    },

    quadmastest: {
      lastTest: '3 Days Ago',
      healthScore: '92/100',
      mastitisRisk: 'Low',
      sccEstimate: '130k',
      lfStatus: 'normal',
      rfStatus: 'normal',
      lrStatus: 'normal',
      rrStatus: 'normal',
      recommendation: 'Standard protocols',
      nextDue: 'In 4 days'
    },

    vet: {
      name: 'Dr. S. K. Sharma',
      qualification: 'B.V.Sc & A.H.',
      date: '01 Jun 2026',
      status: 'Pregnancy Confirmed',
      summary: 'Fetus developing normally. Ensure dry off protocol starts on schedule.',
    },

    aiRecommendation: 'Lakshmi is progressing well in pregnancy. Milk yield is naturally tapering off. Vaccination for FMD is due in 2 weeks. Recommended action: Schedule vaccination and plan transition to dry cow ration next month.',

    analytics: {
      milkTrend: { value: '14.9 L', pct: 60, trend: 'down', trendVal: '-0.5 L vs last week' },
      healthScore: { value: '88', pct: 88, trend: 'neutral', trendVal: 'Stable condition' },
      fertilityScore: { value: '100', pct: 100, trend: 'up', trendVal: 'Confirmed pregnant' },
      vaccinationComp: { value: '85%', pct: 85, trend: 'down', trendVal: 'Booster due soon' },
      diseaseAlerts: { value: '0', pct: 5, trend: 'neutral', trendVal: 'No alerts' },
      feedEfficiency: { value: '82%', pct: 82, trend: 'neutral', trendVal: 'Average' },
      farmProductivity: { value: '85', pct: 85, trend: 'neutral', trendVal: 'Expected for stage' },
      insights: [
        'Milk yield dropping — normal for late lactation',
        'FMD Vaccination booster due in 14 days',
      ]
    }
  },
  {
    name: 'Kamdhenu',
    id: 'MP-THA-004',
    breed: 'Tharparkar',
    thumb: '/thumb-kamdhenu.png',
    statusColor: 'orange',
    age: '3 Years',
    heartRate: '82 bpm',
    bodyTemp: '39.1°C',
    activity: 'Low',
    activityColor: 'orange',
    milkYield: '12.1 L',
    totalHealth: 'Attention',
    healthColor: 'orange',
    fertility: 'Open',
    fertilityColor: 'blue',
    vaccination: 'Up to date',
    vaccinationColor: 'green',
    disease: 'Mastitis Risk',
    diseaseColor: 'red',
    genomic: 'Average',
    genomicColor: 'blue',
    trustScore: 74,
    performanceScore: 68,

    gender: 'Female',
    lactation: '1st Lactation',
    calvingDate: '18 Jan 2026',
    ownerName: 'Rajesh Patel',
    farmName: 'Green Meadows Dairy',
    location: 'Gujarat, India',

    niramm: {
      yieldToday: '12.1 L',
      avg7Day: '13.8 L',
      fat: '4.1%',
      snf: '8.0%',
      protein: '2.9%',
      scc: '480k cells/ml',
      qualityStatus: 'Substandard',
      qualityColor: 'orange',
      mastitisRisk: 'High',
      mastitisColor: 'red',
      ketosisRisk: 'Low',
      ketosisColor: 'green',
      fertilityRisk: 'High',
      fertilityColor: 'orange',
      heatStress: 'High',
      heatStressColor: 'red',
      feedQuality: 'Good',
      waterQuality: 'Moderate'
    },

    quadmastest: {
      lastTest: 'Today, 09:00 AM',
      healthScore: '65/100',
      mastitisRisk: 'High',
      sccEstimate: '480k',
      lfStatus: 'normal',
      rfStatus: 'risk',
      lrStatus: 'normal',
      rrStatus: 'monitor',
      recommendation: 'Immediate vet attention for RF quarter',
      nextDue: 'Tomorrow'
    },

    vet: {
      name: 'Dr. Amit Verma',
      qualification: 'M.V.Sc',
      date: 'Today',
      status: 'Action Required',
      summary: 'Clinical signs of mastitis in right fore quarter. Elevated temperature.',
    },

    aiRecommendation: 'CRITICAL ALERT: Kamdhenu shows a sudden drop in milk yield (-1.7L) and elevated temperature. Quadmastest confirms high SCC and mastitis risk in the RF quarter. Recommended action: Isolate milk, initiate antibiotic protocol per vet orders, and retest tomorrow.',

    analytics: {
      milkTrend: { value: '12.1 L', pct: 45, trend: 'down', trendVal: '-1.7 L vs last week' },
      healthScore: { value: '68', pct: 68, trend: 'down', trendVal: 'Attention required' },
      fertilityScore: { value: '60', pct: 60, trend: 'down', trendVal: 'Delayed cycle' },
      vaccinationComp: { value: '100%', pct: 100, trend: 'up', trendVal: 'Fully compliant' },
      diseaseAlerts: { value: '2', pct: 85, trend: 'down', trendVal: 'Mastitis risk high' },
      feedEfficiency: { value: '75%', pct: 75, trend: 'down', trendVal: 'Below average' },
      farmProductivity: { value: '71', pct: 71, trend: 'down', trendVal: 'Underperforming' },
      insights: [
        { text: 'CRITICAL: High mastitis probability (85%) in Right-Front quarter', alert: true },
        { text: 'Body temperature elevated — veterinary consult advised', alert: true },
        { text: 'Significant milk drop detected today', alert: true },
      ]
    }
  },
  {
    name: 'Surabhi',
    id: 'MP-ONG-005',
    breed: 'Ongole',
    thumb: '/thumb-surabhi.png',
    statusColor: 'green',
    age: '5 Years',
    heartRate: '68 bpm',
    bodyTemp: '38.2°C',
    activity: 'Stable',
    activityColor: 'green',
    milkYield: '17.2 L',
    totalHealth: 'Excellent',
    healthColor: 'green',
    fertility: 'Early Pregnant',
    fertilityColor: 'green',
    vaccination: 'Up to date',
    vaccinationColor: 'green',
    disease: 'Normal',
    diseaseColor: 'green',
    genomic: 'Elite Draft',
    genomicColor: 'aqua',
    trustScore: 98,
    performanceScore: 95,

    gender: 'Female',
    lactation: '3rd Lactation',
    calvingDate: '24 Sep 2025',
    ownerName: 'Rajesh Patel',
    farmName: 'Green Meadows Dairy',
    location: 'Gujarat, India',

    niramm: {
      yieldToday: '17.2 L',
      avg7Day: '17.0 L',
      fat: '4.7%',
      snf: '8.7%',
      protein: '3.5%',
      scc: '85k cells/ml',
      qualityStatus: 'Premium',
      qualityColor: 'green',
      mastitisRisk: 'Very Low',
      mastitisColor: 'green',
      ketosisRisk: 'Low',
      ketosisColor: 'green',
      fertilityRisk: 'None (Pregnant)',
      fertilityColor: 'green',
      heatStress: 'Low',
      heatStressColor: 'green',
      feedQuality: 'Excellent',
      waterQuality: 'Excellent'
    },

    quadmastest: {
      lastTest: 'Yesterday, 06:45 AM',
      healthScore: '98/100',
      mastitisRisk: 'Very Low',
      sccEstimate: '85k',
      lfStatus: 'normal',
      rfStatus: 'normal',
      lrStatus: 'normal',
      rrStatus: 'normal',
      recommendation: 'Excellent udder health',
      nextDue: 'In 6 days'
    },

    vet: {
      name: 'Dr. S. K. Sharma',
      qualification: 'B.V.Sc & A.H.',
      date: '05 Jun 2026',
      status: 'Elite Health',
      summary: 'Perfect condition. Elite genomic marker expression evident in physical traits.',
    },

    aiRecommendation: 'Surabhi is performing exceptionally well. Elite health and premium milk quality metrics are consistent. Early pregnancy is stable. Recommended action: Continue standard care. No changes required.',

    analytics: {
      milkTrend: { value: '17.2 L', pct: 88, trend: 'up', trendVal: '+0.4 L vs last week' },
      healthScore: { value: '98', pct: 98, trend: 'up', trendVal: 'Elite condition' },
      fertilityScore: { value: '95', pct: 95, trend: 'up', trendVal: 'Confirmed pregnant' },
      vaccinationComp: { value: '100%', pct: 100, trend: 'up', trendVal: 'Fully compliant' },
      diseaseAlerts: { value: '0', pct: 2, trend: 'up', trendVal: 'No alerts' },
      feedEfficiency: { value: '96%', pct: 96, trend: 'up', trendVal: 'Top 5%' },
      farmProductivity: { value: '97', pct: 97, trend: 'up', trendVal: 'Elite performer' },
      insights: [
        'Top 5% farm performer in feed efficiency',
        'Early pregnancy stable — continue standard care',
        'No risk factors identified',
      ]
    }
  }
];

let currentIndex = 0;
let isTransitioning = false;

// ──── DOM ELEMENTS ────
const cattleList = document.getElementById('cattle-list');
const cattleName = document.getElementById('cattle-name');
const cattleIdTop = document.getElementById('cattle-id-top');
const cattle3d = document.getElementById('cattle-3d');
const detailsContent = document.getElementById('details-content');
const statusBadge = document.getElementById('status-badge');
const analyticsGrid = document.getElementById('analytics-grid');
const analyticsNameEl = document.getElementById('analytics-name');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');


// ──── RENDER CATTLE LIST ────
function renderCattleList() {
  cattleList.innerHTML = cattleData.map((c, i) => `
    <div class="dt-cattle-item ${i === currentIndex ? 'active' : ''}" data-index="${i}">
      <img src="${c.thumb}" alt="${c.name}" class="dt-cattle-thumb" />
      <div class="dt-cattle-info">
        <div class="dt-cattle-info-name">${c.name}</div>
        <div class="dt-cattle-info-id">${c.id}</div>
      </div>
      <span class="dt-cattle-status-dot ${c.statusColor}"></span>
    </div>
  `).join('');

  cattleList.querySelectorAll('.dt-cattle-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index);
      if (idx !== currentIndex) switchCattle(idx);
    });
  });
}


// ──── RENDER DETAILS PANEL ────
function renderDetails(c) {
  const svgIcon = (path) => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${path}</svg>`;

  detailsContent.innerHTML = `
    <div class="dt-detail-group">
      <div class="dt-detail-group-title">Identity</div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>')} Animal ID</span>
        <span class="dt-detail-value aqua">${c.id}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/>')} Breed</span>
        <span class="dt-detail-value">${c.breed}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>')} Age</span>
        <span class="dt-detail-value">${c.age}</span>
      </div>
    </div>

    <div class="dt-detail-group">
      <div class="dt-detail-group-title">Vitals</div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>')} Heart Rate</span>
        <span class="dt-detail-value green">${c.heartRate}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>')} Body Temp</span>
        <span class="dt-detail-value">${c.bodyTemp}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>')} Activity</span>
        <span class="dt-detail-value ${c.activityColor}">${c.activity}</span>
      </div>
    </div>

    <div class="dt-detail-group">
      <div class="dt-detail-group-title">Production</div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/>')} Daily Milk</span>
        <span class="dt-detail-value gold">${c.milkYield}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>')} Health</span>
        <span class="dt-detail-value ${c.healthColor}">${c.totalHealth}</span>
      </div>
    </div>

    <div class="dt-detail-group">
      <div class="dt-detail-group-title">Reproductive</div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>')} Fertility</span>
        <span class="dt-detail-value ${c.fertilityColor}">${c.fertility}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')} Vaccination</span>
        <span class="dt-detail-value ${c.vaccinationColor}">${c.vaccination}</span>
      </div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>')} Disease</span>
        <span class="dt-detail-value ${c.diseaseColor}">${c.disease}</span>
      </div>
    </div>

    <div class="dt-detail-group">
      <div class="dt-detail-group-title">Intelligence</div>
      <div class="dt-detail-row">
        <span class="dt-detail-key">${svgIcon('<circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>')} Genomic</span>
        <span class="dt-detail-value ${c.genomicColor}">${c.genomic}</span>
      </div>
    </div>

    <div class="dt-score-bar">
      <div class="dt-score-bar-header">
        <span class="dt-score-bar-label">Trust Score</span>
        <span class="dt-score-bar-value">${c.trustScore}/100</span>
      </div>
      <div class="dt-score-track">
        <div class="dt-score-fill" style="width: 0%"></div>
      </div>
    </div>

    <div class="dt-score-bar" style="margin-top: 8px;">
      <div class="dt-score-bar-header">
        <span class="dt-score-bar-label">Performance Score</span>
        <span class="dt-score-bar-value">${c.performanceScore}/100</span>
      </div>
      <div class="dt-score-track">
        <div class="dt-score-fill" style="width: 0%"></div>
      </div>
    </div>
  `;

  // Status badge
  statusBadge.textContent = c.totalHealth;
  statusBadge.style.background = c.healthColor === 'green'
    ? 'rgba(52, 211, 153, 0.12)' : 'rgba(251, 146, 60, 0.12)';
  statusBadge.style.color = c.healthColor === 'green'
    ? '#34d399' : '#fb923c';
  statusBadge.style.borderColor = c.healthColor === 'green'
    ? 'rgba(52, 211, 153, 0.2)' : 'rgba(251, 146, 60, 0.2)';

  // Animate score bars
  setTimeout(() => {
    const fills = detailsContent.querySelectorAll('.dt-score-fill');
    if (fills[0]) fills[0].style.width = `${c.trustScore}%`;
    if (fills[1]) fills[1].style.width = `${c.performanceScore}%`;
  }, 100);
}


// ──── RENDER ANALYTICS ────
function renderAnalytics(c) {
  const a = c.analytics;

  const cards = [
    { title: 'Milk Production', icon: 'emerald', svg: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/>', data: a.milkTrend, color: 'emerald' },
    { title: 'Health Score', icon: 'aqua', svg: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>', data: a.healthScore, color: 'aqua' },
    { title: 'Fertility Score', icon: 'pink', svg: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>', data: a.fertilityScore, color: 'pink' },
    { title: 'Vaccination', icon: 'blue', svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', data: a.vaccinationComp, color: 'blue' },
    { title: 'Disease Alerts', icon: 'red', svg: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>', data: a.diseaseAlerts, color: 'red' },
    { title: 'Feed Efficiency', icon: 'orange', svg: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>', data: a.feedEfficiency, color: 'orange' },
    { title: 'Farm Productivity', icon: 'purple', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', data: a.farmProductivity, color: 'purple' },
  ];

  let html = cards.map(card => `
    <div class="dt-analytics-card">
      <div class="dt-ac-icon ${card.icon}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${card.svg}</svg>
      </div>
      <div class="dt-ac-title">${card.title}</div>
      <div class="dt-ac-value">${card.data.value}</div>
      <div class="dt-ac-bar">
        <div class="dt-ac-bar-fill ${card.color}" style="width: 0%" data-width="${card.data.pct}"></div>
      </div>
      <div class="dt-ac-sub">
        <span class="dt-ac-trend ${card.data.trend}">${card.data.trend === 'up' ? '↑' : card.data.trend === 'down' ? '↓' : '→'}</span>
        ${card.data.trendVal}
      </div>
    </div>
  `).join('');

  // Quick Insights card
  const insights = (a.insights || []).map(ins => {
    const isObj = typeof ins === 'object';
    const text = isObj ? ins.text : ins;
    const isAlert = isObj && ins.alert;
    return `<div class="dt-insight-item ${isAlert ? 'alert' : ''}">${text}</div>`;
  }).join('');

  html += `
    <div class="dt-analytics-card wide">
      <div class="dt-ac-icon gold">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      </div>
      <div class="dt-ac-title">Quick Insights</div>
      <div class="dt-insights-list">${insights}</div>
    </div>
  `;

  analyticsGrid.innerHTML = html;
  analyticsNameEl.textContent = `${c.name} — ${c.id}`;

  // Animate bars
  setTimeout(() => {
    analyticsGrid.querySelectorAll('.dt-ac-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 200);
}


// ──── RENDER INSIGHTS ────
function renderInsights(c) {
  // Card 1: Profile
  document.getElementById('ip-thumb').src = c.thumb;
  document.getElementById('ip-name').textContent = c.name;
  document.getElementById('ip-id').textContent = c.id;
  document.getElementById('ip-breed').textContent = c.breed;
  document.getElementById('ip-age').textContent = c.age;
  document.getElementById('ip-gender').textContent = c.gender;
  document.getElementById('ip-lactation').textContent = c.lactation;
  document.getElementById('ip-calving').textContent = c.calvingDate;
  document.getElementById('ip-owner').textContent = c.ownerName;
  document.getElementById('ip-farm').textContent = c.farmName;
  document.getElementById('ip-trust').textContent = c.trustScore + '/100';

  // Card 2: NIRAMM
  document.getElementById('in-yield').textContent = c.niramm.yieldToday;
  document.getElementById('in-avg').textContent = c.niramm.avg7Day;
  document.getElementById('in-fat').textContent = c.niramm.fat;
  document.getElementById('in-snf').textContent = c.niramm.snf;
  document.getElementById('in-protein').textContent = c.niramm.protein;
  document.getElementById('in-scc').textContent = c.niramm.scc;
  
  const inQuality = document.getElementById('in-quality');
  inQuality.textContent = c.niramm.qualityStatus;
  inQuality.className = 'dt-ns-badge ' + c.niramm.qualityColor;

  const inMastitis = document.getElementById('in-mastitis');
  inMastitis.textContent = c.niramm.mastitisRisk;
  inMastitis.className = 'dt-ns-badge ' + c.niramm.mastitisColor;

  const inKetosis = document.getElementById('in-ketosis');
  inKetosis.textContent = c.niramm.ketosisRisk;
  inKetosis.className = 'dt-ns-badge ' + c.niramm.ketosisColor;

  const inFertility = document.getElementById('in-fertility');
  inFertility.textContent = c.niramm.fertilityRisk;
  inFertility.className = 'dt-ns-badge ' + c.niramm.fertilityColor;

  const inHeat = document.getElementById('in-heat');
  inHeat.textContent = c.niramm.heatStress;
  inHeat.className = 'dt-ns-badge ' + c.niramm.heatStressColor;

  const inFeed = document.getElementById('in-feed');
  inFeed.textContent = c.niramm.feedQuality;
  inFeed.className = 'dt-ns-badge green';

  // Card 3: Quadmastest
  document.getElementById('iq-score').textContent = c.quadmastest.healthScore;
  document.getElementById('iq-date').textContent = c.quadmastest.lastTest;
  document.getElementById('iq-scc').textContent = c.quadmastest.sccEstimate;
  document.getElementById('iq-risk').textContent = c.quadmastest.mastitisRisk;
  document.getElementById('iq-rec').textContent = c.quadmastest.recommendation;
  document.getElementById('iq-due').textContent = c.quadmastest.nextDue;
  
  document.getElementById('iq-lf').className = 'dt-udder-q ' + c.quadmastest.lfStatus;
  document.getElementById('iq-rf').className = 'dt-udder-q ' + c.quadmastest.rfStatus;
  document.getElementById('iq-lr').className = 'dt-udder-q ' + c.quadmastest.lrStatus;
  document.getElementById('iq-rr').className = 'dt-udder-q ' + c.quadmastest.rrStatus;

  // Card 4: Vet Verified
  document.getElementById('iv-status').textContent = c.vet.status;
  document.getElementById('iv-summary').textContent = c.vet.summary;
  document.getElementById('iv-name').textContent = c.vet.name;
  document.getElementById('iv-qual').textContent = c.vet.qualification;
  document.getElementById('iv-date').textContent = c.vet.date;

  // Card 5: AI Recommendation
  document.getElementById('ir-text').textContent = c.aiRecommendation;

  // Re-trigger animations
  const cards = document.querySelectorAll('.dt-insight-card');
  cards.forEach(card => {
    card.style.animation = 'none';
    card.offsetHeight; // trigger reflow
    card.style.animation = 'cardFadeIn 0.5s var(--ease-out) forwards';
  });
}


// ──── SWITCH CATTLE ────
function switchCattle(newIndex) {
  if (isTransitioning || newIndex === currentIndex) return;
  isTransitioning = true;

  const direction = newIndex > currentIndex ? 1 : -1;

  // Animate cattle out
  cattle3d.classList.add('switching');
  cattle3d.style.setProperty('--rotate-y', `${currentRotation + (direction * 30)}deg`);
  cattle3d.style.transform = `scale(0.85) translateX(${direction * -40}px)`;

  setTimeout(() => {
    currentIndex = newIndex;
    currentRotation = 0;
    cattle3d.style.setProperty('--rotate-y', '0deg');
    const c = cattleData[currentIndex];

    // Update header
    cattleName.textContent = c.name;
    cattleIdTop.textContent = c.id;

    // Update list
    renderCattleList();
    renderDetails(c);
    renderInsights(c);
    renderAnalytics(c);

    // Animate cattle in
    cattle3d.classList.remove('switching');
    cattle3d.classList.add('entering');
    cattle3d.style.transform = '';

    setTimeout(() => {
      cattle3d.classList.remove('entering');
      isTransitioning = false;
    }, 700);
  }, 400);
}

// Arrow navigation
arrowLeft?.addEventListener('click', () => {
  const prev = currentIndex === 0 ? cattleData.length - 1 : currentIndex - 1;
  switchCattle(prev);
});

arrowRight?.addEventListener('click', () => {
  const next = currentIndex === cattleData.length - 1 ? 0 : currentIndex + 1;
  switchCattle(next);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') arrowLeft?.click();
  if (e.key === 'ArrowRight') arrowRight?.click();
});


// ──── VIEWER PARTICLES ────
const pCanvas = document.getElementById('viewer-particles');
const pCtx = pCanvas?.getContext('2d');
let dots = [];

function initViewerParticles() {
  if (!pCanvas || !pCtx) return;

  const rect = pCanvas.parentElement.getBoundingClientRect();
  pCanvas.width = rect.width;
  pCanvas.height = rect.height;

  dots = [];
  const count = 40;
  for (let i = 0; i < count; i++) {
    dots.push({
      x: Math.random() * pCanvas.width,
      y: Math.random() * pCanvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.25 + 0.05
    });
  }
}

function drawViewerParticles() {
  if (!pCtx || !pCanvas) return;

  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

  dots.forEach(d => {
    d.x += d.vx;
    d.y += d.vy;
    if (d.x < 0) d.x = pCanvas.width;
    if (d.x > pCanvas.width) d.x = 0;
    if (d.y < 0) d.y = pCanvas.height;
    if (d.y > pCanvas.height) d.y = 0;

    pCtx.beginPath();
    pCtx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    pCtx.fillStyle = `rgba(45, 212, 191, ${d.o})`;
    pCtx.fill();
  });

  requestAnimationFrame(drawViewerParticles);
}

initViewerParticles();
drawViewerParticles();

window.addEventListener('resize', initViewerParticles);


let isDragging = false;
let startX = 0;
let currentRotation = 0;

cattle3d?.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  cattle3d.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  currentRotation = Math.max(-30, Math.min(30, currentRotation + dx * 0.2));
  startX = e.clientX; // accumulate
  cattle3d.style.setProperty('--rotate-y', `${currentRotation}deg`);
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  cattle3d.style.cursor = 'grab';
});


// ──── INITIAL RENDER ────
renderCattleList();
renderDetails(cattleData[0]);
renderInsights(cattleData[0]);
renderAnalytics(cattleData[0]);

// ──── Page load animation ────
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
requestAnimationFrame(() => {
  document.body.style.opacity = '1';
});

// ──── Mobile Navbar Toggle ────
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  const mobileLinks = navLinks.querySelectorAll('.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

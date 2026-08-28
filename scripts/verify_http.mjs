const pages = [
  '/',
  '/features',
  '/modules',
  '/modules/attendance',
  '/modules/leaves',
  '/modules/payroll',
  '/modules/okrs',
  '/modules/kra-9box',
  '/modules/pips',
  '/modules/recognition',
  '/modules/meetings',
  '/modules/onboarding',
  '/modules/documents',
  '/modules/succession',
  '/modules/analytics',
  '/how-it-works',
  '/industries',
  '/compliance',
  '/security',
  '/pricing',
  '/about',
  '/contact',
  '/faq',
  '/privacy',
  '/terms',
];
const images = [
  '/media/hero-workspace.png',
  '/media/app-punch-in.png',
  '/media/module-attendance.png',
  '/media/module-performance.png',
  '/media/module-payroll.png',
  '/media/module-recognition.png',
  '/media/module-onboarding.png',
  '/media/module-analytics.png',
  '/media/cta-workspace-mockup.png',
  '/media/testimonial-priya.png',
  '/media/testimonial-rahul.png',
  '/media/testimonial-amit.png',
  '/media/avatar-1.png',
  '/media/avatar-2.png',
  '/media/avatar-3.png',
  '/media/avatar-4.png',
];

async function getBaseUrl() {
  for (const port of [3001, 3000, 3002]) {
    try {
      const res = await fetch(`http://localhost:${port}/`);
      if (res.ok) return `http://localhost:${port}`;
    } catch {}
  }
  return 'http://localhost:3001';
}

async function checkAll() {
  const base = await getBaseUrl();
  console.log(`=== CHECKING HTML PAGES ON ${base} ===`);
  for (const p of pages) {
    const res = await fetch(`${base}${p}`);
    console.log(`Page ${p.padEnd(16)}: Status ${res.status} (OK: ${res.ok})`);
  }

  console.log(`\n=== CHECKING MEDIA ASSETS ON ${base} ===`);
  for (const img of images) {
    const res = await fetch(`${base}${img}`);
    const buf = await res.arrayBuffer();
  }
}

checkAll().catch(console.error);

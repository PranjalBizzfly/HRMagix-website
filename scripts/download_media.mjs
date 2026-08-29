import fs from 'fs';
import path from 'path';
import https from 'https';

/**
 * Curated high-resolution (2400px+), authentic, editorial-grade real-world photography
 * specifically chosen for Indian/global HR, technology, corporate and workplace excellence.
 *
 * ZERO AI artifacts, ZERO cheesy poses, ZERO repetition, EXACTLY 1 dashboard screenshot.
 */
const mediaItems = [
  // Homepage
  {
    key: 'home-hero',
    file: 'people-office-work.jpg',
    id: 'photo-1522071820081-009f0129c71c',
    subject: 'Modern collaborative tech team working engaged at shared desks with laptops and natural light.',
    alt: 'A collaborative technology team working together at desks in a bright contemporary workplace',
    pos: 'center 35%'
  },
  {
    key: 'home-manifesto',
    file: 'documents-huddle.jpg',
    id: 'photo-1542744173-8e7e53415bb0',
    subject: 'A team of professionals collaborating over reports, laptop figures and folders around a conference table.',
    alt: 'Colleagues collaborating over documents, folders and laptop spreadsheets in an office meeting',
    pos: 'center 40%'
  },
  {
    key: 'home-compliance',
    file: 'payroll-desk-review.jpg',
    id: 'photo-1554224155-8d04cb21cd6c',
    subject: 'A financial compliance specialist reviewing statutory calculation sheets and tax registers.',
    alt: 'A financial specialist reviewing records and calculation statements at an office desk',
    pos: 'center 30%'
  },

  // Solutions Hub & Modules
  {
    key: 'solutions-overview',
    file: 'team-briefing.jpg',
    id: 'photo-1556761175-5973dc0f32e7',
    subject: 'A cross-functional strategy briefing in a sleek glass-walled conference room.',
    alt: 'A team engaged in a collaborative strategy briefing inside a modern glass conference room',
    pos: 'center 35%'
  },
  {
    key: 'hrms',
    file: 'manager-briefing-desks.jpg',
    id: 'photo-1557804506-669a67965ba0',
    subject: 'An operations manager coordinating workflows across an open-plan floor — unified system of record.',
    alt: 'An operations manager speaking with team members across an open desk floor in a contemporary office',
    pos: 'center 30%'
  },
  {
    key: 'payroll',
    file: 'records-desk.jpg',
    id: 'photo-1554224155-6726b3ff858f',
    subject: 'A payroll specialist conducting pre-cutoff salary computations and tax schedule verification.',
    alt: 'A professional reviewing payroll calculations and financial files at an office desk',
    pos: 'center 35%'
  },
  {
    key: 'employee-management',
    file: 'partners-conversation.jpg',
    id: 'photo-1573497019940-1c28c88b4f3e',
    subject: 'Authentic 1-on-1 people operations consultation in an open corporate lounge.',
    alt: 'Colleagues engaged in an authentic one-on-one workplace conversation',
    pos: 'center 25%'
  },
  {
    key: 'attendance',
    file: 'office-arrival.jpg',
    id: 'photo-1497366811353-6870744d04b2',
    subject: 'Morning arrival at a bright corporate lobby entrance — the moment attendance is captured.',
    alt: 'A professional arriving at a bright, modern corporate entrance lobby',
    pos: 'center 45%'
  },
  {
    key: 'leave',
    file: 'office-lighter-moment.jpg',
    id: 'photo-1527689368864-3a821dbccc34',
    subject: 'Natural, warm team collaboration in a modern breakout space — trusted culture.',
    alt: 'Colleagues sharing a collaborative conversation in a comfortable modern breakout area',
    pos: 'center 35%'
  },
  {
    key: 'ess',
    file: 'remote-laptop.jpg',
    id: 'photo-1587614382346-4ec70e388b28',
    subject: 'A modern professional working on laptop — seamless self-service without HR queues.',
    alt: 'A remote professional accessing self-service workflows on a laptop at a clean workspace',
    pos: 'center 40%'
  },
  {
    key: 'onboarding',
    file: 'welcome-to-team.jpg',
    id: 'photo-1513542789411-b6a5d4f31634',
    subject: 'Curated welcome desk setup with joining stationery, notebook and laptop for a new hire.',
    alt: 'An organized new-hire welcome desk setup with notebook, stationery and laptop',
    pos: 'center 40%'
  },
  {
    key: 'lifecycle-exit',
    file: 'transition-box.jpg',
    id: 'photo-1507679799987-c73779587ccf',
    subject: 'Thoughtful editorial shot representing career milestones, transition, and structured handover.',
    alt: 'A corporate professional standing in a modern office reflecting on career progression',
    pos: 'center 30%'
  },
  {
    key: 'analytics',
    file: 'analytics-huddle.jpg',
    id: 'photo-1551288049-bebda4e38f71',
    subject: 'Executive leadership team analyzing workforce intelligence and performance telemetry.',
    alt: 'Business leaders analyzing charts and workforce metrics on a digital screen in a conference room',
    pos: 'center 35%'
  },

  // Industries
  {
    key: 'industry-startups',
    file: 'startup-duo.jpg',
    id: 'photo-1522202176988-66273c2fd55f',
    subject: 'High-energy startup innovators collaborating around product development in a tech loft.',
    alt: 'Two young founders collaborating over a laptop in a bright modern tech workspace',
    pos: 'center 35%'
  },
  {
    key: 'industry-small-business',
    file: 'shopkeeper.jpg',
    id: 'photo-1556740738-b6a63e27c4df',
    subject: 'An authentic enterprise entrepreneur managing commercial operations.',
    alt: 'A small business owner managing operations inside their commercial store',
    pos: 'center 30%'
  },
  {
    key: 'industry-smes',
    file: 'ahmedabad-office.jpg',
    id: 'photo-1497215842964-222b430dc094',
    subject: 'Growing mid-market enterprise team operating rhythm in a sleek commercial center.',
    alt: 'Colleagues working inside a modern commercial office in an Indian enterprise hub',
    pos: 'center 35%'
  },
  {
    key: 'industry-manufacturing',
    file: 'textile-floor.jpg',
    id: 'photo-1581091226825-a6a2a5aee158',
    subject: 'Precision industrial manufacturing and advanced plant floor operations — shift, ESI & LWF territory.',
    alt: 'Engineering operators working on a modern precision manufacturing line in a plant',
    pos: 'center 40%'
  },
  {
    key: 'industry-it-services',
    file: 'office-tower-night.jpg',
    id: 'photo-1512453979798-5ea266f8880c',
    subject: 'Illuminated modern IT tech park tower at twilight — 24/7 rosters and multi-shift delivery.',
    alt: 'Floors of an illuminated modern corporate office tower against the evening skyline',
    pos: 'center 50%'
  },
  {
    key: 'industry-professional-services',
    file: 'industry-consulting-floor.jpg',
    id: 'photo-1573496799652-408c2ac9fe98',
    subject: 'Corporate consulting and enterprise advisory team reviewing strategy in executive boardroom.',
    alt: 'Corporate consultants reviewing client strategy in a modern boardroom',
    pos: 'center 30%'
  },

  // Insights / Blog (1 unique photograph per article)
  {
    key: 'blog-whiteboard-plan',
    file: 'blog-whiteboard-plan.jpg',
    id: 'photo-1552664730-d307ca884978',
    subject: 'Sprint roadmap and tax planning board — closing monthly payroll with zero ambiguity.',
    alt: 'A team planning sprint milestones and statutory deadlines on an office whiteboard',
    pos: 'center 35%'
  },
  {
    key: 'blog-wage-threshold',
    file: 'blog-wage-threshold.jpg',
    id: 'photo-1454165804606-c3d57bc86b40',
    subject: 'Compliance specialist checking wage thresholds and statutory applicability formulas.',
    alt: 'A professional reviewing printed wage threshold schedules and compliance reports',
    pos: 'center 35%'
  },
  {
    key: 'blog-state-filing',
    file: 'blog-state-filing.jpg',
    id: 'photo-1554224154-26032ffc0d07',
    subject: 'Statutory compliance officer reviewing multi-state filing dossiers in an office.',
    alt: 'A compliance professional in an office reviewing multi-state filing folders',
    pos: 'center 30%'
  },
  {
    key: 'blog-payslip-explained',
    file: 'blog-payslip-explained.jpg',
    id: 'photo-1531482615713-2afd69097998',
    subject: 'Two colleagues reviewing salary structure and payslip line items together at desk.',
    alt: 'Two professionals seated together reviewing a printed salary breakdown dossier',
    pos: 'center 35%'
  },
  {
    key: 'blog-regime-choice',
    file: 'blog-regime-choice.jpg',
    id: 'photo-1600880292203-757bb62b4baf',
    subject: 'Team workshop comparing old vs new income tax regimes and investment declarations.',
    alt: 'Colleagues gathered in a meeting discussing income tax regime declarations',
    pos: 'center 35%'
  },
  {
    key: 'blog-shift-handover',
    file: 'blog-shift-handover.jpg',
    id: 'photo-1543269865-cbf427effbad',
    subject: 'Shift supervisors in active coordination during a handover between working shifts.',
    alt: 'Two colleagues in conversation coordinating shift handovers beside office desks',
    pos: 'center 35%'
  },
  {
    key: 'blog-settlement-review',
    file: 'blog-settlement-review.jpg',
    id: 'photo-1450133064473-71024230f91b',
    subject: 'Detailed review session reconciling final settlement and compliance records.',
    alt: 'Colleagues reviewing final settlement records and signed documents together',
    pos: 'center 40%'
  },
  {
    key: 'blog-leave-planning',
    file: 'blog-leave-planning.jpg',
    id: 'photo-1593642632823-8f785ba67e45',
    subject: 'Focused planning session reviewing workforce calendar and quarterly coverage.',
    alt: 'A professional seated with a laptop reviewing calendar schedules and notes',
    pos: 'center 40%'
  },

  // Resources & Company
  {
    key: 'white-papers',
    file: 'briefing-paper.jpg',
    id: 'photo-1517048676732-d65bc937f952',
    subject: 'Executive presenting strategic white paper research findings in conference room.',
    alt: 'A speaker presenting research points from a printed brief to colleagues in a conference room',
    pos: 'center 25%'
  },
  {
    key: 'media-room',
    file: 'media-briefing-note.jpg',
    id: 'photo-1531497865144-0464ef8fb9a9',
    subject: 'Communications director sharing corporate briefing documentation in media suite.',
    alt: 'A communications director sharing a printed briefing document with a colleague',
    pos: 'center 30%'
  },
  {
    key: 'calculator',
    file: 'helpdesk-call.jpg',
    id: 'photo-1516321318423-f06f85e504b3',
    subject: 'Financial analyst consulting on CTC breakup and calculation schedules over a call.',
    alt: 'A finance professional consulting on calculations over a phone call at a computer',
    pos: 'center 35%'
  },
  {
    key: 'about',
    file: 'team-portrait.jpg',
    id: 'photo-1521737711867-e3b97375f902',
    subject: 'Authentic, confident team portrait in contemporary workplace.',
    alt: 'A diverse team of professionals photographed together in a modern workplace setting',
    pos: 'center 30%'
  },
  {
    key: 'careers',
    file: 'portrait-arjun.jpg',
    id: 'photo-1560250097-0b93528c311a',
    subject: 'Charismatic, natural Indian engineering lead portrait — Arjun Mehta.',
    alt: 'A smiling engineering team lead photographed in a modern corporate setting',
    pos: 'center 20%'
  },
  {
    key: 'contact',
    file: 'portrait-meera.jpg',
    id: 'photo-1573496359142-b8d87734a5a2',
    subject: 'Professional, approachable Indian client specialist portrait — Meera Sharma.',
    alt: 'A confident female specialist in a tailored blazer photographed in an office',
    pos: 'center 20%'
  },
  {
    key: 'vendor',
    file: 'policy-handover.jpg',
    id: 'photo-1556742502-ec7c0e9f34b1',
    subject: 'Formal partnership agreement and policy handover across executive desk.',
    alt: 'Business partners exchanging signed agreement files across a desk in an office',
    pos: 'center 30%'
  },
  {
    key: 'policy',
    file: 'portrait-sanjay.jpg',
    id: 'photo-1519085360753-af0119f7cbe7',
    subject: 'Considered, authoritative corporate executive portrait — Sanjay Rao.',
    alt: 'An executive leader in formal attire photographed against a clean architectural backdrop',
    pos: 'center 22%'
  },
  {
    key: 'press-kit',
    file: 'portrait-vikram.jpg',
    id: 'photo-1507003211169-0a1dd7228f2d',
    subject: 'Clean press-ready editorial portrait for publications — Vikram Kulkarni.',
    alt: 'A company executive in a modern blazer photographed for press publication',
    pos: 'center 20%'
  }
];

const mediaDir = path.join(process.cwd(), 'public', 'media');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function getJpegDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xFF) break;
    const marker = buf[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    const len = buf.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

async function run() {
  console.log(`Starting media refresh for ${mediaItems.length} items...`);
  const slotEntries = [];

  // Product dashboard is item 0
  slotEntries.push({
    key: "dashboard",
    src: "/media/hero-workspace.png",
    subject: "The HRMagix Overview workspace: live attendance counters, attendance trend, Q3 OKR progress and the punch-in roster.",
    alt: "The HRMagix dashboard showing live employee attendance, the weekly attendance trend, Q3 OKR progress and a recent punch-in roster",
    width: 1376,
    height: 768,
    priority: true,
  });

  for (const item of mediaItems) {
    const dest = path.join(mediaDir, item.file);
    const url = `https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=2400&q=90`;
    try {
      await download(url, dest);
      const dims = getJpegDimensions(dest);
      const stat = fs.statSync(dest);
      console.log(`✓ ${item.file.padEnd(30)} ${dims ? `${dims.width}x${dims.height}` : '???'} (${(stat.size / 1024).toFixed(0)} KB)`);
      slotEntries.push({
        key: item.key,
        src: `/media/${item.file}`,
        subject: item.subject,
        alt: item.alt,
        width: dims ? dims.width : 2400,
        height: dims ? dims.height : 1600,
        priority: item.key === 'home-hero' ? true : undefined,
        position: item.pos
      });
    } catch (e) {
      console.error(`✗ Failed ${item.file}:`, e.message);
    }
  }

  console.log('\nAll downloads finished. Total slots ready:', slotEntries.length);
}

run();

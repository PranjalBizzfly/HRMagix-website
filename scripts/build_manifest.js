const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('.pages200.json', 'utf8'));

// Function to generate slot and filename for each page
function getSlotAndFilename(page) {
  const u = page.url;
  if (u.startsWith('/resources/hr-and-payroll-glossary/')) {
    const slug = u.replace('/resources/hr-and-payroll-glossary/', '');
    return { slot: `glossary-${slug}`, filename: `hero-glossary-${slug}.webp` };
  }
  if (u.startsWith('/calculators/')) {
    const slug = u.replace('/calculators/', '');
    return { slot: `calc-${slug}`, filename: `hero-calc-${slug}.webp` };
  }
  if (u.startsWith('/resources/hr-guides/')) {
    const slug = u.replace('/resources/hr-guides/', '');
    return { slot: `guide-${slug}`, filename: `hero-guide-${slug}.webp` };
  }
  if (u.startsWith('/industries/')) {
    const slug = u.replace('/industries/', '');
    return { slot: `industry-${slug}`, filename: `hero-industry-${slug}.webp` };
  }
  if (u.startsWith('/solutions/')) {
    const slug = u.replace('/solutions/', '');
    return { slot: `solution-${slug}`, filename: `hero-solution-${slug}.webp` };
  }
  if (u === '/resources/compare') {
    return { slot: `compare-hub`, filename: `hero-compare-hub.webp` };
  }
  if (u.startsWith('/resources/compare/')) {
    const slug = u.replace('/resources/compare/', '');
    return { slot: `compare-${slug}`, filename: `hero-compare-${slug}.webp` };
  }
  if (u === '/resources/hr-letter-templates') {
    return { slot: `letter-hub`, filename: `hero-letter-hub.webp` };
  }
  if (u.startsWith('/resources/hr-letter-templates/')) {
    const slug = u.replace('/resources/hr-letter-templates/', '');
    return { slot: `letter-${slug}`, filename: `hero-letter-${slug}.webp` };
  }
  if (u === '/resources/job-description-templates') {
    return { slot: `jd-hub`, filename: `hero-jd-hub.webp` };
  }
  if (u.startsWith('/resources/job-description-templates/')) {
    const slug = u.replace('/resources/job-description-templates/', '');
    return { slot: `jd-${slug}`, filename: `hero-jd-${slug}.webp` };
  }
  if (u.startsWith('/features/')) {
    const slug = u.replace('/features/', '');
    return { slot: `feature-${slug}`, filename: `hero-feature-${slug}.webp` };
  }
  if (u === '/resources/labour-law') {
    return { slot: `labour-law-hub`, filename: `hero-labour-law-hub.webp` };
  }
  if (u.startsWith('/resources/labour-law/')) {
    const slug = u.replace('/resources/labour-law/', '');
    return { slot: `labour-law-${slug}`, filename: `hero-labour-law-${slug}.webp` };
  }
  throw new Error('Unknown url: ' + u);
}

// Function to generate a contextual, professional prompt for Google Gemini image generation
function buildPrompt(page) {
  const { name, topic, category } = page;
  
  // Specific prompt guidance by category
  let scene = '';
  if (category === 'Glossary') {
    scene = `Indian corporate HR and payroll team discussing ${name.toLowerCase()} (${topic}) in a bright glass-walled Bangalore office, wooden desk with laptops, warm sunlight, focused professional discussion`;
  } else if (category === 'Calculator') {
    scene = `Indian payroll controller and finance manager working with numerical calculations and audit reports for ${name.toLowerCase()} (${topic}) at a modern Pune corporate office workstation, dual monitors, sleek modern workspace`;
  } else if (category === 'HR guide') {
    scene = `Senior Indian HR operations manager guiding colleagues through best practices for ${name.toLowerCase()} (${topic}), modern Gurugram tech headquarters, professional collaborative atmosphere, glass partition`;
  } else if (category === 'Industry') {
    if (page.url.includes('retail')) {
      scene = `Modern upscale retail store management floor in Mumbai, Indian retail operations manager reviewing team rosters on a tablet beside a clean storefront backdrop, warm ambient lighting`;
    } else if (page.url.includes('healthcare')) {
      scene = `Indian hospital administration and clinical HR department, doctor and HR administrator in modern medical center conference room discussing 24/7 staff schedules, clean modern healthcare interior`;
    } else if (page.url.includes('hospitality')) {
      scene = `Luxury hotel back-office and operations lounge in Delhi, Indian hotel general manager and HR coordinator reviewing shift patterns, elegant contemporary hospitality setting`;
    } else if (page.url.includes('logistics')) {
      scene = `Modern logistics hub control center in Navi Mumbai, operations supervisor and fleet HR manager with tablet overseeing warehouse dispatch floor through glass window`;
    } else if (page.url.includes('staffing')) {
      scene = `Professional staffing and recruitment agency office in Bangalore, Indian talent deployment consultants collaborating at a shared conference desk`;
    } else if (page.url.includes('education')) {
      scene = `Modern university administrative office in Pune, Indian academic HR registrar discussing faculty contracts and academic schedules at a clean wood desk`;
    } else if (page.url.includes('construction')) {
      scene = `Engineered construction project headquarters in Hyderabad, Indian site project manager in hardhat and HR liaison discussing worker rosters over project plans`;
    } else if (page.url.includes('nonprofits')) {
      scene = `Social development NGO headquarters in New Delhi, Indian program director and finance officer reviewing team allocation at a collaborative sunlit table`;
    } else {
      scene = `Indian industry executives in a modern corporate setting discussing workforce management for ${name.toLowerCase()}`;
    }
  } else if (category === 'Persona solution') {
    scene = `Executive business leadership meeting in a Mumbai high-rise, Indian HR and finance leaders discussing strategic enterprise workforce systems for ${name.toLowerCase()} (${topic}), floor to ceiling windows`;
  } else if (category === 'Comparison (educational)') {
    scene = `Two Indian HR directors evaluating strategic technology decisions regarding ${name.toLowerCase()} (${topic}) in a sleek boardroom, discussing trade-offs at a conference table with open laptops`;
  } else if (category === 'HR letter template') {
    scene = `Formal corporate HR office setting in Mumbai, Indian HR executive presenting official documentation for ${name.toLowerCase()} (${topic}) to a seated colleague, elegant desk setting with pen and notebook`;
  } else if (category === 'Job description template') {
    scene = `Corporate talent acquisition office in Bangalore, Indian HR recruitment specialists drafting role responsibilities and competencies for ${name.toLowerCase()} (${topic}), modern creative office`;
  } else if (category === 'Feature') {
    scene = `Modern Indian enterprise workplace demonstrating collaborative teamwork around ${name.toLowerCase()} (${topic}), focused professionals in an architectural open-plan office`;
  } else if (category === 'Labour law explainer') {
    scene = `Corporate legal and compliance advisory room in New Delhi, Indian statutory labour compliance officer and company secretary reviewing statutory regulations for ${name.toLowerCase()} (${topic}), reference books and laptops on table`;
  } else {
    scene = `Indian corporate workplace professionals collaborating on ${name.toLowerCase()} (${topic}), modern office environment`;
  }

  return `Ultra-realistic corporate photography of ${scene}. Clean architectural composition with generous negative space on the left side for overlay headings. High-end modern Indian office interior, authentic professional Indian men and women in tasteful business attire, natural ambient daylight, shallow depth of field, 8k resolution, photorealistic, no text, no words, no watermarks, no logos, no digital graphics.`;
}

// Function to generate descriptive alt text
function buildAlt(page) {
  return `Indian corporate professionals in a modern office collaborating on ${page.name} (${page.topic})`;
}

// Function to generate caption
function buildCaption(page) {
  return `${page.name}: ${page.topic}.`;
}

const manifest = pages.map((page) => {
  const { slot, filename } = getSlotAndFilename(page);
  const slug = page.url.split('/').pop() || 'page';
  const cleanSlug = slug.replace(/[^a-z0-9]/g, '_').slice(0, 15);
  const imageName = `h${String(page.n).padStart(3, '0')}_${cleanSlug}`;
  return {
    ...page,
    slot,
    filename,
    imageName,
    prompt: buildPrompt(page),
    alt: buildAlt(page),
    caption: buildCaption(page)
  };
});

fs.writeFileSync('scripts/hero_manifest.json', JSON.stringify(manifest, null, 2));
console.log('Manifest written with', manifest.length, 'entries.');

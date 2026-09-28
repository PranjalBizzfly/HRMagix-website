import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = 'public/media';

const conversions = [
  // 12 Feature subpage hero backgrounds
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/ai_operations_pro_1789037184530.jpg',
    dest: 'feature-attendance-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/b7db8645-17fb-49fd-b34f-89df3b44b547/team_collaboration_1789470692088.jpg',
    dest: 'feature-leaves-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/tech_data_platforms_clean_1789018816247.jpg',
    dest: 'feature-payroll-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_web_dev_s1_1789198848687.jpg',
    dest: 'feature-directory-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/tech_security_access_clean_1789018960605.jpg',
    dest: 'feature-documents-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/e6c569e0-9cf9-4652-9e0f-bf57464724a4/growth_engine_blueprint_1789130765730.jpg',
    dest: 'feature-okrs-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/practice_analytics_s2_1789198689272.jpg',
    dest: 'feature-ninebox-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_marketing_s2_1789201194640.jpg',
    dest: 'feature-recognition-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_analytics_s1_1789200937411.jpg',
    dest: 'feature-analytics-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/b7db8645-17fb-49fd-b34f-89df3b44b547/remote_work_focused_1789470721760.jpg',
    dest: 'feature-ess-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/accessibility_audit_pro_1789037659008.jpg',
    dest: 'feature-compliance-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/seo_specialist_pro_1789037587779.jpg',
    dest: 'feature-offboarding-hero.webp',
  },

  // 8 Statutory Calculator hero backgrounds
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_analytics_s2_1789200894376.jpg',
    dest: 'calc-salary-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/tech_cloud_and_hosting_1789018687604.jpg',
    dest: 'calc-pf-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/company_faq_pro_1789037678633.jpg',
    dest: 'calc-esi-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_analytics_s3_1789199486164.jpg',
    dest: 'calc-gratuity-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/practice_web_dev_s1_1789198619460.jpg',
    dest: 'calc-payroll-cost-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_search_s1_1789201285484.jpg',
    dest: 'calc-plan-cost-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/e6c569e0-9cf9-4652-9e0f-bf57464724a4/tech_testing_quality_1789130858924.jpg',
    dest: 'calc-overtime-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/bfdab6cf-6a0b-41b9-b467-0c3f8aa2bcd0/indian_web_dev_s2_1789198882181.jpg',
    dest: 'calc-ctc-hero.webp',
  },

  // 4 Policy subpage hero backgrounds
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/ai_assessment_pro_1789037225887.jpg',
    dest: 'policy-privacy-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/e6c569e0-9cf9-4652-9e0f-bf57464724a4/case_studies_audit_1789130839211.jpg',
    dest: 'policy-terms-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/4b988ff2-b686-401d-b1db-11cd8892b24d/tech_ai_stack_clean_1789018770907.jpg',
    dest: 'policy-security-hero.webp',
  },
  {
    src: 'C:/Users/Dreams/.gemini/antigravity-ide/brain/e6c569e0-9cf9-4652-9e0f-bf57464724a4/discovery_process_audit_1789131237510.jpg',
    dest: 'policy-cookies-hero.webp',
  },
];

async function convertAll() {
  console.log(`Starting conversion of ${conversions.length} images...`);
  for (const item of conversions) {
    if (!fs.existsSync(item.src)) {
      console.error(`Source not found: ${item.src}`);
      continue;
    }
    const destPath = path.join(targetDir, item.dest);
    const info = await sharp(item.src)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(destPath);
    console.log(`✓ ${item.dest} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB)`);
  }
  console.log('Conversion complete!');
}

convertAll().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});

async function run() {
  const r = await fetch('http://localhost:3111/resources/hr-and-payroll-glossary/variable-pay');
  const html = await r.text();
  console.log('Status:', r.status);
  console.log('Contains hero-glossary-variable-pay.webp:', html.includes('hero-glossary-variable-pay.webp'));
}
run().catch(console.error);

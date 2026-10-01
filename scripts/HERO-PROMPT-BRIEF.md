# Hero image scene brief

You are writing scene specifications that a person will paste into Gemini to generate one hero background photograph per page. Each page needs a DIFFERENT photograph that clearly matches its topic.

## Output

A JSON array, one object per page you are assigned, in the same order, with exactly these string fields:

```json
{
  "slot": "copied from the input",
  "scene": "What is happening, specific to THIS page's topic (1 sentence, 15-30 words).",
  "people": "Who is in frame: count, approximate age, gender, Indian/South Asian appearance, hairstyle, expression. Use 'no people' only where a person-free scene genuinely fits.",
  "wardrobe": "Clothing with specific colours and fabrics, e.g. 'mustard cotton kurta with white churidar', 'charcoal blazer over pale blue shirt'.",
  "setting": "A specific, concrete Indian location and its details, e.g. 'payroll cabin of a textile mill in Tiruppur with steel almirahs and a wall clock'.",
  "camera": "Angle, lens and framing, e.g. 'low angle 35mm, waist-up, subjects on right third'.",
  "lighting": "Light quality and time of day, e.g. 'late-afternoon window light with long soft shadows'.",
  "space": "left" or "right" (the side kept clean and uncluttered for the headline),
  "alt": "Alt text describing exactly what this image will show, 12-25 words, specific to the scene, no 'image of', no keyword stuffing, mentions the topic naturally."
}
```

## Rules

1. **Topic first.** The scene must make sense for the page. A gratuity page shows a long-serving employee's farewell settlement being explained; a geo-fencing page shows a field worker checking in on a phone at a site gate; a construction industry page shows a site office. Read the page's `topic` and `name`.
2. **Never repeat across your set** (and avoid anything close): the same setting, the same wardrobe colour combination, the same camera angle + framing pair, the same lighting description, or the same people description. Vary city/region (Pune, Chennai, Kochi, Jaipur, Guwahati, Indore, Coimbatore, Lucknow, Bhubaneswar, Hyderabad, Ahmedabad, Mysuru, Surat, Nagpur, Chandigarh, Vizag and more), environment type (office, factory floor, warehouse, hospital, school, retail floor, hotel back office, construction site, NGO field office, home office, co-working space, bank branch, courtroom corridor, training room, canteen, rooftop, campus lawn), camera (eye level, high angle, low angle, overhead flat lay, over-the-shoulder, wide establishing, medium, close detail), and time of day.
3. **Avoid what is already overused:** glass-walled corporate office with a city skyline, two people at a laptop on a wooden desk, boardroom handshake. At most a handful of your scenes may be in a conventional corporate office, and each must be visibly different.
4. **Variety of people:** mix ages (early 20s to 60s), genders, roles (shop-floor workers, nurses, teachers, drivers, accountants, founders, HR staff, managers), and group sizes (1, 2, 3, small group, crowd in background). Indian or South Asian appearance where people appear.
5. **Hero-friendly composition:** subjects sit on one third; the other side (given by `space`) is calm and uncluttered.
6. **Must not appear:** any readable text, signage, labels, document text, screen content, logos (including laptop/phone logos), brand names, watermarks, dashboards or UI. Screens, if present, face away or are dark. Papers are blank or out of focus.
7. **Respect and realism:** dignified, natural, professional; no stereotypes, no exaggerated expressions.
8. **Alt text:** describes the actual scene as specified (people, action, place), not the page's SEO keyword list. Each alt is unique.

Write the JSON file you are assigned, validate it parses (`node -e "JSON.parse(require('fs').readFileSync('<file>','utf8'))"`), and confirm every `slot` from the input appears exactly once.

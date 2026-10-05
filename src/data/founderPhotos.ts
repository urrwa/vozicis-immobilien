// Reference-based AI editorial scenes. Each primary placement has its own asset.
// Generation prompts and identity reference are recorded in FOUNDER-PHOTO-PROMPTS.json.
export const founderPhoto = (name: string) => `/images/founder-natural/${name}.png`;

export const FOUNDER_PHOTOS = {
  hero: ['hero-analysis', 'hero-boardroom', 'hero-advisory', 'hero-notary'].map(founderPhoto),
  profile: ['founder-portrait', 'founder-property', 'founder-onsite'].map(founderPhoto),
  journey: ['journey-contact', 'journey-strategy', 'journey-network', 'journey-consultation', 'journey-matching', 'journey-partnership'].map(founderPhoto),
  marketArticle: founderPhoto('article-market'),
  personalArticle: founderPhoto('article-personal'),
  consultation: founderPhoto('consultation-cta'),
};

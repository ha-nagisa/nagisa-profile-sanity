const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;
const SANITY_STUDIO_PREVIEW_SECRET = process.env.SANITY_STUDIO_PREVIEW_SECRET;

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview-${document._type}?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=${document.slug.current}`
}
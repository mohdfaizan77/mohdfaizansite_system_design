import catalog from './content/catalog.json'

// Metadata is kept separate so article bodies load only when opened.
const articleFiles = import.meta.glob('./content/gfg_system_design/*.md', {
  query: '?raw',
  import: 'default',
})

export const phases = catalog

export function loadArticle(topic) {
  const load = articleFiles[`./content/gfg_system_design/${topic.file}`]
  if (!load) return Promise.reject(new Error('Article file not found'))
  return load()
}

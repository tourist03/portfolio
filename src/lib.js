export function filterProjects(projects, category) {
  return category === 'all' ? projects : projects.filter(project => project.category === category);
}

export function legacySection(hash) {
  const sections = { '/': 'home', '/projects': 'work', '/experience': 'experience', '/skills': 'toolbox', '/education': 'about', '/coding-profiles': 'about', '/contact': 'contact' };
  return hash.startsWith('#/') ? (sections[hash.slice(1)] || 'home') : null;
}

export function nextProjectIndex(current, direction, count) {
  if (count < 1) return -1;
  return ((current + direction) % count + count) % count;
}

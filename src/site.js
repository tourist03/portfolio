import { profile, projects, architecture } from './content.js';
import { filterProjects, legacySection, nextProjectIndex } from './lib.js';

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const dialog = document.querySelector('.case-dialog');
const progress = document.querySelector('.scroll-progress');
let previousFocus = null;
let currentProject = 0;
let copyTimeout;

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#14201b' : '#f4f3ee';
  try { localStorage.setItem('vineet-portfolio-theme', theme); } catch { /* Theme still works when storage is unavailable. */ }
}
setTheme(root.dataset.theme || 'light');
themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));

function setMenu(open, focus = true) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  if (focus) (open ? navigation.querySelector('a') : menuButton).focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false, false)));
document.addEventListener('focusin', event => {
  if (menuButton.getAttribute('aria-expanded') === 'true' && !event.target.closest('.site-header')) setMenu(false, false);
});
document.addEventListener('click', event => {
  if (menuButton.getAttribute('aria-expanded') === 'true' && !event.target.closest('.site-header')) setMenu(false, false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
});
window.matchMedia('(min-width: 641px)').addEventListener('change', event => {
  if (event.matches) setMenu(false, false);
});

// The illustration explains architecture; it does not call a model or claim live telemetry.
const architectureTabs = [...document.querySelectorAll('[data-architecture]')];
const architecturePanel = document.querySelector('#architecture-panel');
function selectArchitecture(id, focus = false) {
  const concept = architecture.find(item => item.id === id);
  if (!concept) return;
  architectureTabs.forEach(tab => {
    const selected = tab.dataset.architecture === id;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  architecturePanel.setAttribute('aria-labelledby', `tab-${id}`);
  architecturePanel.querySelector('.architecture-note').textContent = concept.note;
  architecturePanel.querySelector('h2').textContent = concept.caption;
  architecturePanel.querySelector('.architecture-description').textContent = concept.description;
  architecturePanel.querySelectorAll('.pipeline>span').forEach((stage, i) => stage.textContent = concept.stages[i]);
  document.querySelector('.architecture-card').dataset.concept = id;
}
architectureTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectArchitecture(tab.dataset.architecture));
  tab.addEventListener('keydown', event => {
    let index;
    if (event.key === 'ArrowRight') index = (i + 1) % architectureTabs.length;
    if (event.key === 'ArrowLeft') index = (i - 1 + architectureTabs.length) % architectureTabs.length;
    if (event.key === 'Home') index = 0;
    if (event.key === 'End') index = architectureTabs.length - 1;
    if (index !== undefined) {
      event.preventDefault();
      selectArchitecture(architectureTabs[index].dataset.architecture, true);
    }
  });
});

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projectCards = [...document.querySelectorAll('[data-project-card]')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const visibleProjects = filterProjects(projects, button.dataset.filter);
  const visibleIds = new Set(visibleProjects.map(project => project.id));
  projectCards.forEach(card => card.hidden = !visibleIds.has(card.dataset.id));
  filterButtons.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  document.querySelector('.project-count').textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? 'project' : 'projects'}${button.dataset.filter === 'all' ? ' selected' : ' shown'}`;
}));

function renderProject(index) {
  currentProject = index;
  const project = projects[index];
  dialog.querySelector('.dialog-label').textContent = `PROJECT / ${project.number}`;
  dialog.querySelector('.dialog-category').textContent = project.label;
  dialog.querySelector('#dialog-title').textContent = project.name;
  dialog.querySelector('.dialog-subtitle').textContent = project.subtitle;
  dialog.querySelector('.dialog-position').textContent = `${project.number} / ${String(projects.length).padStart(2, '0')}`;
  const body = document.querySelector(`[data-id="${project.id}"] .case-body`).cloneNode(true);
  dialog.querySelector('.dialog-body').replaceChildren(body);
  dialog.scrollTop = 0;
}

document.querySelectorAll('[data-open-project]').forEach(trigger => {
  // If JavaScript or <dialog> is unavailable, the native inline disclosure remains usable.
  if (typeof dialog.showModal !== 'function') return;
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.addEventListener('click', event => {
    event.preventDefault();
    previousFocus = trigger;
    const index = projects.findIndex(project => project.id === trigger.dataset.openProject);
    renderProject(index);
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.querySelector('.dialog-close').focus();
  });
});
if (typeof dialog.showModal !== 'function') root.classList.add('no-dialog');
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (previousFocus?.isConnected && !previousFocus.closest('[hidden]')) previousFocus.focus({ preventScroll: true });
});
dialog.querySelector('.previous-project').addEventListener('click', () => renderProject(nextProjectIndex(currentProject, -1, projects.length)));
dialog.querySelector('.next-project').addEventListener('click', () => renderProject(nextProjectIndex(currentProject, 1, projects.length)));

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    copyButton.dataset.copied = 'true';
    copyButton.setAttribute('aria-label', 'Email address copied');
    copyStatus.classList.remove('sr-only');
    copyStatus.textContent = 'Email copied';
    clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      copyButton.removeAttribute('data-copied');
      copyButton.setAttribute('aria-label', 'Copy email address');
      copyStatus.classList.add('sr-only');
      copyStatus.textContent = '';
    }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.email-link'));
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.classList.remove('sr-only');
    copyStatus.textContent = 'Select and copy the email, or use the email link.';
  }
});

let scrollFrame = false;
function updateProgress() {
  const total = root.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0})`;
  scrollFrame = false;
}
window.addEventListener('scroll', () => {
  if (!scrollFrame) { scrollFrame = true; requestAnimationFrame(updateProgress); }
}, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sectionLinks.forEach(link => {
      if (link.hash === `#${visible.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-12% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main>section[id]').forEach(section => observer.observe(section));
}

function resolveLegacyLink() {
  const section = legacySection(location.hash);
  if (!section) return;
  history.replaceState(null, '', `#${section}`);
  document.getElementById(section)?.scrollIntoView({ behavior: 'instant' });
}
resolveLegacyLink();
window.addEventListener('hashchange', resolveLegacyLink);

// Native anchors keep bookmarks useful and browser history intact.
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  if (link.classList.contains('skip-link')) target.focus();
  else if (window.matchMedia('(max-width: 640px)').matches) {
    const heading = target.querySelector('h1,h2');
    if (heading) {
      heading.tabIndex = -1;
      requestAnimationFrame(() => heading.focus({ preventScroll: true }));
    }
  }
}));

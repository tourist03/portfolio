import test from 'node:test';
import assert from 'node:assert/strict';
import { renderHtml, escapeHtml } from '../src/render.js';
import { projects, profile, experience, coding } from '../src/content.js';
import { filterProjects, legacySection, nextProjectIndex } from '../src/lib.js';

test('the rebuilt portfolio keeps its public address and corrected career facts', () => {
  assert.equal(profile.canonical, 'https://tourist03.github.io/portfolio/');
  assert.equal(experience.filter(item => item.current).length, 1);
  assert.equal(experience[0].company, 'Samsung Research Institute Delhi');
  assert.equal(experience[0].roles[0].relationship, 'Contractor via Tech Mahindra');
  assert.equal(experience[1].roles[0].dates, 'Apr 2023 — Oct 2025');
  assert.equal(coding[0].url, 'https://leetcode.com/u/vineet-ii/');
});

test('project filters return the correct available work', () => {
  assert.equal(filterProjects(projects, 'all').length, 4);
  assert.deepEqual(filterProjects(projects, 'ai').map(item => item.id), ['sense-ai', 'openwave', 'digit-recognition']);
  assert.deepEqual(filterProjects(projects, 'web').map(item => item.id), ['scribespace']);
  assert.deepEqual(filterProjects(projects, 'missing'), []);
});

test('old portfolio bookmarks resolve to the replacement sections', () => {
  assert.equal(legacySection('#/projects'), 'work');
  assert.equal(legacySection('#/coding-profiles'), 'about');
  assert.equal(legacySection('#/contact'), 'contact');
  assert.equal(legacySection('#/unknown'), 'home');
  assert.equal(legacySection('#experience'), null);
});

test('case-study navigation wraps in both directions', () => {
  assert.equal(nextProjectIndex(0, -1, projects.length), projects.length - 1);
  assert.equal(nextProjectIndex(projects.length - 1, 1, projects.length), 0);
  assert.equal(nextProjectIndex(0, 1, 0), -1);
});

test('the generated page has usable navigation, unique IDs, and correct project destinations', () => {
  const html = renderHtml();
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Missing section: ${match[1]}`);
  for (const project of projects) assert.ok(html.includes(`href="${project.source}"`));
  assert.ok(html.includes('href="https://tourist03.github.io/Sense-AI/"'));
  assert.ok(html.includes('Sample-data demo'));
  assert.ok(html.includes('>4 selected projects</span>'));
  assert.ok(html.includes('AI & ML <span>03</span>'));
  assert.ok(html.includes('Contractor via Tech Mahindra'));
  assert.ok(html.includes('mailto:singhvineet2001@gmail.com'));
  assert.ok(html.includes('download>Download CV'));
  assert.ok(!html.includes('create-react-app'));
});

test('text rendering cannot turn content into HTML', () => {
  assert.equal(escapeHtml('<script>alert("x")</script>'), '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;');
});

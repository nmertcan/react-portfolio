import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import portfolio from '../src/data/portfolio.json' with { type: 'json' };
import { copy } from '../src/data/copy.js';
import { fetchPortfolio } from '../src/services/portfolioApi.js';

test('every featured project has a public source, translated summary, and tags', () => {
  assert.equal(
    new Set(portfolio.projects.map((project) => project.id)).size,
    portfolio.projects.length,
  );
  for (const project of portfolio.projects) {
    assert.ok(project.title && project.tags.length);
    assert.ok(project.repository.startsWith('https://github.com/nmertcan/'));
    assert.ok(project.site.startsWith('https://'));
    assert.ok(
      existsSync(fileURLToPath(new URL(`../public/assets/${project.preview}`, import.meta.url))),
    );
    assert.ok(project.description.en && project.description.tr);
  }
});

test('English and Turkish include the same translated UI fields', () => {
  assert.deepEqual(Object.keys(copy.en).sort(), Object.keys(copy.tr).sort());
  assert.equal(copy.en.profileLabels.length, 4);
  assert.equal(copy.tr.profileLabels.length, 4);
  assert.equal(copy.en.profileLabels[1], 'City');
  assert.equal(copy.tr.profileLabels[1], 'İkamet şehri');
});

test('owner contact and supplied profile details are set', () => {
  assert.equal(portfolio.identity.name, 'Nuri Mert Can');
  assert.equal(portfolio.identity.email, 'nmertcan@icloud.com');
  assert.equal(portfolio.identity.github, 'https://github.com/nmertcan');
  assert.equal(portfolio.identity.linkedin, 'https://www.linkedin.com/in/nmertcan/');
  assert.equal(portfolio.profile.city, 'Muğla');
  assert.match(portfolio.profile.education.tr, /Anadolu Üniversitesi/);
  assert.match(portfolio.profile.education.en, /Anadolu University/);
  assert.equal(portfolio.profile.birthDate, '');
  assert.equal(portfolio.profile.role, '');
});

test('the external mock response supplies the visible project data without sending contact details', async () => {
  let request;
  const client = {
    post: async (path, payload) => {
      request = { path, payload };
      const projects = JSON.parse(payload.body);
      projects[0].title = 'Returned by API';
      return { data: { ...payload, body: JSON.stringify(projects), id: 101 } };
    },
  };
  const result = await fetchPortfolio(client);
  assert.equal(request.path, '/posts');
  assert.doesNotMatch(JSON.stringify(request.payload), /nmertcan@icloud.com/);
  assert.equal(result.projects[0].title, 'Returned by API');
  assert.equal(result.apiStatus, 'connected');
});

test('the portfolio remains usable when the external service is unavailable', async () => {
  const result = await fetchPortfolio({
    post: async () => {
      throw new Error('network unavailable');
    },
  });
  assert.equal(result.projects.length, portfolio.projects.length);
  assert.equal(result.apiStatus, 'offline');
});

test('unexpected links in an API response cannot replace verified project sites', async () => {
  const result = await fetchPortfolio({
    post: async (_path, payload) => {
      const projects = JSON.parse(payload.body);
      projects[0].site = 'https://unexpected.example/';
      return { data: { body: JSON.stringify(projects) } };
    },
  });
  assert.equal(result.apiStatus, 'offline');
  assert.equal(result.projects[0].site, portfolio.projects[0].site);
});

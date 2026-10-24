import axios from 'axios';
import portfolio from '../data/portfolio.json' with { type: 'json' };

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 6000,
});

export async function fetchPortfolio(client = api) {
  try {
    const { data } = await client.post('/posts', {
      title: 'React portfolio projects',
      body: JSON.stringify(portfolio.projects),
      userId: 1,
    });
    const projects = JSON.parse(data.body);
    if (
      !Array.isArray(projects) ||
      projects.length !== portfolio.projects.length ||
      projects.some(
        (project, index) =>
          project.id !== portfolio.projects[index].id ||
          project.repository !== portfolio.projects[index].repository ||
          project.site !== portfolio.projects[index].site ||
          project.preview !== portfolio.projects[index].preview ||
          !Array.isArray(project.tags) ||
          project.tags.some((tag) => typeof tag !== 'string') ||
          typeof project.title !== 'string' ||
          typeof project.description?.en !== 'string' ||
          typeof project.description?.tr !== 'string',
      )
    ) {
      throw new Error('The mock API returned an unexpected project list');
    }
    return { ...portfolio, projects, apiStatus: 'connected' };
  } catch {
    return { ...portfolio, apiStatus: 'offline' };
  }
}

let portfolioRequest;
export function getPortfolio({ refresh = false } = {}) {
  if (refresh || !portfolioRequest) portfolioRequest = fetchPortfolio();
  return portfolioRequest;
}

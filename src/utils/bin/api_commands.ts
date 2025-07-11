// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import {
  getAIResponse,
  getSkillsAnalysis,
  getProjectAnalysis,
  getCareerInsights,
} from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

// AI-powered commands
export const ai = async (args: string[]): Promise<string> => {
  const message = args.join(' ');
  if (!message) {
    return `🤖 AI Assistant: Hello! I'm here to help you learn about Senuk Dias.

Ask me anything about:
• Skills and technologies
• Projects and experience
• Career insights
• Contact information

Example: ai who is senuk dias?
Example: ai what technologies does he use?`;
  }
  const response = await getAIResponse(message);
  return `🤖 AI Assistant: ${response}`;
};

export const skills = async (args: string[]): Promise<string> => {
  const analysis = await getSkillsAnalysis();
  return analysis;
};

export const analyze = async (args: string[]): Promise<string> => {
  const projectName = args.join(' ');
  const analysis = await getProjectAnalysis(projectName);
  return analysis;
};

export const insights = async (args: string[]): Promise<string> => {
  const insights = await getCareerInsights();
  return insights;
};

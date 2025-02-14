import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getOpenAiResponse = async (prompt: string) => {
  try {
    const { data } = await axios.post(
      `${config.openAiEndpoint}/openai/deployments/${config.deploymentName}/completions?api-version=2022-12-01`,
      {
        prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': config.openAiApiKey,
        },
      }
    );
    return data.choices[0].text.trim();
  } catch (error) {
    return `Error: ${error.response ? error.response.data.error.message : error.message}`;
  }
};

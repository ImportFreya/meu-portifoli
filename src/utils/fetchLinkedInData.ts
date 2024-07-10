import axios from 'axios';

export const fetchLinkedInData = async (profileId: string) => {
  // Dependendo da API que você está usando, o endpoint pode variar
  const response = await axios.get(`https://api.linkedin.com/v2/me/${profileId}`);
  return response.data;
};

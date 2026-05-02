import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getResources = async (category) => {
  const response = await api.get('/resources', { params: { category } });
  return response.data;
};

export const getRoadmaps = async () => {
  const response = await api.get('/roadmaps');
  return response.data;
};

export const getTechQuestions = async (category) => {
  const response = await api.get('/technical-questions', { params: { category } });
  return response.data;
};

export const getHRQuestions = async () => {
  const response = await api.get('/hr-questions');
  return response.data;
};

export default api;

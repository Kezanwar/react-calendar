import axiosInstance from '@app/services/axios';
import { Project } from '@app/types/projects';

const ENDPOINTS = {
  getRecentProjects: '/recent-projects'
};

export const getRecentProjects = () => {
  return axiosInstance.get<Project[]>(ENDPOINTS.getRecentProjects);
};

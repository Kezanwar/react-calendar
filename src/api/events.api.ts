import axiosInstance from '@app/services/axios';
import { IEvent } from '@app/types/events';

const ENDPOINTS = {
  getEvents: '/events'
};

export const getEvents = () => {
  return axiosInstance.get<IEvent[]>(ENDPOINTS.getEvents);
};

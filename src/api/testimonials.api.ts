import axiosInstance from '@app/services/axios';
import { Testimonial } from '@app/types/testimonials';

const ENDPOINTS = {
  getTestimonials: '/testimonials'
};

export const getTestimonials = () => {
  return axiosInstance.get<Testimonial[]>(ENDPOINTS.getTestimonials);
};

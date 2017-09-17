import { API_URL } from '../constants';

export const generateUrl = (path: string): string => `${API_URL}/${path}`;

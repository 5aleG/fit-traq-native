import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://178.197.214.219:8001/backend/api/v1';

const fitTrackrAPI = axios.create({
  baseURL: baseURL
});

fitTrackrAPI.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await AsyncStorage.getItem('access_token');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fitTrackrAPI;

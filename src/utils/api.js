import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const environment = 'development';

const urlBase = environment === 'development' ? 'http://localhost:5000' : undefined;

const CONFIG = {
  REDDIT_POSTS: `${urlBase}/reddit`,
  USERS: `${urlBase}/api/users`,
  TITLES: `${urlBase}/api/titles`,
};

const fetchCurrentRedditPosts = () => axios.get(CONFIG.REDDIT_POSTS);

const checkIfUserInDb = async (auth) => {
  try {
    // Get the access token from the auth wrapper
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).get(CONFIG.USERS);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const addTitle = async ({ auth, title }) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).post(CONFIG.TITLES, {
      title,
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const testApi = async (auth) => {
  const token = await auth.getTokenSilently();
  const response = await axiosWithAuth(token).post(`${urlBase}/api/private`, { data: 'hi' });
  return response;
};

const exportThis = {
  fetchCurrentRedditPosts,
  checkIfUserInDb,
  addTitle,
  testApi,
};

export default exportThis;

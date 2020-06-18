import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const environment = 'development';

const urlBase =
  environment === 'development' ? 'http://localhost:5000' : undefined;

const CONFIG = {
  REDDIT_POSTS: `${urlBase}/reddit`,
  USERS: `${urlBase}/api/users`,
  TITLES: `${urlBase}/api/titles`,
  POSTS_TOGETHER: `${urlBase}/api/posts-together`,
  POSTS: `${urlBase}/api/posts`,
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

const getTitles = async (auth) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).get(CONFIG.TITLES);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const deleteTitle = async ({ auth, title }) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).delete(
      `${CONFIG.TITLES}/${title}`
    );
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getPosts = async (auth) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).get(CONFIG.POSTS_TOGETHER);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const updatePost = async ({ auth, title, redditId }) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).put(CONFIG.POSTS, {
      title,
      reddit_id: redditId,
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const deletePost = async ({ auth, id }) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).delete(`${CONFIG.POSTS}/${id}`);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const testApi = async (auth) => {
  const token = await auth.getTokenSilently();
  const response = await axiosWithAuth(token).post(`${urlBase}/api/private`, {
    data: 'hi',
  });
  return response;
};

const exportThis = {
  fetchCurrentRedditPosts,
  checkIfUserInDb,
  addTitle,
  testApi,
  getTitles,
  getPosts,
  deleteTitle,
  deletePost,
  updatePost,
};

export default exportThis;

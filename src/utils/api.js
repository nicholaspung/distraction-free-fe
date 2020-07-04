import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const env = 'development';

const urlBase =
  env === 'development' ? 'http://localhost:5000' : 'http://192.168.0.219:5000';

const CONFIG = {
  REDDIT_POSTS: `${urlBase}/reddit`,
  WEBSITES: `${urlBase}/websites`,
  USERS: `${urlBase}/api/users`,
  TITLES: `${urlBase}/api/titles`,
  POSTS: `${urlBase}/api/posts`,
};

const fetchCurrentRedditPosts = async () => {
  try {
    const response = await axios.get(CONFIG.REDDIT_POSTS);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const fetchWebsites = async () => {
  try {
    const response = await axios.get(CONFIG.WEBSITES);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const checkIfUserInDb = async (auth) => {
  try {
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
    const response = await axiosWithAuth(token).get(CONFIG.POSTS);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const updatePost = async ({ auth, redditId }) => {
  try {
    const token = await auth.getTokenSilently();
    const response = await axiosWithAuth(token).post(CONFIG.POSTS, {
      reddit_id: redditId,
      read: true,
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

const exportThis = {
  fetchCurrentRedditPosts,
  fetchWebsites,
  checkIfUserInDb,
  addTitle,
  getTitles,
  getPosts,
  deleteTitle,
  deletePost,
  updatePost,
};

export default exportThis;

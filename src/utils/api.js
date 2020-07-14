import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

const env = 'development';

const urlBase =
  env === 'development' ? 'http://localhost:5000' : 'http://YOUR.SERVER';

const CONFIG = {
  REDDIT_POSTS: `${urlBase}/reddit`,
  USERS: `${urlBase}/api/users`,
  TITLES: `${urlBase}/api/titles`,
  POSTS: `${urlBase}/api/posts`,
};

/** Reddit */
const fetchCurrentRedditPosts = async () => {
  try {
    const response = await axios.get(CONFIG.REDDIT_POSTS);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

/** If user not in DB, create one */
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

/** Titles Section */
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

/** Posts Section */
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
  checkIfUserInDb,
  addTitle,
  getTitles,
  getPosts,
  deleteTitle,
  deletePost,
  updatePost,
};

export default exportThis;

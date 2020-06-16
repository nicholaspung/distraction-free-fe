import axios from 'axios';

const environment = 'development';

const urlBase = environment === 'development' ? 'http://localhost:5000' : undefined;

const CONFIG = {
  REDDIT_POSTS: `${urlBase}/reddit`,
  USERS: `${urlBase}/api/users`,
};

const AUTH_HEADERS = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const fetchCurrentRedditPosts = () => axios.get(CONFIG.REDDIT_POSTS);

const checkIfUserInDb = async (auth) => {
  try {
    // Get the access token from the auth wrapper
    const token = await auth.getTokenSilently();
    const response = await axios.get(CONFIG.USERS, AUTH_HEADERS(token));
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const exportThis = {
  fetchCurrentRedditPosts,
  checkIfUserInDb,
};

export default exportThis;

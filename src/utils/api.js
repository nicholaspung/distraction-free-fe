import axios from 'axios';

const environment = 'development';

const urlBase = environment === 'development' ? 'http://localhost:5000' : undefined;

const CONFIG = {
  REDDIT_POSTS: `${urlBase}/reddit`,
  USERS: `${urlBase}/api/users`,
  TITLES: `${urlBase}/api/titles`,
};

const AUTH_HEADERS = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
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

const addTitle = async ({ auth, title }) => {
  try {
    console.log(auth.getIdTokenClaims());
    const token = await auth.getTokenSilently();
    console.log(token);
    const response = await axios.post(CONFIG.TITLES, {
      ...AUTH_HEADERS(token),
      data: {
        title,
      },
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const testApi = async (auth) => {
  const token = await auth.getTokenSilently();
  const response = await axios.get(`${urlBase}/api/private`, AUTH_HEADERS(token));
  return response;
};

const exportThis = {
  fetchCurrentRedditPosts,
  checkIfUserInDb,
  addTitle,
  testApi,
};

export default exportThis;

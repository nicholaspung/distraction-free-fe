import axios from 'axios';

const CONFIG = {
  REDDIT_POSTS: 'http://localhost:5000/reddit',
};

const fetchCurrentRedditPosts = () => axios.get(CONFIG.REDDIT_POSTS);

const exportThis = {
  fetchCurrentRedditPosts,
};

export default exportThis;

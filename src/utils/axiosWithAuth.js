import axios from 'axios';

const axiosWithAuth = (token) => axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default axiosWithAuth;

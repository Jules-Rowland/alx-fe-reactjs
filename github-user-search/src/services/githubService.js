import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

const fetchUserData = async (names) => {
  try {
    const response = await axios.get(`${BASE_URL}${names}`);
    // No need for response.ok check with axios
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user name:", error);
    return null;
  }
};



export default fetchUserData;
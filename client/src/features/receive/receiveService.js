import axios from "axios";

const API_URL = "https://bloodsearchapi.herokuapp.com/v1/api/receive/";

// Create new receive
const createReceive = async (receiveData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, receiveData, config);

  return response.data;
};

// Get user receives
const getReceive = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user receive
const deleteReceive = async (receiveId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + receiveId, config);

  return response.data;
};

const receiveService = {
  createReceive,
  getReceive,
  deleteReceive,
};

export default receiveService;

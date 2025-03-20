import axios from 'axios'

const API_URL = 'https://blood-search-main-backend.onrender.com/v1/api/blood/'

// Create new blood
const createBlood = async (bloodData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bloodData, config)

  return response.data
}

// Get user bloods
const getBlood = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}




// Delete user blood
const deleteBlood = async (bloodId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + bloodId, config)

  return response.data
}

const bloodService = {
  createBlood,
  getBlood,
  deleteBlood
}

export default bloodService

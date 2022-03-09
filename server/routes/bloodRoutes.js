const express = require('express')
const router = express.Router()
const {
  getAllBlood,
  setBlood,
  updateBlood,
  deleteBlood,
} = require('../controllers/bloodController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAllBlood).post(protect, setBlood)
router.route('/:id').delete(protect, deleteBlood).put(protect, updateBlood)

module.exports = router

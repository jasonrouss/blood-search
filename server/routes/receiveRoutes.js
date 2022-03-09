const express = require("express");
const router = express.Router();
const {
  getAllReceive,
  setReceive,
  updateReceive,
  deleteReceive,
} = require("../controllers/receiveController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAllReceive).post(protect, setReceive);
router.route("/:id").delete(protect, deleteReceive).put(protect, updateReceive);

module.exports = router;

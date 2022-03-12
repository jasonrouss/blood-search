const asyncHandler = require("express-async-handler");
const Blood = require("../models/bloodModel");

//@desc Get all blood requests
//@route GET v1/api/blood
//@access Public

const getAllBlood = asyncHandler(async (req, res, next) => {
  const blood = await Blood.find().sort({$natural:-1});
  res.status(200).json(blood);
});

//@desc Set blood data from logged in user
//@route POST v1/api/blood
//@access Private
const setBlood = asyncHandler(async (req, res, next) => {
  // Check if bloodType is empty
  if (!req.body.bloodType) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  //Check if phoneNumber is empty
  if (!req.body.phoneNumber) {
    res.status(400);
    throw new Error("Please add a phone number");
  }
  //Check if location is empty

  if (!req.body.location) {
    res.status(400);
    throw new Error("Please add a location");
  }

  const blood = await Blood.create({
    user: req.user.id,
    bloodType: req.body.bloodType,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    name: req.user.name,
  });

  res.status(200).json({ success: true, data: blood });
});

//@desc Update blood data from logged in user
//@route PUT v1/api/blood/:id
//@access Private
const updateBlood = asyncHandler(async (req, res, next) => {
  let blood = await Blood.findById(req.params.id);
  if (!blood) {
    return next(
      new ErrorResponse(`Blood not found with id of ${req.params.id}`, 404)
    );
  }
  // Make sure user is blood owner
  if (blood.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User not authorized to update data`, 401));
  }
  blood = await Blood.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: blood });
});


//@desc Delete blood data from logged in user
//@route DELETE v1/api/blood/:id
//@access Private
const deleteBlood = asyncHandler(async (req, res, next) => {
  const blood = await Blood.findById(req.params.id);
  if (!blood) {
    return next(
      new ErrorResponse(`Blood not found with id of ${req.params.id}`, 404)
    );
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Make sure user is blood owner
  if (blood.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User not authorized to update data`, 401));
  }
  blood.remove();
  res.status(200).json({ success: true, data: {} });
});

module.exports = {
  getAllBlood,
  setBlood,
  updateBlood,
  deleteBlood,

  
};

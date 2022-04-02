const asyncHandler = require("express-async-handler");
const Receive = require("../models/receiveModel");

//@desc Get  receive posts from user
//@route GET v1/api/receive
//@access Public

const getAllReceive = asyncHandler(async (req, res, next) => {
  const receives = await Receive.find().sort({ $natural: -1 });
  res.status(200).json(receives);
});

//@desc Set receive data from logged in user
//@route POST v1/api/receive
//@access Private
const setReceive = asyncHandler(async (req, res, next) => {
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

  const receive = await Receive.create({
    user: req.user.id,
    name: req.user.name,
    bloodType: req.body.bloodType,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
  });

  res.status(200).json({ success: true, data: receive });
});

//@desc Update receive data from logged in user
//@route PUT v1/api/receive/:id
//@access Private
const updateReceive = asyncHandler(async (req, res, next) => {
  let receive = await Receive.findById(req.params.id);
  if (!receive) {
    return next(
      new ErrorResponse(
        `Receive info not found with id of ${req.params.id}`,
        404
      )
    );
  }
  // Make sure user is receive owner
  if (receive.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User not authorized to update data`, 401));
  }
  receive = await Receive.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: receive });
});

//@desc Delete receive data from logged in user
//@route DELETE v1/api/receive/:id
//@access Private
const deleteReceive = asyncHandler(async (req, res, next) => {
  const receive = await Receive.findById(req.params.id);
  if (!receive) {
    return next(
      new ErrorResponse(
        `Receive info not found with id of ${req.params.id}`,
        404
      )
    );
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Make sure user is receive owner
  if (receive.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`User not authorized to update data`, 401));
  }
  receive.remove();
  res.status(200).json({ success: true, data: {} });
});

module.exports = {
  getAllReceive,
  setReceive,
  updateReceive,
  deleteReceive,
};

// @desc    Get  all bootcamps
// @route   GET  /api/v1/bootcamps
//@ access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps",hello: req.hello });
};

// @desc    Get  Single bootcamps
// @route   GET  /api/v1/bootcamps/:id
//@ access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get Single Bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamp
// @route   POST  /api/v1/bootcamps
//@ access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamps" });
};

// @desc    Update bootcamp
// @route   PUT  /api/v1/bootcamps/:id
//@ access  private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated Bootcamps ${req.params.id}` });
};

// @desc    Delete bootcamp
// @route   Delete  /api/v1/bootcamps/:id
//@ access  private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Deleted Bootcam ${req.params.id}` });
};

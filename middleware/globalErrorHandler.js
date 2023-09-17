const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res);
  } catch (error) {
    next(error);
  }
};
const globalErrorHandler = (err, req, res, next) => {
  console.error(`An Error Occured:${err.message}`);

  return res.status(err.status || 500).json({
    msg: err.message,
    status: err.status || 500,
  });
};
module.exports = { asyncHandler, globalErrorHandler };

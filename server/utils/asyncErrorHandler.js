const asyncErrorHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      console.log("I am getting Executed");
      next(err);
    });
  };
};

module.exports = { asyncErrorHandler };

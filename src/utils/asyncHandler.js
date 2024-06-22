const asyncHandler = (requestHAndler) => {
  return (req, res, next) => {
    Promise.resolve(requestHAndler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export {asyncHandler}



// by async await method

// const asyncHandler = (requestHandler) => async (req,res,next) => {
//   try {
//     await requestHandler(req,res,next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//         success: false,
//         message: error.message
//     })
//   }
// };

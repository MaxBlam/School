const errorHandler = (err, req, res, next) => {
  if (err) {
    console.log('Error ====> ', err.message.red.inverse);
    res.status(500).json({
      code: 500,
      data: 'Server error',
    });
  } else next();
};

const notFound = (req, res) => {
  console.log('Not Found ====> ', req.originalUrl.blue);
  res.status(404).json({
    code: 404,
    data: `Sorry, the requested ressource ${req.originalUrl} was not found`,
  });
};

module.exports = { errorHandler, notFound };

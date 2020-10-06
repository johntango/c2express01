const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    if (authHeader == "passwordname") {
      req.user = "name";
      next();
    }
  } else {
    res.sendStatus(401);
  }
};

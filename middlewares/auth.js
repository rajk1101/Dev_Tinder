// Define `adminAuth` as a standalone middleware function
const adminAuth = (req, res, next) => {
  console.log("Admin Auth getting Checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user Auth getting Checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Request from user");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth
};

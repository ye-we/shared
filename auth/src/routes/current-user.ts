import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("current");
});

export { router as currentUserRouter };

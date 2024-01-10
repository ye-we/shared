import express from "express";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/singin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";

const app = express();
app.use(express.json());

// routers
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.listen(4000, () => {
  console.log("Running at 4000");
});

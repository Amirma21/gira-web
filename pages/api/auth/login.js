import { userAuthentication } from "../../../server/controller/Users";
import { withIronSession } from "next-iron-session";

  async  function handler(req, res) {
  const { email, password } = req.body;

  const data = await userAuthentication({ email, password });

  console.log(data);

  if (data.status === "Success") {
    req.session.set("token", data.token);
    await req.session.save();

    res.status(200).json(data);
  } else if (data.status === "Error") {
    res.status(400).json(data);
  }
};


export default withIronSession(handler, {
  password: "YvAbguq8tdjdmyNwYWmdtBocPxKFpQr4",
  cookieName: "token",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "strict",
    path: "/",
  },
});
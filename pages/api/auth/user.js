import { withIronSession } from "next-iron-session";

function handler(req, res, session) {
  const token = req.session.get("token");
  res.send({ token });
}

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

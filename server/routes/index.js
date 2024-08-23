const router = require('express').Router();
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

/* GET users listing. */
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID,
      });
      return { payload: ticket.getPayload() };
    } catch (error) {
      return { error: "Invalid user detected. Please try again" };
    }
}

router.post("/oauth2/google", async (req, res) => {
    const { token } = req.body;
    const googleResponse = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    const userData = await googleResponse.json();
    // if (user) {
    //   res.json({ isNewUser: false, user });
    // } else {
    //   const newUser = await createUserInDatabase(userData);
    //   res.json({ isNewUser: true, user: newUser });
    // }
    res.json({ isNewUser: true, user: newUser });
});

module.exports = router;

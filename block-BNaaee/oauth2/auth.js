var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

var GOOGLE_CLIENT_ID = '589768417173-2f8n8tpvnpouus6ooi30p9g1l3gb93pa.apps.googleusercontent.com';
var GOOGLE_CLIENT_SECRET = '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';
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

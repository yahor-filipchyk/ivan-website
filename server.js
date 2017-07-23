/**
  * Credit for this script goes to the author of this post
  * https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
 */

const express = require('express');
const app = express();

/**
 * If an incoming request uses a protocol other than HTTPS, redirect that request to the same url but with HTTPS
 *
 */
function forceSSL() {
  return (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(forceSSL());

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

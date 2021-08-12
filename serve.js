// A router to load a URL
app.get('/load', loadURL);

// Callback
function loadURL(req, res) {
  // Get the URL from the user
  var url = req.query.url;

  // Execute the HTTP Request
  request(url, loaded);

  // Callback for when the request is complete
  function loaded(error, response, body) {
    // Check for errors
    if (!error && response.statusCode == 200) {
      // The raw HTML is in body
      res.send(body);
    } else {
      res.send('error');
    }
  }
}
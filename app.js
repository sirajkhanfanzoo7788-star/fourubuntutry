const express = require('express');
const app = express();
const port = 5000;

// Serve a simple HTML page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hi Siraj Ahmad</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: white;
            font-family: Arial, sans-serif;
            font-size: 2em;
            text-align: center;
          }
          .message {
            padding: 20px 40px;
            background: rgba(0,0,0,0.3);
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
          }
        </style>
      </head>
      <body>
        <div class="message">
          HI SIRAJ AHMAD!<br>HOW ARE YOU?<br>A BEAUTIFUL APP
        </div>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
//### new commit //
//### new commit //
//### new commit ////### new commit //
//### new commit //
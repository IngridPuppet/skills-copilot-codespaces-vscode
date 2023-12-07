// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an express app
const app = express();

// Use the cors middleware
app.use(cors());

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the app
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

## 5. Create a route for the app

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an express app
const app = express();

// Use the cors middleware
app.use(cors());

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the app
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

## 6. Start the server

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an express app
const app = express();

// Use the cors middleware
app.use(cors());

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the app
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

## 7. Create a route for the app

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an express app
const app = express();

// Use the cors middleware
app.use(cors());

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the
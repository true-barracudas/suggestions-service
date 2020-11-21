const app = require('./index.js');

const port = 3003;

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

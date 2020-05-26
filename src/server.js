import app from './app';

const port = process.env.APP_PORT;
const url = process.env.APP_URL;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  console.log(url);
});

import express from 'express';
import { router } from './router';

const port = process.env.PORT || 3000;
const app = express();

app.use('/api/todos', router);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

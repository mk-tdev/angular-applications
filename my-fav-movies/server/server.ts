import * as express from 'express';
import { Application } from 'express';
import { getAllMovies, getMovieById } from './routes/movies';
const fileUpload = require('express-fileupload');

const app: Application = express();
app.use(fileUpload());
app.route('/api/movies').get(getAllMovies);

app.route('/api/movies/:id').get(getMovieById);

// app.route('/api/lessons').get(searchLessons);

// app.route('/api/course-categories').get(getCourseCategories);

// app.route('/api/thumbnail-upload').post(onFileupload);

const httpServer: any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});

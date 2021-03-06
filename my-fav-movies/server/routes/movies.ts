import { Request, Response } from 'express';
import { MOVIES } from '../db-data';

export function getAllMovies(req: Request, res: Response) {
  res.status(200).json({ payload: Object.values(MOVIES) });
}

export function getMovieById(req: Request, res: Response) {
  const movieId = req.params["id"];
  const movies: any = Object.values(MOVIES);
  const movie = movies.find((m: any) => m.id == movieId);

  res.status(200).json(movie);
}

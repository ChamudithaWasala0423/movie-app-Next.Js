import { Movie } from "@/typing";
import MovieCard from "@/components/MovieCard";
type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MovieCarousel({ title, movies, isVertical }: Props) {
  return (
    <div>
      <h2>{title}</h2>

      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieCarousel;

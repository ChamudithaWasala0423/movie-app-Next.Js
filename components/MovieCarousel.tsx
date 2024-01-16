import { Movie } from "@/typing";
import MovieCard from "@/components/MovieCard";
import { cn } from "@/lib/utils";
type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MovieCarousel({ title, movies, isVertical }: Props) {
  return (
    <div>
      <h2>{title}</h2>

      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px:10 py-5 scrollbar-hide",
          isVertical && "flex-col space-y-12 space-x-0 overflow-y-scroll"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
                key={movie.id}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} {movie.release_date?.split("-")[0]}
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MovieCarousel;

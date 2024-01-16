import { getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import MoviesCarousel from "@/components/MovieCarousel";
import { getUpcomingMovies, getPopularMovies } from "@/lib/getMovies";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //Api call to get the Serach Movies
  const movies = await getSearchMovies(termToUse);

  //Api call to get the Popular Movies
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-0">Results for {termToUse}</h1>
        <MoviesCarousel movies={movies} title="Movies" isVertical />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  );
}

export default SearchPage;

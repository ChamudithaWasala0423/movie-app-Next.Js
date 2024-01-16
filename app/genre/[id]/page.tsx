import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { getDiscoverMovies } from "@/lib/getMovies";
import MoviesCarousel from "@/components/MovieCarousel";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenerePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        {/* Azure OPENAI service Sugesions */}
        <h1 className="text-6xl font-bold px-0">Results for {genre}</h1>
        <MoviesCarousel movies={movies} title={genre} isVertical />
      </div>
    </div>
  );
}

//http://localhost:3000/genre/28?genre=Action
export default GenerePage;

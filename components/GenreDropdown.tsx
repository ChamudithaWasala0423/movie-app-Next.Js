require("dotenv").config();
import { Genres } from "@/typing";

async function GenreDropdown() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, //24 hours
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return <div>GenreDropdown</div>;
}

export default GenreDropdown;

import { Genres } from "@/typing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
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

  console.log(data);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center space-x-2 cursor-pointer">
          <DropdownMenuLabel>Genres</DropdownMenuLabel>
          <ChevronDown size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown;

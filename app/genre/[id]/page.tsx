import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenerePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div className="bg-red-500">
      Welcome to genre ID: {id} and {genre}
    </div>
  );
}

//http://localhost:3000/genre/28?genre=Action
export default GenerePage;

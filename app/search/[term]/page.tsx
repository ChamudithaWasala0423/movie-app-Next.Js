import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //Api call to get the Serach Movies
  //Api call to get the Popular Movies

  return <div>Welcome to the search page for: {termToUse}</div>;
}

export default SearchPage;

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

import useFetch from "../hooks/UseFetch";

export default function Definition() {
  let { search } = useParams();
  const navigate = useNavigate();

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
  const {
    request,
    data: [{ meanings: word }] = [{}],
    errorStatus,
  } = useFetch(url);

  useEffect(() => {
    request();
  }, []);
  
  if (errorStatus === 404) {
    return (
      <>
        <NotFound />
        <Link
          className="no-underline p-2 text-white rounded bg-purple-600 "
          to="/dictionary"
        >
          Search another
        </Link>
      </>
    );
  }
  if (errorStatus) {
    return (
      <>
        <p>Something went wrong, try again</p>
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition for '{search}':</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}

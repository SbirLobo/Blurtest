import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Themes() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMess, setErrorMess] = useState(null);
  const [genres, setGenres] = useState([]);
  const APIgenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR`;

  useEffect(() => {
    axios
      .get(APIgenre)
      .then((response) => {
        setGenres(response.data.genres);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        setErrorMess(error);
      });
  }, [APIgenre]);

  if (isLoading) return <div>Loading...</div>;
  if (errorMess) return <div>{errorMess}</div>;

  return genres.map((data) => {
    return (
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        key={data.id}
      >
        <Link to={`/themes/${data.name}/${data.id}`}>
          <img className="rounded-t-lg" src={`/img/${data.name}.jpg`} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/themes/${data.name}/${data.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.name}
            </h5>
          </Link>
        </div>
      </div>
    );
  });
}

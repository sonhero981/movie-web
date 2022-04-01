import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useEffect } from "react";

const Home = () => {
    console.log("home")
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch(err => {
          console.log("Err:", err)
      })
      console.log(response)
    }
    fetchMovies()
  }, [])
  return (
    <div className="home">
      <div className="banner-img">
        <MovieListing />
        Homee
      </div>
    </div>
  );
};

export default Home;

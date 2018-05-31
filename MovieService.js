"use strict";
{
    function movieService($http) {
        let data = {
            title: "The best yahtzee rolls compilation",
            length: "26 hours",
            overview: "Best yahtzee athletes",
            id: "0"

        }
        let details = {};

        let APIKey = "a53a6bc42972a9ac76757aa3b5089827";
        //Give me data
        const getData = function () {
            return data;
        };
        //Update data 
        const setData = function (newData) {
            data = newData;
        };

        const searchMovies = function (title) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${title}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
        };

        const searchGenres = function (genre_id) {
            let url = `https://api.themoviedb.org/3/genre/${genre_id}/movies?api_key=0eccf208eb38a982a3c9f88b488a6f19&language=en-US&include_adult=false&sort_by=created_at.asc`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
        };

        const searchReleaseDate = function (date) {
            let url = `http://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&sort_by=vote_average.desc&release_date.gte=${date}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                //console.log(response.data.results[0]);
                setData(response.data.results);
            });
        };


        const getMovieDetail = function (movieId) {
            let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}`;
            return $http.get(url).then(function (response) {
                console.log(response);

            });

            const getDetails = function () {
                return details;
            }

            const setDetails = function (d) {
                let details = d;
            }

        }

        return {
            getData,
            setData,
            searchMovies,
            searchGenres,
            searchReleaseDate
        };
    }
    angular
        .module("app")
        .factory("movieService", movieService)
}
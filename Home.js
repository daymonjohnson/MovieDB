"use strict";
{
    let home = {
        template: `<h1> Welcome to my Movie Page </h1>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>
        <button ng-click="$ctrl.getMovie()"> Grab a movie! </button>
        <input ng-model="$ctrl.date" placeholder="Search by release date">
        <button ng-click="$ctrl.getMovieRD()"> Grab a movie by year! </button>
        <input ng-model="$ctrl.genre_id" placeholder="Search by genre">
        <button ng-click="$ctrl.getMovieG()"> Grab a movie this way! </button>
        `,
        controller: function (movieService, $location) {
            let vm = this;
            vm.title = "";
            vm.date = "";
            vm.genre_id = "";
            vm.getMovie = function () {
                vm.movie = movieService.searchMovies(vm.title)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
            vm.getMovieG = function () {
                console.log("yas");
                vm.movie = movieService.searchGenres(vm.genre_id)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
            vm.getMovieRD = function () {
                console.log("yas");
                vm.movie = movieService.searchReleaseDate(vm.date)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
        }
    };
    home.$inject = ["movieService", "$location"];
    angular
        .module("app")
        .component("home", home);
}
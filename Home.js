"use strict";
{
    let home = {
        template: `<h1> Welcome to my Movie Page </h1>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>  
        <input ng-model="$ctrl.searchDate" placeholder="Search by release">
        <input ng-model="$ctrl.searchGenre" placeholder="Search by genre">
        <button ng-click="$ctrl.getMovie()"> Grab a movie! </button>
        `,
        controller: function (movieService, $location) {
            let vm = this;
            vm.title = "";
            vm.searchDate = "";
            vm.searchGenre = "";
            vm.getMovie = function () {
                vm.movie = movieService.searchMovies(vm.title)
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
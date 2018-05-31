"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();
            console.log(vm.movies);


        },
        template: `<p>Search here to filter</p>
            <input ng-model="searchText">
            <input ng-model="searchDate">
            <input ng-model="searchGenre">
            <div ng-repeat="m in $ctrl.movies | filter: searchText">
            
            <h2>{{m.title}}</h2>
            <p>{{m.overview}}</p>
            <p>Genre:{{m.genre_ids}}</p>
            <p>Length:{{m.release_date}}</p>
            
            </div>      
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("app")
        .component("movie", movie);
}
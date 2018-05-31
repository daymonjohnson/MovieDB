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
            <div ng-repeat="m in $ctrl.movies | filter: searchText">
            
            <h2>{{m.title}}</h2>
            <img src="http://image.tmdb.org/t/p/w185{{m.poster_path}}" alt"">
            <p>{{m.overview}}</p>
            <p>Genre:{{m.genre_ids}}</p>
            <p>Release date:{{m.release_date}}</p>
            <button>ADD</button>
            </div>      
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("app")
        .component("movie", movie);
}
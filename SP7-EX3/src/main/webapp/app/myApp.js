var app = angular.module("exerciseApp", []);

app.controller("MyController", [function () {
        var self = this;
        self.persons = [
            {name: 'Hans', gender: 'male', age: 8},
            {name: 'Grethe', gender: 'female', age: 7},
            {name: 'Frederik', gender: 'male', age: 61},
            {name: 'Hassan', gender: 'male', age: 13},
            {name: 'Karen', gender: 'female', age: 31}];
    }]);
app.filter('customAge', function () {
    return function (persons) {
        var out = [];

        angular.forEach(persons, function (person) {
            if (person.age >= 6 && person.age <= 15) {
                out.push(person);
            }
        });
        return out;
    };
});

app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()
        };
    }]);
app.directive("formatCompany", function () {
    return {
        restrict: 'E',
        templateUrl: 'format-company.html'
    };
});

app.directive("imageInsertion", function () {
    return {
        restrict: 'E',
        templateUrl: 'image-insertion.html',
        controller: function ($scope, attrs) {
            console.log(attrs.test);
            var linkParts = attrs.content.split(',');
            var imgLink;
            $scope.images = [];
            for (i = 0; i > linkParts.length; i++) {
                imgLink = "pictures/" + linkParts[i];
                $scope.images.push(imgLink);
            }
        },
        controllerAs: "images"
    };
});

app.controller('RandomController', function ($scope, RandomFactory) {
    $scope.randomNumber = RandomFactory.getRandomNumber(6);
    $scope.randomString = RandomFactory.getRandomString(5);
});

app.factory('RandomFactory', function () {
    var getRandomNumber = function (n) {
        min = Math.ceil(1);
        max = Math.floor(n);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var getRandomString = function (n) {
        return Array(n + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, n);
    };
    return {
        getRandomNumber: getRandomNumber,
        getRandomString: getRandomString
    };
});

app.controller('CountryController', function ($scope, CountryFactory) {
    $scope.allCountries = CountryFactory.getAllCountries();
    $scope.allRegionCountries = CountryFactory.getAllCountriesFromRegion();
    $scope.allCodeCountries = CountryFactory.getAllCountriesFromCode();
});
app.factory('CountryFactory', function ($http) {
    
    var urlBase = 'https://restcountries.eu/rest/v1';
    var getAllCountries = function () {
        return $http.get(urlBase + '/all');
    };
    var getAllCountriesFromRegion = function () {
        return $http.get(urlBase + '/region/africa');
    };
    var getAllCountriesFromCode = function () {
        return $http.get(urlBase + '/alpha?codes=gb');
    };
    return {
        getAllCountries: getAllCountries,
        getAllCountriesFromRegion: getAllCountriesFromRegion,
        getAllCountriesFromCode: getAllCountriesFromCode
    };
});
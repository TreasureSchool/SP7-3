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

app.directive("imageInsertion", function() {
    return {
        restrict: 'E',
        templateUrl: 'image-insertion.html'
    };
});

app.controller('RandomController', function($scope) {
    
});

app.factory('RandomFactory', function () {
    var getRandomNumber = function (n) {
        
    };
    
    var getRandomString = function (n) {
        
    };
    return {
        getRandomNumber: getRandomNumber,
        getRandomString: getRandomString
    };
});

app.controller('CountryController', function() {
    
});
app.factory('CountryFactory', function() {
    var getAllCountries = function() {
        
    };
    var getAllCountriesFromRegion = function() {
        
    };
    var getAllCountriesFromCode = function() {
        
    };
    return {
       getAllCountries: getAllCountries,
       getAllCountriesFromRegion: getAllCountriesFromRegion,
       getAllCountriesFromCode: getAllCountriesFromCode
    };
});
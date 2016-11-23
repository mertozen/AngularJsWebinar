//Javascript Abstraction
/*
var Docoding = function(f) {

f();

}

var coding1 = function() {
console.log("Coding1 Start!!");
try{
console.log("coding1");
}catch(ex){
console.log(ex);
}
console.log("Coding1 End!");
}

var coding2 = function() {

    console.log("coding2");
}

Docoding(coding1);
Docoding(coding2);
*/

/*
//Javascript Modules
(function (){
var CreateCoder = function () {
    var counter = 0;
    var task1 = function () {
        counter++;
        console.log("task1 " + counter);

    };

    var task2 = function () {
    counter++;
        console.log("task2 "+ counter);

    }

    return {
        Job1: task1,
        Job2: task2

    };

}


var coder = CreateCoder();
coder.Job1();
coder.Job2();
coder.Job2();
//coder.Job2();
})();
*/
/*
(function (angular) {
    function MainController($scope) {
        $scope.Message = "AngularJs Öğreniyorum!!";
    };

    var app = angular.module("app", []);
    app.controller("MainController", ["$scope", MainController]);
})(angular);

*/

(function (angular) {
    function MainController($scope) {
        //$scope.Message = "AngularJs Öğreniyorum!!";
        $scope.User = {
       Name: 'Mert Özen',
       Location: 'Turkey/Istanbul',
       Image:'http://img.tamindir.com/ti_e_ul/yigitekimdemir/h/en-iyi-resim-ve-fotograf-format-donusturme-manset_640x360.jpg'
        }
    };

    var app = angular.module("app", []);
    app.controller("MainController", ["$scope", MainController]);
})(angular);

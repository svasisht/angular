(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckerController);
    LunchCheckerController.$inject=["$scope"];
    
    function LunchCheckerController($scope){
      $scope.countItems=function(){
          var items=$scope.items;
          if(items==undefined)
              $scope.result="Please enter data first."
          else if(items.trim()=="")
              $scope.result="Please enter data first."
          else  
          {
              var items_arr=items.split(",");
              var item_count=0;
              for (var i=0;i<items_arr.length;i++){
                  if(items_arr[i].trim()!="")
                      item_count+=1;
                }
                displayResult(item_count);
          }
          
      }
      
      function displayResult(item_count){
            if(item_count>3)
                $scope.result="Too much."
            else
                $scope.result="Enjoy!"
      }
    };
})();

angular.module("listaTelefonica").directive("uiDate", function(){
    return {
        require : "ngModel", 
        link : function(scope, element, attrs, ctrl){
            var _formatDate = function (date){
                
                date = date.replace("/[^0-9]+/g", "");
              
                if(date.length == 2){
                    date = date + "/"
                }
                if(date.length == 5){
                    date = date + "/"
                }
                return date;
            }; 
            element.bind("keyup", function (){
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue))
                ctrl.$render();
            });

            ctrl.$parsers.push(function(value){
               if(value.length === 10){
                   var dateArray = value.split("/");

                   return new Date(dateArray[2], dateArray[1], dateArray[0]);
               }
            })
        }
    }
})
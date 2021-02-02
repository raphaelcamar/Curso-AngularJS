angular.module("listaTelefonica").config(function ($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');


    $routeProvider.when("/contatos", {
        templateUrl : "view/contatos.html",
        controller : "listaTelefonicaCtrl"
    });

    $routeProvider.when("/novoContato", {
        templateUrl : "view/novoContato.html",
        controller : "novoContatoCtrl",
        resolve : {
            operadoras : function (operadorasAPI){
                return operadorasAPI.getOperadoras();
            }
        }
    });

    $routeProvider.when("/detalhesContato/:id", {
         
        templateUrl : "view/detalhesContato.html",
        controller : "detalhesContatoCtrl",
        // resolve : {
        //     contato : function (contatosAPIservice, $route){

        //         return contatosAPIservice.getContato($route.current.params.id);
        //     }
        // }
    });

    $routeProvider.when("/error", {
        templateUrl : "view/error.html",
    });

    $routeProvider.otherwise({ redirectTo : "/contatos" })
});
// contatosAPI, operadorasAPI, serialGenerator -> ir na função
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http, serialGenerator){
    $scope.app = "Lista telefônica";
    $scope.contatos = [
        {serial : serialGenerator.generate(), id : 1, nome : $filter("uppercase")("Pedro"), telefone : "999888", cor : 'blue', data : new Date(),operadora : {nome : "Oi", codigo : 14, categoria : "Celular"}},
        {serial : serialGenerator.generate(), id : 2, nome : "Ana", telefone : "9879874", cor : 'yellow', data : new Date(), operadora : {nome : "tim", codigo  : 12, categoria : "Celular"}},
        {serial : serialGenerator.generate(),  id : 3, nome : "Maria", telefone : "687965456", cor : 'red', data : new Date(), operadora : {nome : "Vivo", codigo  : 15, categoria : "Fixo"}},
    ];
    $scope.operadoras = [
        {nome : "Oi", codigo  : 14, categoria : "Celular", preco: 2,},
        {nome : "tim", codigo  : 12, categoria : "Celular", preco: 1, id : 2},
        {nome : "Vivo", codigo  : 15, categoria : "Fixo", preco: 5, id : 3},
        {nome : "Claro", codigo  : 13, categoria : "Fixo", preco: 3, id : 4},

    ];
    //NÃO ESTAMOS UTILIZANDO POIS NÃO FIZEMOS A API
    var carregarContatos = function(){
        $http.get('').success(function (data, status){
            //faz o código aqui
        });
    }

    $scope.adicionarContato = function(contato){
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contato.id = $scope.contatos.length + 1;
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }
    $scope.apagarContatos = function(contatos){
       $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado) return contato;
        })
    }
    $scope.isContatoSelecionado = function(contatos){
      return contatos.some(function(contato){
            return contato.selecionado
        });
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
   

})
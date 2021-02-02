angular.module("listaTelefonica").factory("contatosAPI", function(){
    var _getContatos = function () {
        return $http.get("");
    };

    var _getContato = function (id) {
        return $http.get("");
    };

    var _saveContato = function (contato){
        return $http.post("http://localhost:3412/contatos", contato);
    }

    return {
        getContatos : _getContatos,
        getContato : _getContato,
        _saveContato : _saveContato
    }
});
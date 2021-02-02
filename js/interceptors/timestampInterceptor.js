angular.module("listaTelefonica").factory("timestampInterceptor", function (){
    return {
        //Burla o cash do navegador
        request : function (config){
            var url = config.url;
            if(url.indexOf('view') > -1) return config;
            var timestamp = new Date().getTime();
            config.url  = url + "?timestamp=" + timestamp;
            return config;
        }
    }
})
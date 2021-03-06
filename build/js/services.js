function LlamadaService ($http,$q,$log,$localStorage) {  
    return {
        listar: listar

    }



    function crear(data,photo){

        console.log('Creando...',data,photo)

        var file = photo;



        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"kine/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {

        console.log('Kine.....',data)


                /// Agregando Foto para esta kine

                    var fd = new FormData();

                    fd.append('file', file);

                    fd.append('id', data);

                    $http.post(host+'uploadphoto/', fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                    })

                    .success(function(data){

                        console.log(data)


                    })


        return promise;

        })

    }


    function listar(dni) {


            console.log('DNI...',dni)

            var def = $q.defer();

            $http.get(host+'llamadas/'+dni).success(function(data) {

                    def.resolve(data);
                })
               
            return def.promise;
        }



}




function TipificaService ($http,$q,$log,$localStorage) {  


    return {
        contacto: contacto,
        accion:accion,
        estado:estado,
        tipifica:tipifica

    }






    function tipifica(data){


        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"tipifica",
        data: data,
        method: 'POST'
        }).
        success(function(data) {


        return promise;

        })

    }


    function contacto() {


            var def = $q.defer();

            console.log('jdjdjdjdj',host+'contactos')

            $http.get(host+'contactos').success(function(data) {

                    def.resolve(data);
                })
               
            return def.promise;
        }

    function accion(contacto) {


            var def = $q.defer();

            $http.get(host+'acciones/'+contacto).success(function(data) {

                    def.resolve(data);
                })
               
            return def.promise;
        }


    function estado(accion) {


            var def = $q.defer();

            $http.get(host+'estados/'+accion).success(function(data) {

                    def.resolve(data);
                })
               
            return def.promise;
        }




}




function UserService ($http,$q,$log,$localStorage,$location,$localStorage) {  
    return {
        ingresar: ingresar,
        crear:crear,
        perfil:perfil,
        salir:salir
    }


    function ingresar (data){


        console.log('ingresar...',data)

        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"api-token-auth/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {


        console.log(data)

        $localStorage.token = data.token;

        $location.path('/perfil')


        return promise;

        })


    }

    function salir (){

        delete $localStorage.token;

        $location.path('/')

    }




    function crear (data){

        console.log('ingresar...',data)

        var defered = $q.defer();

        var promise = defered.promise;

        $http({

        url: host+"registra/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {

                $http({

                url: host+"api-token-auth/",
                data: data,
                method: 'POST'
                }).
                success(function(data) {


                console.log(data)

                $localStorage.token = data.token;

                 $location.path('/anuncio')

                })

        return promise;

        })

    }

    function perfil (){

        var defered = $q.defer();

        var promise = defered.promise;

        $http.get(host+'perfil/')

        .success(function(data) {

        console.log('perfil',data)

        defered.resolve(data);

        })

        return promise

    }


}




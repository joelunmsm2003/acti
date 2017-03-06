angular
  .module('app')
  .component('alumnoscomponent', {
    templateUrl: '../html/alumnos/alumnos.html',
    controller: AlumnosController,
    bindings: {
      alumnos: '='
    }
  });



function AlumnosController($scope){

	this.alumnos

	.then(function(data) {

            $scope.alumnos=data

            console.log('UA',data)
        
    })








}


function AndyController($scope) {

	console.log('jdjdjdj')

	$scope.teta='hdhdhdhdh'


		$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('container', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
});


}

angular.module('app').component('andycomponent', {
  templateUrl: 'activak/build/html/andy/andy.html',
  controller: AndyController,
  bindings: {
    hero: '='
  }
});


angular
  .module('app')
  .component('anunciocomponent', {
    templateUrl: '../html/anuncio/anuncio.html',
    controller: AnuncioController
  });



function AnuncioController($scope,UserService,$localStorage){


	console.log('$localStorage',$localStorage)


	

		console.log(UserService.perfil())
	





}

angular
  .module('app')
  .component('colecomponent', {
    templateUrl: 'html/colegio/colegio.html',
    controller: ColeController
  });


function ColeController(ColegioServicio){


	console.log('cole..',ColegioServicio.alumnos())

}

angular
  .module('app')
  .component('formulariocomponent', {
    templateUrl: 'activak/build/html/formulario/formulario.html',
    controller: FormularioController,
    bindings: {
        onDelete: '&'
    }
  });



function FormularioController($scope,$location,$http){

        var ctrl = this;

		// Saca de la URL solo el DNI


		url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

		dni = url.split('&')[0].split('=')[1]

        $scope.base = url.split('&')[1].split('=')[1]

        $scope.id_agente = url.split('&')[2].split('=')[1]

        $scope.nomagente = url.split('&')[3].split('=')[1]

        var formData = { dni: dni };

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : host+'/gestion.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            console.log('Cliente-----',res);

            $scope.agente = res[0]



        })

        $scope.llamar = function(data){

            ctrl.onDelete({hero: data});

        }






	

}

angular
  .module('app')
  .component('headercomponent', {
    templateUrl: 'activak/build/html/html/header/header.html',
    controller: HeaderController,
     bindings: {
        onSidebar: '&'
    }
  });



function HeaderController($scope,$location,$localStorage,UserService){

    var ctrl = this;


    ctrl.sidebar = function() {

    
      ctrl.onSidebar();

      
    };

    $scope.search = function(){

      console.log('data')

    }

   $scope.salir = function () {

      UserService.salir()

    }


  if($localStorage.token){

    console.log('TOKEN',$localStorage.token)

    $scope.token = $localStorage.token



    UserService.perfil().then(function(data) {

           $scope.perfil = data[0]
        
    })





  }


}

angular
  .module('app')
  .component('historialcomponent', {
    templateUrl: 'activak/build/html/html/historial/historial.html',
    controller: HistorialController

  });





function HistorialController($scope,$location,$http){



        // Gestion 


		url = $location.url()

		dni = url.split('=')[1]





}

angular
  .module('app')
  .component('homecomponent', {
    templateUrl: 'activak/build/html/html/home/home.html',
    controller: HomeController

  });





function HomeController($scope,$location,$http){

        console.log('URL...',$location.url())

        var ctrl = this;

        url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

        dni = url.split('&')[0].split('=')[1]

        $scope.base = url.split('&')[1].split('=')[1]

        $scope.id_agente = url.split('&')[2].split('=')[1]

        $scope.nomagente = url.split('&')[3].split('=')[1]

        console.log('Request.......',dni,$scope.base,$scope.agente,$scope.nomagente)

        var formData = { agente: $scope.agente ,base:$scope.base,nomagente:$scope.nomagente};

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : host+'/agentesave.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

    

        })




        var formData = { dni: dni };

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : host+'/gestion.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            $scope.cliente = res[0]

            console.log('Cliente...',$scope.cliente)
        

        })






        var formData = { base: $scope.base };

        var postData = 'myData='+JSON.stringify(formData);

        $http({

        method : 'POST',
        url : host+'/base.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            $scope.agentereal = res[0]

            

        })

        // $scope.goperson =function(data){


        //     window.location.href='/calidad/#/home?dni='+data+'&'+'base=123'

        //     location.reload()

        // }


        $scope.searchdni =function(data){


                console.log('dni....',data)

                var formData = { dni: dni };

                var postData = 'myData='+JSON.stringify(formData);


                $http({

                method : 'POST',
                url : host+'/gestion.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                $scope.resultadodni = res[0]


                })


                var formData = { dni: data };

                var postData = 'myData='+JSON.stringify(formData);


                $http({

                method : 'POST',
                url : host+'/dni.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                    $scope.registros = res

                    console.log('dnis.....',$scope.registros)

                })


        }

        

        $scope.go=function(data){

            console.log('ererer...',data)

               $('#myModal').modal('hide');

               

               
            //window.location.href='http://192.168.40.4/calidad/#/home?dni='+data.cliente+'&'+'base='+data.id_orig_base+'&agente=17402130&nomagente=DeisyH'

            window.location.href=host_primary+'/calidad/#/home?dni='+data.cliente+'&'+'base='+data.id_orig_base+'&agente='+$scope.id_agente+'&nomagente='+$scope.nomagente


            location.reload()
        }


          ctrl.deleteHero = function(hero) {

            console.log('heroeeeee',hero)

            var formData = { telefono: hero };

            var postData = 'myData='+JSON.stringify(formData);


            $http({

            method : 'POST',
            url : host+'/traebase.php',
            data: postData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

            }).success(function(res){

                console.log('Llamar denuevo-',res[0].id_orig_base);

                url = '#/home?dni='+res[0].cliente+'&'+'base='+res[0].id_orig_base+'&agente='+$scope.id_agente+'&nomagente='+$scope.nomagente

                $scope.pasabase = res[0]

                window.location.href='/calidad/#/home?dni='+res[0].cliente+'&'+'base='+$scope.pasabase.id_orig_base+'&agente='+$scope.id_agente+'&nomagente='+$scope.nomagente
   
                location.reload()

            })

            //$location.path(hero)

            

            //window.location.href=hero

            //location.reload()

          };






}

angular
  .module('app')
  .component('ingresarcomponent', {
    templateUrl: 'activak/build/html/html/ingresar/ingresar.html',
    controller: IngresarController
  });


function IngresarController($scope,UserService){



	$scope.ingresar = function(data){

	console.log('Ijjjsjs',UserService.ingresar(data))

	$("#myModal").modal('hide');

	
	swal.close()


	}


}

angular
  .module('app')
  .component('llamadascomponent', {
    templateUrl: 'activak/build/html/html/llamadas/llamadas.html',
    controller: LlamadasController

  });





function LlamadasController($scope,$location,$http,LlamadaService){


        // Saca de la URL solo el DNI

        console.log('hshshshsh')

        url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

        dni = url.split('&')[0].split('=')[1]


        LlamadaService.listar(dni).then(function(data) {

        $scope.llamadas = data

        console.log('LlamadasController...',data)

        })






}

angular
  .module('app')
  .component('newusercomponent', {
    templateUrl: '../html/newuser/newuser.html',
    controller: NewuserController
  });



function NewuserController($location,$scope,KineService,UserService,$http){


	$scope.setFile = function(element) {

		    $scope.currentFile = element.files[0];

		    var reader = new FileReader();

		    reader.onload = function(event) {

		    $scope.upload =true

		    $scope.image_source = event.target.result

		    $scope.$apply()

		    console.log('hdhdhd',$scope.myFile)

    		}
    // when the file is read it triggers the onload event above.
    reader.readAsDataURL(element.files[0]);

    }

    $scope.uploadFile = function(data){

    	var file = $scope.myFile;

    	    var fd = new FormData();

    	    console.log(file)

       fd.append('file', file);
    
       $http.post(host+'uploadphoto/', fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
    
       .success(function(data){



       })

            
	};



	$scope.user = {}

	UserService.perfil().then(function(data) {

           $scope.perfil = data[0]

           $scope.user.name = $scope.perfil.first_name

           $scope.user.phone = $scope.perfil.phone

          
        
    })

	

	$scope.newuser = function(data){

		console.log('gfgfgf',data)

	}

	

	$scope.createuser = function(data){

		console.log(data)

			

		KineService.crear(data,$scope.myFile)

		$location.path('/perfil')




			
	}



	KineService.distritos().then(function(data) {

           $scope.distritos = data
        
    })

    

}

angular
  .module('app')
  .component('perfilcomponent', {
    templateUrl: 'activak/build/html/html/perfil/perfil.html',
    controller: PerfilController
  });



function PerfilController($state,$location,$localStorage,$scope,UserService,KineService,$filter){


	$scope.host = host


	


		UserService.perfil().then(function(response) {

		$scope.perfil = response[0]

		$scope.user_id = $scope.perfil['id']

		console.log('user...',$scope.user_id)

		
    })
	


	KineService.listar().then(function(data) {




$scope.kines = $filter('filter')(data,{ 'user_id' : $scope.user_id})



    })

    $scope.reload = function(){

    	$state.reload()
    }






}

angular
  .module('app')
  .component('redirectcomponent', {
    templateUrl: '../html/redirect/redirect.html',
    controller: RedirectController
  });



function RedirectController($scope,KineService){


	


}



	// Grafica gestionado


function ReporteController($scope,$location,$http){



	$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('container', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
});





	/// Contador de tipo de Contacto

	function gestiontotal(){

				console.log('Greporte...'+host+"gestionado")

				
			    $http.get(host+"gestionado").then(function(response) {

		     	console.log('Respuesta del BAckend...',response)

		     	for(i in response){

		     		console.log('dato...',response[i].contador)

		     		// if(response[i])

		     		if(response[i].contacto==1){

		     			$scope.totaltitular = response[i].contador

		     		}

		     		if(response[i].contacto==2){

		     			$scope.totaltercero = response[i].contador

		     		}

		     		if(response[i].contacto==3){

		     			$scope.totalnocontacto = response[i].contador

		     		}

		     		$scope.totalgestion  = parseInt($scope.totaltitular) + parseInt($scope.totaltercero) +parseInt($scope.totalnocontacto)
		     	}


		    });

	}

	function efectividadtotal(){

				
			    $http.get(host+"/efectividad.php").success(function(response) {

		     	console.log('Respuesta del Efectividad...',response)


		     	for(i in response){

		     		console.log('Efectividad...11',response[i])

		     	
		     		if(response[i].contacto==1 && response[i].accion==1){

		     		console.log('Efectividad...',response[i])

		     		}


				}

	


		    });

	}


	//gestiontotal()

	//efectividadtotal()



	//setInterval(function(){ gestiontotal() }, 1000);






}


angular
  .module('app')
  .component('reportecomponent', {
    templateUrl: 'activak/build/html/reporte/reporte.html',
    controller: ReporteController

  });



angular
  .module('app')
  .component('signupcomponent', {
    templateUrl: '../html/signup/signup.html',
    controller: SignupController
  });


function SignupController($scope,UserService){

	
	$scope.creauser = function(data){

	
		UserService.crear(data, function(response) {

		console.log('iiiii',response);


		})

		    
		//UserService.ingresar(data)
	}


}

angular
  .module('app')
  .component('tipificacioncomponent', {
    templateUrl: '../html/tipificacion/tipificacion.html',
    controller: TipificacionController,
    bindings: {
        pasabase: '='
    }
  

  });





function TipificacionController($scope,$location,$http,$log,TipificaService){


    ctrl = this

    url = $location.url()

    $scope.base = url.split('&')[1].split('=')[1]



    TipificaService.contacto().then(function(data) {

    $scope.contacto = data

    })







    var formData = { base: $scope.base };

    var postData = 'myData='+JSON.stringify(formData);

    $http({

    method : 'POST',
    url : host+'/obtienebase.php',
    data: postData,
    headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

    }).success(function(res){


            $scope.baseresult = res[0]

            $http.get(host+"/contacto.php/").success(function(data) {

                  $scope.contacto = data
    
            });


            // console.log('contacto',$scope.baseresult.contacto)
  
    })



    $scope.muestraagendar= false




    $scope.tipifica =function(data){

      data.base = $scope.base

      console.log(data)


      TipificaService.tipifica(data, function(response) {

      console.log('iojjkjkjk',response);

      })


    }



    




      

        $scope.getestados =function(data){


      

                TipificaService.estado(data).then(function(data) {

                $scope.estados = data

                console.log('Acciones...',data)

                })


        }


            $scope.traeacciones =function(data){


        
                      
                TipificaService.accion(data).then(function(data) {

                $scope.listaaciones = data

             

                })

            } 

            
// Datetime

  $scope.muestratime = false
  
  $scope.agendar = function(data) {
  
   
    $scope.changed()

    $scope.muestratime = true

  };

  $scope.today = function() {
    $scope.dt = null;
  };

  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
     minDate: new Date(),
    showWeeks: false
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };



  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];


  // Time

  $scope.mytime = null;

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 0 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.update()

  $scope.changed = function () {
 
     console.log('FEcha...',$scope.dt.getDate(),$scope.mytime)


                fagenda = JSON.stringify($scope.dt).split(':')[0].split('T')[0].split('"')[1]+' '+$scope.mytime.getHours()+':'+$scope.mytime.getMinutes()

                console.log('Agenda...',fagenda) 


                var formData = { fagenda: fagenda,base:$scope.base };

                var postData = 'myData='+JSON.stringify(formData);

                $http({

                method : 'POST',
                url : host+'/agendar.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                    console.log('llamadas..ooo..',res);

                    $scope.llamadas = res


                })
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };


         $scope.searchdni =function(data){


                


                var formData = { dni: data };

                var postData = 'myData='+JSON.stringify(formData);


                $http({

                method : 'POST',
                url : host+'/llamadas.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                    $scope.registros = res

                    console.log('dnis.....',$scope.registros)

                })


        }

      

    
   







}

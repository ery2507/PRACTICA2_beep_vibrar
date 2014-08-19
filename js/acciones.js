//JavaScript
	
$(document).ready(function(e){	//cuando el documento este listo
	document.addEventListener("deviceready",function(){ //esperar cuando el dispositivo este listo para cachar algun event
			$('#beep').tap(function (){
				navigator.notification.beep(1);// numero de veces que deseas que notifique
				});//beep
			$('#vibrar').tap(function (){
				navigator.notification.vibrate(1000); //miliseguntos pata vibrar lo maximo son 2
				});//vibrar
    	
		},false); //deviceready
	});//ready
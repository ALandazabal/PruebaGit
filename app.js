window.onload = function(){
	init();
}

var canvas, context, stage, i=0, t_evento=0, it=0, dfa=false, pdfa;
var v_estados = [], v_transicion = [], alfabeto = [], palabra = [], estados = [], ax, ay, estado, etrsc, aetrsc, trans;

function init(){
	var contenedor = document.getElementById("contenedor");

	if(Modernizr.canvas){/*comprueba si el contenedor es aceptado por el motor de busqueda*/
		canvas = document.createElement("canvas");
		canvas.width = 1300;
		canvas.height = 600;
		contenedor.appendChild(canvas);/* agrega el canvas al contenedor del html*/

		context = canvas.getContext("2d");

		//stage = new createjs.Stage(canvas);
		stage = new createjs.Stage(canvas);/*libreria escenario donde se trabaja*/

		alfa(prompt('Ingrese el alfabeto separado por espacio',''));/*metodo para leer alfabeto*/
		
		stage.addEventListener("stagemousedown", mouseDown);/*evento para leer del mause en el escenario*/

	}else{
		contenedor.innerHTML = "El navegador no soporta canvas";/*en caso de que el navegador no acepte el canvas*/
	}

}

function resetAll() {/*resetear todo*/    /*Moooodiiifiqueeeeee*/
	location.href="Index.html";
	canvas = null; 
	context = null; 
	stage = null; 
	i=0;
	t_evento=0;
	it=0;
	dfa=false;
	pdfa = null; 
	v_estados = null; 
	v_transicion = null; 
	alfabeto = null; 
	palabra = null; 
	estados = null; 
	ax = null; 
	ay = null; 
	estado = null; 
	etrsc = null; 
	aetrsc = null; 
	trans = null; 
}


function alfa(text){/*separar el alfabeto*/
	alfabeto = text.split(" ");

	/*for (i = 0; i < alfabeto.length; i++) {
		alert(alfabeto[i]);
	}*/
}
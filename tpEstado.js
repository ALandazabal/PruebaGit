function tpEvento(num){
	var _self = this;/*todo el contenido del java script*/
	
	t_evento = num;	
	
	if(t_evento == 4) {
		_self.probar();		
	}
	if(t_evento == 5) {
		_self.verificarTransiciones();
		if(pdfa == true)
			_self.probarPalabra(prompt('Ingrese la Palabra',''));		
	}
	if(t_evento == 6){
		_self.resetAll();		
	}
}
function mouseDown(e) {
	var _self = this;

	if(t_evento == 0){
		_self.crearEstadoA(e);  /* creo estado inicial*/		
	}
	if(t_evento == 1 || t_evento == 2 || t_evento == 7){ /*Modiifiqueeeeeeeeeeeeeeeeeeeeeeee*/
		_self.crearEstado(e);		/* estado normal y final*/
	}
	if(t_evento == 3){
		estado.addEventListener("mousedown",emouseDown);	/*transiciones*/	
	}

	stage.update();/*actualizar el canvas*/
}
function emouseDown(e){/*valida que la transicion este en un estado*/
	var _self = this;
	//alert("Entra");
	for (var j = 0; j < v_estados.length; j++) {
		if(e.stageX > (v_estados[j].x - 30) && e.stageX < (v_estados[j].x + 30) && e.stageY > (v_estados[j].y - 30) && e.stageY < (v_estados[j].y + 30)){
			etrsc = v_estados[j].valor;
			_self.crearTransicion(e);
			break;
		}
	}
}
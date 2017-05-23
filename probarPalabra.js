function probarPalabra(text){
    var _self = this;
    palabra = text.split("");
    _self.automata();
}

function automata(){/*verificar el estado inicial*/
    var k=0, nv, ea, et;
    
    for(i= 0; i < v_estados.length; i++){
        if(v_estados[i].tipo == 0 || v_estados[i].tipo == 7){ /*Modifiqueeeeeeeeeeeeeeeeeeeeeeeeeee*/
            ea = v_estados[i].valor;
            estado.graphics.beginFill('purple').drawCircle(v_estados[i].x, v_estados[i].y, 30);
            break;
        }
    }
    
    do{
    	nv = true;
		
		for(var j = 0; j < v_transicion.length; j++){
			if(v_transicion[j].einicial == ea && v_transicion[j].valor == palabra[k]){
				nv = false;
				for(i = 0; i < v_estados.lengh; i++){
					if(v_estados[i].valor == ea && v_estados[i] == 0){
						estado.graphics.beginFill('red').drawCircle(v_estados[i].x, v_estados[i].y, 30);
					}
					if(v_estados[i].valor == ea && v_estados[i] == 1){
						estado.graphics.beginFill('blue').drawCircle(v_estados[i].x, v_estados[i].y, 30);
					}
					if(v_estados[i].valor == ea && v_estados[i] == 2){
						estado.graphics.beginFill('yellow').drawCircle(v_estados[i].x, v_estados[i].y, 30);
					}
				}
				
				ea = v_transicion[j].efinal;
				
				/*Para pintar la ruta*/
				
				for(i = 0; i < v_estados.length; i++){
					if(v_estados[i].valor == ea){
						estado.graphics.beginFill('purple').drawCircle(v_estados[i].x, v_estados[i].y, 30);
						et = v_estados[i].tipo;
						stage.update();
					}
				}
				
				k++;
				break;
			}
		}
    }while(nv == false); /*Comprobar que no existen mas letras a evaluar*/
	
	if(k == palabra.length && (et == 2 || et == 7)) /*Comprobar que la palabra sea aceptada*/  /*Modifiqueeeeeeeeeeeeeeeeeeeeeeeeeee*/
		alert("Palabra Aceptada");
	else
		alert("No aceptada");
}

function probar(){
	var ini = prompt('Ingrese Estado Inicial', '');
	var fin = prompt('Ingrese Estado Final', '');
	
	for(var k = 0; k < v_transicion.length; k++){
		if(v_transicion[k].einicial == ini && v_transicion[k].efinal == fin){
			alert(v_transicion[k].valor);
		}
	}
}

function verificarTransiciones(){
	var k = 0;
	
	pdfa = false;
	
	for(i = 0; i < v_estados.length; i++){
		for(var j = 0; j < v_transicion.length; j++){
			if(v_estados[i].valor == v_transicion[j].einicial){
				k++;
			}
		}
		
		if(k < alfabeto.length){
			alert("EPA: No estas declarando todas las transiciones del alfabeto en un estado!!");
			pdfa = false;
			break;
		}else{
			pdfa = true;
		}
		
		k = 0;
	}
}

function probTran1(est_tran, val){
	var con = 0;

	for (i = 0; i < v_transicion.length; i++) {
		if(v_transicion[i].einicial == est_tran)
			con++;
	}

	if(con == alfabeto.length){
		alert("EPA: Este estado ya posee todas sus transiciones");
		ax = null; 
		ay = null; 
		etrsc = null;
	}

}
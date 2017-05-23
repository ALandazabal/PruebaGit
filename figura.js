function crearEstadoA(e){
	if( dfa == false){/*comprueba que no existe ya un estado inicial*/
		estado = new createjs.Shape();/*propiesdades de la figura*/
		estado.graphics.beginFill('red').drawCircle(e.stageX,e.stageY,30);/*dibujar*/
		dfa=true;

		do{
			var nv=false;
			estado.valor = prompt('Ingrese valor para Estado','');/*nombre del estado*/
			for (i = 0; i < v_estados.length; i++) {/*comprueba que no existe ese nombre ya*/
				if (v_estados[i].valor == estado.valor) {
					nv = true;
				}
			}
		}while(nv == true);

		estado.tipo = t_evento;
		if(!(estado.valor == undefined || estado.valor == "")){
			stage.addChild(estado);/*agregar la figura al lienzo*/
		} 
		
		/*Pintar valor del estado*/
		var text = new createjs.Text(estado.valor, "16px Arial", "#fff");
		stage.addChild(text);
		text.x = e.stageX-7;
		text.y = e.stageY-7;
		
	 	v_estados.push({ /*vector de los estados*/
	 		x: e.stageX,
	 		y: e.stageY,
	 		valor: estado.valor,
			
	 		tipo: estado.tipo/*0 inicail 1 normal 2 final*/
	 	});
	 
	}
}

function crearEstado(e){	
	
	estado = new createjs.Shape();
	
	if(t_evento == 1){
		estado.graphics.beginFill('blue').drawCircle(e.stageX,e.stageY,30);
	}
	if(t_evento == 2){
		estado.graphics.beginFill('yellow').drawCircle(e.stageX,e.stageY,30);
	}
	if(t_evento == 7){
		estado.graphics.beginFill('green').drawCircle(e.stageX,e.stageY,30);/*Modifiqueeeeeeeeeeeeeeeeeeeeeeeeeee*/
		dfa = true;
	}
	do{
		var nv=false;
		estado.valor = prompt('Ingrese valor para Estado','');
		for (i = 0; i < v_estados.length; i++) {
			if (v_estados[i].valor == estado.valor) {
				nv = true;
			}
		}
	}while(nv == true);
	estado.tipo = t_evento;
	if(!(estado.valor == undefined || estado.valor == "")){
		estados.push(estado);
		stage.addChild(estado);/*agregar la figura al lienzo*/
	}
	
	/*Pintar valor del estado*/
	var text = new createjs.Text(estado.valor, "16px Arial", "#fff");
	stage.addChild(text);
	text.x = e.stageX-7;
	text.y = e.stageY-7;
	
 	v_estados.push({
 		x: e.stageX,
 		y: e.stageY,
 		valor: estado.valor,
 		tipo: estado.tipo
 	}); 	
 	
}
var band = 0;

function radianes(grados){
		 var radianes = (Math.PI/180)*grados;
		 return radianes;
}

function crearTransicion(e){
	trans = new createjs.Shape();
	var _self = this;
	
	if(ax != null && ay != null){
		if(Math.abs(e.stageX-ax) <= 30 ||  Math.abs(e.stageX-ax) <= 30){
			trans.graphics.setStrokeStyle(3);
			trans.graphics.beginStroke('white');
			trans.graphics.arc(e.stageX + 10,e.stageY-18,25,radianes('30'),radianes('190'),23); 
			trans.graphics.draw(context);
			band = 1;
		}else{
			trans.graphics.setStrokeStyle(3);
			trans.graphics.beginStroke('white');
			trans.graphics.moveTo(ax + 20,ay + 20);/*punto inicial*/

			trans.graphics.lineTo(e.stageX - 20,e.stageY - 20);/*punto final*/
			trans.graphics.beginFill('red').drawCircle(e.stageX - 20,e.stageY - 20,5);
			trans.graphics.draw(context);
			band = 0;
		}

		do{
			var nv=true;
			var val=prompt('Ingrese valor para Transicion','');

			for (i = 0; i < alfabeto.length; i++) {
				if (alfabeto[i]==val) {
					nv=false;
					break;
				}/*comprobar que la trasicion pertenece al alfabeto*/
			}

			for (i = 0; i < v_transicion.length; i++) { /*Mooodifiqueeeeeeeeeeeeeeeeeeeee*/
				if(v_transicion[i].einicial == aetrsc && v_transicion[i].valor == val){
					nv = true;
					alert("EPA: Este valor para la transicion de estos estados ya EXISTE");
					ax = null; 
					ay = null; 
					etrsc = null;
					break;
				}
			}

		}while(nv==true);

			if(!(estado.valor == undefined || estado.valor == "")){
				stage.addChild(trans);/*dibajar en lienzo*/
				/*Pintar valor de la transicion*/
				if(band == 0){
					var text = new createjs.Text(val, "16px Arial", "#fff");
					text.x = (ax+e.stageX)/2;
					text.y = (ay+e.stageY+10)/2;
					stage.addChild(text);
				}
				else{
					var text = new createjs.Text(val, "16px Arial", "#fff");
					text.x = ((ax+e.stageX)/2)+9;
					text.y = ((ay+e.stageY+10)/2)-70;
					stage.addChild(text);
				}
				it++;
			} 
		
		
		
		stage.update();

		ax=ay=null;
		v_transicion.push({/*vector de transiciones*/
			valor: val,
			einicial: aetrsc,
			efinal: etrsc
		});
	
	}else{
	
		ax = e.stageX;/*asigna el valor de los puntos iniciales si no los marco */
		ay = e.stageY;
		aetrsc = etrsc;
		//alert(etrsc);
		_self.probTran1(etrsc);
	}	
}
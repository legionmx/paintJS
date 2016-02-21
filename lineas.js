function Coordenada(x,y){
	this.x=x;
	this.y=y;
}

function Recta(pendiente,punto){
	this.pendiente=pendiente;
	this.punto=punto;
	this.obtenOrdenada=function(abcisa){
		return (pendiente*(abcisa-this.punto.x))+this.punto.y;
	};
}

function ponerPunto(coordenada){
	var punto = document.createElement("DIV");
	//var relleno = document.createTextNode("&nbsp;")
	punto.style.position='fixed';
	punto.style.background="#F00";
	punto.style.left=coordenada.x;
	punto.style.top=coordenada.y;
	punto.style.width=3;
	punto.style.height=3;
	//punto.appendChild(relleno);
	document.body.appendChild(punto);
}

function trazarLinea(punto1,punto2){
	//var m = (punto2.y-punto1.y)/(punto2.x-punto1.x);
	var x1 = punto1.x;
	var y1 = punto1.y;
	var x2 = punto2.x;
	var y2 = punto2.y;
	var m = (y2-y1)/(x2-x1);
	var linea = new Recta(m,punto1);
	var puntoInicial;
	if(x2-x1>0) {
		puntoInicial=punto1;
		puntoFinal=punto2
	}
	else {
		puntoInicial=punto2;
		puntoFinal=punto1;
	}
	//alert(puntoInicial.x+' '+puntoFinal.x);
	for (var i = puntoInicial.x; i <= puntoFinal.x; i+=2) {
		//alert(i);
		ponerPunto(new Coordenada(i,linea.obtenOrdenada(i)));
	}
	return true;
}

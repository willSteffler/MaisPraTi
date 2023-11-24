function f1(n) {

	if(n % 2 == 0){

		return --n;
	}else{

		return ++n;
	}
}

var numero = f1(8);

document.print(numero);
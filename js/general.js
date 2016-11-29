var press = function(ev){
	var ascii = ev.keyCode;
	if((ascii>=48 && ascii<=57) || ascii==37 || ascii==39 || ascii==8){
		return true;
	} else{
		return false;
	}
}
var numeroCel= function(){
	var alertas = $("#alertas");
	var longitud = $("#in-cel").val().length;
		if (longitud == 9) {
			$("#codigo-random").attr("href", "datos-codigo.html");
		} else {
			alertas.text("El celular debe tener 9 dígitos");
			alertas.removeClass("hiden");
			setTimeout(function(){ 
				alertas.addClass("hiden"); }, 3000);
			$("#codigo-random").removeAttr("href");
		}
}
var randomCode = function(){
	var longitud = $("#in-cel").val().length;
	if(longitud == 9){
		window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
		alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
		window.localStorage.setItem("celular", $("#in-cel").val());
	}
}
var checkCode = function(){
	var codigo1 = $(".in-code").eq(0).val();
	var codigo2 = $(".in-code").eq(1).val();
	var codigo3 = $(".in-code").eq(2).val();
	var codigo = codigo1 + codigo2 + codigo3;
	var alertas = $("#alertas");
	if(codigo == window.localStorage.getItem("numeroAleatorio")){
			$("#done-code").attr("href", "datos-direccion.html");
		} else {
			$("#done-code").removeAttr("href");
			alertas.text("Código erróneo");
			alertas.removeClass("hiden");
			$(".in-code").val("");
			$(".in-code").eq(0).focus();
			setTimeout(function(){ 
				alertas.addClass("hiden"); }, 3000)
		}
}
var pressCode = function(ev){
	var ascii = ev.keyCode;
	var longitud = $(this).val().length;
	if((ascii>=48 && ascii<=57  && longitud==0) || ascii==8){
		return true;
	} else{
		return false;
	}
}
var pressupCode = function(ev){
	var longitud = $(this).val().length;
	var ascii = ev.keyCode;
	if(longitud==1){
		$(this).next().focus();
	}
	if(ascii==8){
		$(this).prev().focus();
	}
}
var segundoCode= function(){
	window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
	alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
	$(".in-code").val("");
	$(".in-code").eq(0).focus();
	$(".in-code").focus();//ojo
}

var letras = function(ev){
	var ascii = ev.keyCode;
	if ((ascii<97 || ascii>122) && (ascii<65 || ascii>90) && ascii!=45 && ascii!=241 && ascii!=209 && ascii!=32 && ascii!=225 && ascii!=233 && ascii!=237 && ascii!=243 && ascii!=250 && ascii!=193 && ascii!=201 && ascii!=205 && ascii!=211 && ascii!=218 && ascii!=91){
		return false;
	}
	else{
		return true;
	}
}
var maxName = function(){
	var alertas = $("#alertas");
	var name = $(".in-dates").eq(0).val();
	if(name.length>=30){
		alertas.text("Debe tener máximo 30 caracteres");
		alertas.removeClass("hiden");
		$(this).next().focus();
		setTimeout(function(){ 
			alertas.addClass("hiden"); }, 3000);
	}

}
var maxLastname = function(){
	var alertas = $("#alertas");
	var lastname = $(".in-dates").eq(1).val();
	if(lastname.length>=30){
		alertas.text("Debe tener máximo 30 caracteres");
		alertas.removeClass("hiden");
		$("#in-mail").focus();
		setTimeout(function(){ 
			alertas.addClass("hiden"); }, 3000);
	}

}
var checkMail = function(){
	var caracteres = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
	var alertas = $("#alertas");
	var namr = $(".in-dates").eq(0).val().length;
	var lastname = $(".in-dates").eq(1).val().length;
	var materialize = $("#in-mail").val().length;
	var checkingMail = $("#in-mail").val().match(caracteres);
	if(checkingMail){
		$("#registration").attr("href", "ubicacion.html");
		window.localStorage.setItem("name",$(".in-dates").eq(0).val());
		window.localStorage.setItem("lastname",$(".in-dates").eq(1).val());
		window.localStorage.setItem("mail",$("#in-mail").val());
		/*var diaJoin = new Date();
		var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
		window.localStorage.setItem("join",diaJoin.getDate()+ " " +meses[diaJoin.getMonth()]+ " " +diaJoin.getFullYear());*/
	}
	else if(!checkingMail){
		$("#registration").removeAttr("href");
		alertas.text("Ingresa un formato de correo válido");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
	if(mail==0 ){
		alertas.text("Ingresa tu correo");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
	if(mail>=50){
		alertas.text("El correo debe tener como máximo 50 caracteres");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
	
	if(name==0 || name==0){
		alertas.text("Ingresa tus datos");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
	if(lastname==0){
		alertas.text("Ingresa tu apellido");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}

	if(lastname==0 && mail==0){
		alertas.text("Ingresa tu apellido y correo");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
	if(name==0 && mail==0){
		alertas.text("Ingresa tu nombre y correo");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
	
	if(lastname==0 && name==0 && mail==0){
		alertas.text("Ingresa tu datos");
		alertas.removeClass("hiden");
		setTimeout(function(){ alertas.addClass("hiden"); }, 3000);
	}
}
var load = function(){
	$("#in-cel").focus();
	$("#in-cel").keypress(press);
	$("#codigo-random").click(numeroCel);
	$("#numbers").text(window.localStorage.getItem("celular"));
	$("#codigo-random").click(randomCode);
	$(".in-code").eq(0).focus();
	$(".in-code").keyup(pressupCode);
	$(".in-code").keydown(pressCode);
	$("#sent-code").click(segundoCode);
	$("#done-code").click(checkCode);
	$(".in-dates").eq(0).focus();
	$(".in-dates").keypress(letras);
	$(".in.dates").eq(0).keydown(maxName);
	$(".in-dates").eq(1).keydown(maxLastname);
	$("#registration").click(checkMail);
	$("#usuario-editable").text(window.localStorage.getItem("nombre"));
	
}
$(document).ready(load);

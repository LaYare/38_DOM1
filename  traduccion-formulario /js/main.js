
	var formHead = document.getElementById('form-signin-heading');
	formHead.innerHTML = "Por favor inicia sesión";

	var inputEmail = document.getElementById('inputEmail');
	inputEmail.setAttribute('placeholder','Correo Electónico');

	var inputPassword = document.getElementById('inputPassword');
	inputPassword.setAttribute('placeholder','Contraseña');

	var btnSignIn = document.getElementsByTagName('button')[0];
	btnSignIn.innerHTML = "Iniciar Sesión";

	var checkbox = document.getElementsByTagName('span')[0];
	checkbox.innerHTML = "Recordar datos";
	

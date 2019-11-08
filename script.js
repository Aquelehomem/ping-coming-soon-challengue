function checkEmail(){
	var Value = document.querySelector('input').value
	usuario =Value.substring(0, Value.indexOf("@"))
	dominio = Value.substring(Value.indexOf("@")+ 1, Value.length)
	if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
		document.querySelector('.error').innerHTML=``
		document.querySelector('input').style.borderColor = ''
	}else{
		document.querySelector('.error').innerHTML=`Please provide a valid email adress`
		document.querySelector('input').style.borderColor = 'red'
	}
}
document.querySelector(`input`).addEventListener('blur',checkEmail)
document.querySelector('button').addEventListener('click',checkEmail )
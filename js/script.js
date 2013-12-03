//Função que irá cortar os caracteres inválidos, como '.', espaços, '-' e afins
function noSpacing()
{
	var s = document.getElementById('stringNoSpacing').value;
	
	s = s.replace(/(\.)+/g, 	'');//troca ponto por nada

	document.getElementById('resultNoSpacing').value = s;//Joga resultado na caixa input abaixo

	var maxCaracter = 140;//Limita quantidade de caracteres
	var resultado = document.getElementById('lengthNoSpacing').innerHTML = maxCaracter - s.length; //Faz um contador regressivo de caracteres
	//console.info(resultado);
	//document.getElementById('lengthNoSpacing').innerHTML = s.length;
}

//Função que irá fazer a seleção do resultado da string
//e chama a função aceitarTermos
function Seleciona()
{
	document.formNoSpacing.resultNoSpacing.select();
	aceitarTermos();
}

//Função que irá verificar se os termos de compromissos foram aceitos
//se sim retorna true e chama a função copyToClip(text)
function aceitarTermos()
{
	//Se a checkbox não estiver checked
	if(document.formNoSpacing.termosCompromisso.checked == false)
	{	
		//Retorna alerta e para execução
		alert('Aceito os termos para prosseguir');
		return false;
	}
	//Senão executa function copyToClip(text);
	else{
		copyToClip(resultNoSpacing.value);
	}
}

//função que irá exibir prompt com resultado da string para cópia
function copyToClip(text)
{
	window.prompt("Aperte CTRL + C e de ENTER", text);
}

//Função que troca coreszinhas!
function trocaCor()
{
	var i;
	//Faz um loop percorrendo por todos btn radio
	for (i=0; i < document.trocaCores.cor.length;i++)
	{
		//Quando encontrar um btn checado para o looping
		if(document.trocaCores.cor[i].checked)
		break;
	}
	//alert(document.trocaCores.cor[i].value);
	//pega o id do corpo do documento
	var container = document.getElementById('container');
	//aplica o css com o valor do btn radio selecionado
	container.style.background = document.trocaCores.cor[i].value;

}
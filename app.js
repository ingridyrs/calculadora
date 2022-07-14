/** Declara variáveis dos campos de resposta**/
var etanol,gasolina;

/**Função Calcular**/
function calcular(){
    /**Converte as strings em valores numéricos */
	etanol = parseFloat(frmCombustivel.txtEtanol.value.replace(",",".")); /** parseFloat aceita valores com casas decimais//ajusta o separador , para ponto*/
	gasolina = parseFloat(frmCombustivel.txtGasolina.value.replace(",","."));
    /** multiplica valor da gasolina por 0.7 e verifica resultado **/
	if (etanol < 0.7 * gasolina){
	
    /** coloca a imagem do Etanol na tela se o valor for menor que o encontrado após a multiplicação com o preço da gasolina**/
         document.getElementById("status").src="etanol.png";
    /**caso o valor seja maior, exibe a imagem Gasolina */
	}else{
		document.getElementById("status").src="gasolina.png";
	}
}

// Define função que remove o GIF antigo
function resetar(){
	document.getElementById("status").src="calculadoraCombustivel.gif";
}
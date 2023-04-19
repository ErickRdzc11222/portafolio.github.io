function suma()
{
var suma1,suma2,resul;
suma1=prompt("Escribe el Numero 1:", "");
suma2=prompt("Escribe el Numero 2:", "");
resul=parseInt(suma1)+parseInt(suma2);
alert("La Suma es: " +resul)
}
function resta()
{
var resta1,resta2,resul;
resta1=prompt("Escribe el Numero 1:", "");
resta2=prompt("Escribe el Numero 2:", "");
resul=parseInt(resta1)-parseInt(resta2);
alert("La Resta es: " +resul)
}
function multiplica()
{
var m1,m2,resul;
m1=prompt("Escribe el Numero 1:", "");
m2=prompt("Escribe el Numero 2:", "");
resul=parseInt(m1)*parseInt(m2);
alert("La Multiplicacion es: " +resul)
}
function divide()
{
var D1,D2,resul;
D1=prompt("Escribe el Numero 1:", "");
D2=prompt("Escribe el Numero 2:", "");
resul=parseInt(D1)/parseInt(D2);
alert("La Division es: " +resul)
}
function posneg()
{
var N1;
N1=prompt("Escribe el Numero:", "");
if (parseInt(N1)<0)
alert("El Numero es Negativo");
else
if (parseInt(N1)>0)
alert("El Numero es Positivo");
}

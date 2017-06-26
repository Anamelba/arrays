//**** EJERCICIO 1 ***********************************
var arr=[4,4,5,12];
var multiplicacion=arr.reduce(function(resultado,num){
return resultado*num;
},9);
console.log(multiplicacion);

// **** EJERCICIO 2 ***********************************
var cellNumber = [784123123, 355676784, 342354354]
var cell= cellNumber.filter(filterCell)
function filterCell(element, index, cellNumber)
{
  var firstChar = element.toString().substr(0,3);
  var lastChar = element.toString().substr(6,9);

  if(firstChar == "784" || lastChar == "784")
    {
      console.log(element);
    }
}
//**** EJERCICIO 3 ***********************************
var arr = [7,14,44,80,77,35];

var multiplos = arr.forEach(eachMult);
function eachMult(element, index, cellNumber)
{
  var x = 7;
  if(element%x == 0)
  {
    console.log(element);
  }
}

//**** EJERCICIO 4 ***********************************
var arr = [2,5,7,2,3,8,10];
var doble = arr.map(mapDoble);
function mapDoble(element, index, cellNumber)
{
  var element = element*2 + 1;
  console.log(element);
}
//**** EJERCICIO 5 ***********************************
var arr = [2,5,7,2,3,8,10];
var doble = arr.map(mapDoble)
function mapDoble(element, index, cellNumber)
{
  var element = element*9/5 + 32;
  console.log(element);
}
//**** EJERCICIO 6 ***********************************
var arr=[1,2,3,4];
var producto=arr.reduce(function(resultado,num){
return resultado*num;
});
console.log(producto);*/
//**** EJERCICIO 7 ***********************************
var edad = [20, 16, 89, 6];
var año= edad.filter(filterAño)
function filterAño(element, index, edad)
{
  var fecha_hoy = new Date();
  var ahora_anio = fecha_hoy.getFullYear();
  var newElement = ahora_anio - element;
  if(element>18)
    {
      console.log(newElement);
    }
}

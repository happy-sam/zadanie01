var a = prompt("Podaj pierwszą liczbę");
var b = prompt("Podaj drugą liczbę");
var c = prompt("Podaj trzecią liczbę");
var value = (2 * a * b) + (3 * b * c) - (4 * b * c);
 
if (value > 0) {
    document.write("zmienna a = " + a + "<br>");
    document.write("zmienna b = " + b + "<br>");
    document.write("zmienna c = " + c + "<br>");
    document.write("<span class='wartosc'>" + "Wartość jest dodatnia i wynosi " + value + "</span>");
}
else if (value < 0) {
    document.write("zmienna a = " + a + "<br>");
    document.write("zmienna b = " + b + "<br>");
    document.write("zmienna c = " + c + "<br>");
    document.write("<span class='wartosc'>" + "Wartość jest ujemna i wynosi " + value + "</span>");
}
else {
    document.write("zmienna a = " + a + "<br>");
    document.write("zmienna b = " + b + "<br>");
    document.write("zmienna c = " + c + "<br>");
    document.write("<span class='wartosc'>" + "Wartość wynosi " + value + "</span>");
}

console.log(value);
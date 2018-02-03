var a = prompt("Podaj pierwszą liczbę");
var b = prompt("Podaj drugą liczbę");
var c = prompt("Podaj trzecią liczbę");
var value = (2 * a * b) + (3 * b * c) - (4 * b * c);
 
if (value > 0) {
    document.write("<p>" + "zmienna a = " + a + "</p>");
    document.write("<p>" + "zmienna b = " + b + "</p>");
    document.write("<p>" + "zmienna c = " + c + "</p>" + "<br>");
    document.write("<span class='wartosc'>" + "Wartość jest dodatnia i wynosi " + value + "</span>");
} else if (value < 0) {
    document.write("<p>" + "zmienna a = " + a + "</p>");
    document.write("<p>" + "zmienna b = " + b + "</p>");
    document.write("<p>" + "zmienna c = " + c + "</p>" + "<br>");
    document.write("<span class='wartosc'>" + "Wartość jest ujemna i wynosi " + value + "</span>");
} else {
    document.write("<p>" + "zmienna a = " + a + "</p>");
    document.write("<p>" + "zmienna b = " + b + "</p>");
    document.write("<p>" + "zmienna c = " + c + "</p>" + "<br>");
    document.write("<span class='wartosc'>" + "Wartość wynosi " + value + "</span>");
}

console.log(value);
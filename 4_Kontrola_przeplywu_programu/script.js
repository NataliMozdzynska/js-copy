
// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}
// zad 1 //

var licz = 5 ;
var cyf = 7 ;

if (licz < cyf) {
 greeting = "Licz jest mniejsza od cyf ";
  } else {
    greeting = "To cyf jest wieksza";
  } 
  console.log(greeting);
  //zrobione zad 1//


  //zad 2 //

  var first = 1 ;
  var second = 2 ;
  var third = 3 ;

  if (first < second && second < third) {
 gre = "first jest mniejsza od second i third ";
  } else if (third > second)
  {
    gre = "To third  jest wieksza";
  } else ( "second jest wieksza")

  console.log(gre);
  // zad drugie end//

  //zad 3 //
  var i = undefined ;

  for (let i=0; i<10; i++) {
    console.log("lubie javascript");
}
//zad 3 end//

//zad 4//

var result = 0 ;

for (let i=0; i<10; i++) {
    console.log(i);
}
//zad 4 done//

let tablica = [1,10,3];
console.log(tablica[0]);
console.log(tablica[1]);
console.log(tablica[2]);
console.log(tablica.length)

let tablica2 = ["kiwi","banan","jablko"]
var t = 0
console.log(tablica2[t])
console.log(tablica2.length - 1)
console.log(tablica2[tablica2.length - 1])
for(var i = 0; i < tablica2.length; i++) {
    console.log(tablica2[i])
}


let tablica3 = [1,2,3,4,5,6,7,8,9,10]
var sum = 0 ;

for(var i = 0; i<tablica3.length; i++){
    sum = sum + tablica3[i]
}
console.log(sum)

let tablica4 = [1,12,3,4,5,6,7,18,9,10]
var max = 0 ;
for(var i = 0 ; i < tablica4.length; i++){
    if (tablica4[i] > max) {
        max = tablica4[i]
    }
}
console.log(max)


let tablica5 = [2,4,5,2,3,5,1,2,4]
var firstIndex

for (var i = 0; i < tablica5.length; i++) {
    for (let k = 0; k < tablica5.length; k++) {
      if (tablica5[i] == tablica5[k] && i != k) {
        firstIndex = i;
        break;
      }
    }
    if (typeof firstIndex !== "undefined") {
      break;
    }
  }
  
console.log(firstIndex);


let tablica5 = [2,4,5,2,3,5,1,2,4]

for(let i = tablica5.length - 1; i >= 0; i--) {
    console.log(tablica5[i])
}

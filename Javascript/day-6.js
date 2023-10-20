var num = [4, 8, 6, 7, 2, 55, 71, 88, 66]
function EvenorOdd(array) {
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log(`${array[i]} even number`)
            evenCount++;
        } else {
            console.log(`${array[i]} odd number`)
            oddCount++;

        }
    }
    console.log(oddCount, "-oddcount")
    console.log(evenCount, "-evenCount")
}
EvenorOdd(num);

var a = [7, 5, 2, 8, 9, 6, 3, 88, 5, 4, 2, 8, 77]
var target = 10;

for (var i = 0; i < a.length - 1; i++) {

    for (var j = i + 1; j < a.length; j++) {

        if (a[i] + a[j] == target) {
            console.log(`${a[i]} + ${a[j]} = ${target}`)
        }
    }
}

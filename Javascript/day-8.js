var name = ["tejas", "ram", "sita", "virat"];
name.sort();
console.log(name);

var num = [1, 55, 88, 8, 66, 0];
num.sort();
console.log(num);
num.sort((a, b) => b - a);
console.log(num);

var obj = { studentRollno: "12", studentName: "ronny" };
var output = JSON.stringify(obj)
console.log(output);
output = JSON.parse(output)
console.log(output)
console.log(output.studentName, output.studentRollno)
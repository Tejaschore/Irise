const skills=['Javascript','css','html','java'];
console.log(skills)
skills.push('React');
skills.push('sql')
skills.push('Express')
console.log(skills);

var poppedSkills = [];
for (var i = 0; i < 7; i++) {
    var skill = skills.pop();
    poppedSkills.push(skill);
}
console.log(poppedSkills.join(" "));


var array=["shift-->",1,2,3,4,5];
console.log(array);

array.shift()
array.shift()
array.shift()
console.log(array);

var array2=["unshift-->",3,4,5];
console.log(array2);
array2.unshift(2)
array2.unshift(0,1)
console.log( array2)

var num=[5,4,3,2,1];
console.log(num)
var multi=num.map((i)=>i*2)
var add=num.map((i)=>i+2)
var divi=num.map((i)=>i/2)
console.log("multiplication:  " +multi);
console.log("addition:  " +add);
console.log("division:  " +divi);
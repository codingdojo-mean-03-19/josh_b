//1
//var hello;
//var hello = 'world';                                 
//console.log(hello);
////predicted output: 'world'
//
////2
//var needle;
//var needle = 'haystack';
//function test(){
//	var needle = 'magnet';
//	console.log(needle);
//}
//test();
////predicted output: 'magnet'
//
////3
//var brendan;
//var brendan = 'super cool';
//function print(){
//	var brendan = 'only okay';
//	console.log(brendan);
//}
//console.log(brendan);
////predicted output: 'super cool'
//
////4
//var food;
//var food = 'chicken';
//function eat(){
//	var food = 'half-chicken';
//	console.log(food);
//	var food = 'gone';
//}
//console.log(food);
//eat();
//predicted output: 'chicken', 'half-chicken'

//5
//var mean;
//var mean = function() {
//    var food;
//	var food = "chicken";
//	console.log(food);
//	var food = "fish";
//	console.log(food);
//}
//mean();
//console.log(food);
//console.log(food);
//predicted output: 'chicken, 'fish', food not defined

//6
var genre;
var genre = "disco"; //disco sucks!
function rewind() {
	var genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
rewind();
console.log(genre);
//predicted ouput: 'disco', 'rock', 'r&b', 'disco'

//7
var dojo;
function learn() {
	var dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
var dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
//predicted output: 'san jose', 'seattle', 'burbank', 'san jose'

//8
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//predicted output:
//{ name: 'Chicago', students: 65, hiring: true }
//{ name: 'Berkeley', students: 0, hiring: "closed for now" }

//actual output:
//{ name: 'Chicago', students: 65, hiring: true }
//TypeError: Assignment to constant variable.

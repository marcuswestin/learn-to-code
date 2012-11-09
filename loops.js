// var http = require('http')
// 
// var server = http.createServer(function(request, response) {
// 	console.log(request.url)
// 	response.end("Hello!")
// })

function greet(person) {
	console.log("Heeeello "+person)
}
// 
// var user = {
// 	name:'Marcus'
// }
// 
// greet(123)
// greet("Ashley")
// greet(user.name)

function getTeachers() {
	// db.select("SELECT name, age FROM teachers")
	// db.insert("INSERT INTO teachers (name, age) VALUES ()")
	
	var user1 = {
		name:"Ashley",
		age:26
	}

	var user2 = {
		name:'Marcus',
		age:27
	}
	
	var user3 = {
		name:'Rachel',
		age:28
	}
	
	return [user1.name, user2.name, user3.name]
}

var teachers = getTeachers()

// teachers.forEach(greet)

// for each teacher, do to the teacher: add teacher name to variable called "output"

var teacherNames = "Contenta teachers are: "
function addTeacherToTeacherNames(teacher) {
	teacherNames = teacherNames + teacher + " and "
}

teachers.forEach(addTeacherToTeacherNames)

console.log(teacherNames)

// console.log("Contenta teachers are "+teachers[0]+" and "+teachers[1])

// var ageSum = user.age + user2.age
// 
// // console.log(user.name)
// // console.log("Sum of ages is " + ageSum)
// // console.log(user2.age)
// 
// var BestwinAgeSum = user.name + " "+user.age + " plus "+ user2.name +" "+user2.age+ " equals Bestwin "+ ageSum
// 
// console.log (BestwinAgeSum.substr(0, 10).length)

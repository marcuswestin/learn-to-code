var input = document.getElementById('input')
input.style.width = '400px'
input.style.padding = '10px'
input.style.margin = '40px 0 0 10px'


function createKey(letter, color) {
	var key = document.createElement('div')
	document.getElementById('keyboard').appendChild(key)
	key.style.height = '100px'
	key.style.width = '100px'
	key.style.background = color
	key.innerHTML = letter
	key.style.color = 'white'
	key.style.fontSize = '100px'
	key.style.textAlign = 'center'
	key.style.display= 'inline-block'
	key.onclick = function() {
		console.log(letter)
		input.value = input.value + letter
	}
}

createKey('a', 'red')
createKey('b', 'blue')



// Now lets create a qwerty keyboard

var rows = [
	['q','w','e','r','t','y'],
	['a'],
	[]
]

rows.forEach(function(row) {
	console.log(row)
	row.forEach(function(letter) {
		console.log(letter)
		createKey (letter, 'green')
	})
	
	
	// row.forEach(function (letter){
	// 	
	// })
	// 	
	// 	
	// 	
	// 	createKey(letter, color)
})
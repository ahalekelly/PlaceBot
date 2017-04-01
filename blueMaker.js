fs = require('fs')
var paintColor=13
tiles=[]
for (var i=0; i<100; i++) {
	x=999
	y=999-i
	while(y<1000) {
		tiles.push([x,y,paintColor])
		x -= 1
		y += 1
	}
}
var output = JSON.stringify(tiles)
fs.writeFile("blueCorner.json",output)
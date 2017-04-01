fs = require('fs')
var paintColor=13
tiles=[]

var blue=13

makeRectangle(56, 247, 56+50-7, 247+10, blue)

function makeRectangle(x1, y1, x2, y2, c) {
	for (var x=x1; x<=x2; x++) {
		for (var y=y1; y<=y2; y++) {
			tiles.push([x,y,c])
		}
	}
}

var output = JSON.stringify(tiles)
fs.writeFile("nerfDart.js",output)
fs = require('fs')
var paintColor=13
tiles=[]

var blue=13

makeRectangle(56, 248, 56+50-8, 257, blue)

function makeRectangle(x1, y1, x2, y2, c) {
	for (var x=x1; x<=x2; x++) {
		for (var y=y1; y<=y2; y++) {
			tiles.push([x,y,c])
		}
	}
}

var output = "var tiles="+JSON.stringify(tiles)+";"
fs.writeFile("nerfDart.js",output)
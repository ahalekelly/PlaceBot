fs = require('fs')
var paintColor=13
tiles=[]

var blue=13

makeRectangle(56, 248, 56+50-8, 256, blue, false)

function makeRectangle(x1, y1, x2, y2, c, fill) {
	for (var x=x1; x<=x2; x++) {
		if (fill) {
			for (var y=y1; y<=y2; y++) {
				tiles.push([x,y,c])
			}
		} else {
			tiles.push([x,y1,c])
			tiles.push([x,y2,c])
		}
	}
}

var output = "var tiles="+JSON.stringify(tiles)+";"
fs.writeFileSync("nerfDart.js",output)
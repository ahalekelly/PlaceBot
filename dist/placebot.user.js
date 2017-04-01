// ==UserScript==
// @name        PlaceBot
// @version     0.0.5
// @namespace   https://github.com/grind086/PlaceBot
// @description A bot that automates drawing on reddit.com/r/place
// @include     http://www.reddit.com/r/place/
// @include     https://www.reddit.com/r/place/
// ==/UserScript==

(function() {
var j = document.createElement('script');
j.setAttribute('type', 'text/javascript');
j.setAttribute('src', 'https://raw.githubusercontent.com/ahalekelly/PlaceBot/master/blueCorner.js');
document.head.appendChild(j);
var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', 'https://raw.githubusercontent.com/ahalekelly/PlaceBot/master/placebot.js');
document.head.appendChild(s);
})();
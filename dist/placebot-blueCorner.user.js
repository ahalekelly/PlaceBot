// ==UserScript==
// @name        PlaceBot Blue Corner
// @version     0.0.5
// @namespace   https://github.com/ahalekelly/PlaceBot
// @description A bot that automates drawing on reddit.com/r/place
// @include     https://www.reddit.com/place*
// @include     https://www.reddit.com/r/place/
// ==/UserScript==

(function() {
var j = document.createElement('script');
j.setAttribute('type', 'text/javascript');
j.setAttribute('src', 'https://ahalekelly.github.io/PlaceBot/blueCorner.js');
document.head.appendChild(j);
setTimeout(function() {
var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', 'https://ahalekelly.github.io/PlaceBot/placebot.js');
document.head.appendChild(s);
},100);
})();

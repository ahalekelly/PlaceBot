# PlaceBot

A bot that aims to automate [place](//www.reddit.com/r/place).

## Install

The recommended way to use the bot is via a userscript. Alternatively, you can
just drag the bookmarklet link below into your bookmarks, and click when you want
to run the bot.

* [Userscript](https://github.com/grind086/PlaceBot/raw/master/dist/placebot.user.js)
* <a href="javascript:(function() {var j = document.createElement('script');j.setAttribute('type', 'text/javascript');j.setAttribute('src', 'https://raw.githubusercontent.com/ahalekelly/PlaceBot/master/blueCorner.js');var s = document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('src','https://raw.githubusercontent.com/ahalekelly/PlaceBot/master/placebot.js');document.head.appendChild(s);})();">Bookmarklet</a>

## Features

* Automatically draws tiles as the cooldown expires
* Configurable draw order
    * Top down
    * Input order
    * Random

### Planned

* Allow drawing at any time, and queue tile placements
* Allow export/import of drawings, so that multiple people can work on each one
* Persist to local storage or cookies

## Changes

See the changelog [here](CHANGES.md).

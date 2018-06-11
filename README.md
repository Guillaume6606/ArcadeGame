# ARCADE GAME

## Table of Contents

* Instructions
* Listing of the variables of the app.js file
* Listing of the functions of the app.js file and uses
* Remarks

## Instructions

To use the game, place the document with the files on your computer and open the index.html file in the browser of your choice (developed especially for Firefox and Google Chrome, so if any stability issue was to happen, use these browsers.)

In order to play, you only need to  use the directional keys to control the player.
Your goal is simple: reach the water row at the top of the screen without getting touched by the moving enemies.

## Listing of the variables

* box-width / box-height: store respectively the width and the height of one box of the playground
* allEnemies: array storing all the existing enemy objects.
* victory: flag variable that indicates whether the game is won or not

## Listing of the functions

* Entities: (class) defines the basic entity object: an element that has a position in space.
* Enemy: (class) an Entity that moves from left to right to a "destination" of 500px before starting its movement anew.
* Player: (class) an Entity that moves according to the commands entered by the player.
* checkCollision: a function that checks at every refresh whether the player and an enemy have collided, i.e. they have similar coordinates.
* checkVictory: a function that checks at every refresh whether the player has reached his objective.


## Remarks

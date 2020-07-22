'use strict'



const Game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-canvas', { preload, create, update })

let fireFactor = 300, fireTimer = 0
let bullets

function foo(p) { 
    /*if (fireFactor < 575 && fireFactor > 25) {
        fireFactor -= p
        document.getElementById("myMeter").value += p
        console.log(fireFactor)
        //fireFactor -= 25
    } else {
        alert('Enough.')
    }*/

    // if (fireFactor >= 600 || fireFactor <= 0) {
    //     alert('Enough.')
    // }

    if (fireFactor === 575 ) {
        alert('Enough.')
        fireFactor = 550
    } else if (fireFactor === -25) {
        alert('Enough.')
        fireFactor = 25
    }
    else {
        fireFactor -= p
        document.getElementById("myMeter").value += p
        console.log(fireFactor)
    }
    
    //   if ( fireFactor <= 100) {
    //     document.getElementsByTagName(low).style.background="linear-gradient(to right, #33ccff, #7cbaed)"
    //     //  document.getElementBy.style.background = "linear-gradient(to right, #33ccff, #7cbaed)"
    //   } else if ( fireFactor > 100 && fireFactor <= 250 ) {
    //     document.getElementById("myMeter").style.background = "linear-gradient(to right, #7cbaed, #b2acdf)"
    //   } else if ( fireFactor > 250 && fireFactor <= 400 ) {
    //     document.getElementById("myMeter").style.background = "linear-gradient(to right, #b2acdf, #ff99cc)"
    //   }

    // console.log(fireFactor)

    // if(p === 25){
    //     document.getElementById("myMeter").value -= 25
    //     fireFactor += p
    // }
    // else if(p === -25){
    //     document.getElementById("myMeter").value += 25
    //     fireFactor += p
    // }
    
}

function preload() {
    Game.load.image('bullet', '../assets/images/sphere.png')
}

function create() {
    Game.scale.pageAlignHorizontally = true
    Game.stage.backgroundColor = '#fff'

    bullets = Game.add.group()
    bullets.createMultiple(30, 'bullet')
    bullets.setAll('outOfBoundsKill', true)
    bullets.setAll('checkWorldBounds', true)

    const text = Game.add.text(Game.width / 2, Game.height, 'faster', { font: '30px Consolas', align: 'center', fill: '#EE259C' })
    text.anchor.setTo(0.5, 1)
    text.inputEnabled = true
    text.events.onInputDown.add(faster, this)
}

function update() {
    if (Game.time.now > fireTimer) {
        fireTimer = Game.time.now + fireFactor

        const bullet = bullets.getFirstExists(false)
        bullet.reset(Game.input.mousePointer.x, Game.input.mousePointer.y)
        bullet.scale.setTo(0.06)

        Game.physics.arcade.enable(bullet)
        bullet.body.velocity.y = -400

        // https://phaser.io/docs/2.4.4/Phaser.Tween.html#to
        Game.add.tween(bullet.scale).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Linear.None, true)
    }
    // console.log('There are ' + bullets.countLiving() + ' bullets alive.')
}

const faster = function () {
    if (fireFactor > 25) {
        fireFactor -= 25
    } else {
        alert('Enough.')
    }
}

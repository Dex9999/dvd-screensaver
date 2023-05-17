let download = sprites.create(img`
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffdddddddddbfffffddddddcffffff
    ffffffddddddddddffffbddddddbbfffff
    ffffffbbbb111111bffb11bbbbd11dffff
    ffffffbbccb11111bffd1dbbccb111ffff
    ffffffbbfffd11d11ff11bbbcffd11cfff
    fffffc11fffd11b11fc11c11bffc11cfff
    fffffc1dfffd11f11f11dc11cffc11cfff
    fffffb1dfffd1bf11d11fb11cffd11ffff
    fffffd1dffb11cfd111ff111ffc11cffff
    fffff11dd111bffd111ff111b111bfffff
    fffff111111cfffb11cff111111bffffff
    fffffbbbbcfffffc1cfffbbbbcffffffff
    ffffffffffffffff1fffffffffffffffff
    ffffffffffffffffbfffffffffffffffff
    fffffffcbbdd111111111ddbbcffffffff
    ffffcb11111111ddd1111111111bffffff
    ffff111111111cfffff111111111dfffff
    ffffb111111111bccd1111111111cfffff
    ffffffccd111111111111111dccfffffff
    ffffffffcccbbbbbbbbbbbcccffcffffff
    fffffffffffffffffffffffffffcffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
let mySprite = download
mySprite.setPosition(150, 110)
mySprite.setVelocity(50, 50)
if (mySprite.x > 149) {
    effects.confetti.startScreenEffect()
} else if (mySprite.x < 120) {
	
} else {
	
}
forever(function () {
    mySprite.setBounceOnWall(true)
    console.log(scene.screenHeight())
})

var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        background: 'img/background.png',
        player: 'img/player.png',
        bullet: 'img/bullet.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        player_1: 'img/player/1.png',
        player_2: 'img/player/2.png',
        player_3: 'img/player/3.png',
        enemy1_1: 'img/enemy1/1.png',
        enemy1_2: 'img/enemy1/2.png',
        enemy1_3: 'img/enemy1/3.png',
        enemy1_4: 'img/enemy1/4.png',
        enemy2_1: 'img/enemy2/1.png',
        enemy2_2: 'img/enemy2/2.png',
        enemy2_3: 'img/enemy2/3.png',
        enemy2_4: 'img/enemy2/4.png',
        enemy3_1: 'img/enemy3/1.png',
        enemy3_2: 'img/enemy3/2.png',
        enemy3_3: 'img/enemy3/3.png',
        enemy3_4: 'img/enemy3/4.png',
        enemy3_5: 'img/enemy3/5.png',
        enemy3_6: 'img/enemy3/6.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = Scene.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()

class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.elements = [] 
        this.enemys = []
        this.setup()
        this.enemys_cool_down = 70
        this.max_enemys = 7
    }
    setup() {
        let background = Background.new(this.game,'background')
        let player = Player.new(this.game,'player')
        this.addElements(background)
        this.addElements(player)

        this.game.registerAction('a', function(){
            player.moveLeft()
        })
        this.game.registerAction('d', function(){
            player.moveRight()
        })
        this.game.registerAction('w', function(){
            player.moveUp()
        })
        this.game.registerAction('s', function(){
            player.moveDown()
        })
    }
    addEnemy() {
        if (this.enemys.length < 7) {
            let enemy_name = 'enemy'+getRandomX(1,3)
            let enemy = Enemys.new(this.game,enemy_name)
            this.enemys.push(enemy)
        }
    }
    addElements(element) {
        this.elements.push(element)
    }
    updateElements() {
        for(e of this.elements){
            if (e instanceof Player) {
                e.update(this.enemys)
                if (!e.existed()) {
                    this.gameover()
                }
            }else{
                e.update()
            }
        }
    }
    updateEnemys() {
        if (this.enemys_cool_down === 0) {
            this.addEnemy()
            this.enemys_cool_down = 5 
        }else{
            this.enemys_cool_down--
        }
        for(var i in this.enemys){
            this.enemys[i].update()
            if (this.enemys[i].texture.y > 568 || !this.enemys[i].existed()) {
                this.enemys.splice(i,1)
            }
        }
    }
    update() {
        this.updateElements()
        this.updateEnemys()
    }
    drawElements() {
        for(e of this.elements){
            e.draw()
        }
    }
    drawEnemys() {
        for(e of this.enemys){
            e.draw()
        }   
    }
    draw() {
        this.drawElements()
        this.drawEnemys()
    }
    gameover() {
        var end = SceneEnd.new(this.game)
        this.game.replaceScene(end)
    }
}
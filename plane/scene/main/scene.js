class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.elements = [] 
        this.setup()
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
    addElements(element) {
        this.elements.push(element)
    }
    update() {
        for(e of this.elements){
            e.update()
        }
    }
    draw() {
        for(e of this.elements){
            e.draw()
        }
    }
}
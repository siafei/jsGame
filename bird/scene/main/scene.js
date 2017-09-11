class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.elements = [] 
        this.setup()
        this.pipe_cool_down = 150
    }
    setup() {
        let sky = Sky.new(this.game,'sky')
        this.addElements(sky)
        let lands = Lands.new(this.game,'land')
        this.addElements(lands)
        let pipe = Pipe.new(this.game,'pipe')
        this.addElements(pipe)
        let bird = Bird.new(this.game,'bird')
        this.addElements(bird)
        this.game.registerAction('f', function(){
            bird.moveUp()
        })
    }
    addPipe() {
        if (this.pipe_cool_down === 0) {
            let pipe = Pipe.new(this.game,'pipe')
            this.addElements(pipe)
            this.pipe_cool_down = 150
        }else{
            this.pipe_cool_down--
        }

    }
    addElements(element) {
        this.elements.push(element)
    }
    updateElements() {
        for(e of this.elements){
            e.update()
        }
    }
    update() {
        this.addPipe()
        this.updateElements()
    }
    drawElements() {
        for(e of this.elements){
            e.draw()
        }
    }
    draw() {
        this.drawElements()
    }
    gameover() {
        var end = SceneEnd.new(this.game)
        this.game.replaceScene(end)
    }
}
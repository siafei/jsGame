class GuaImage {
	constructor(game,name){
		this.game = game
		this.texture = game.imageByName(name)
        this.texture.x = 0 
        this.texture.y = 0 
	}
    static new(game,name) {
        var i = new this(game,name)
        return i
    }
    draw() {
    	this.game.drawImage(this.texture)
    }
    update() {
    	
    }
}
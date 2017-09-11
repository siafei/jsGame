class Pipe extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.texture.x = 800+this.texture.w
		this.y = - getRandomX(0,290)
		this.speed = 2
	}

	update(enemys) {
		this.texture.x -= this.speed
	}

	draw() {
		this.texture.angle = 180
		this.texture.y = this.y
		this.game.drawImage(this.texture)
		this.texture.y = 420+this.y+90
		this.texture.angle = 0
		this.game.drawImage(this.texture)
	}
}
class Bullet extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.speed = 15
	}
	update() {
		this.texture.y -= this.speed
	}
}
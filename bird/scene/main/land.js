class Land extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.texture.y = 500
		this.speed = 2 
	}

	update() {
		if (this.texture.x < -this.texture.w) {
			this.texture.x = 956
		}else{
			this.texture.x -= this.speed
		}
	}
}
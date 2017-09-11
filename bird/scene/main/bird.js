class Bird extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.texture.x = 150
		this.texture.y = 300
		this.up_angle = -45
		this.down_angle = 45
		this.speed = 2
		this.status = 'down'
		this.coll_down = 20
	}

	moveUp(){
		if (this.status === 'down') {
			this.texture.angle = this.up_angle
			this.status = 'up'
		}
	}

	update(enemys) {
		if (this.status === 'down') {
			this.texture.angle = this.down_angle
			this.texture.y += this.speed
		}else if(this.status === 'up') {
			this.texture.y -= this.speed
			this.coll_down --
			if (this.coll_down === 0) {
				this.status = 'down'
				this.coll_down = 20 
			}
		}
		if (this.texture.y > 600-this.texture.h-100) {
			this.texture.y = 600-this.texture.h-100
		}
	}

	draw() {
		this.game.drawImage(this.texture)
	}
}
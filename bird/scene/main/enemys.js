class Enemys extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.texture.x = getRandomX(0,320-this.texture.w) 
		this.texture.y = getRandomX(-200,0)

		this.speed = this.getSpeed(name)
	}
	getSpeed(name){
		switch(name){
			case 'enemy1':
				this.live = 1 
				this.boom = 4
				return 5
			case 'enemy2':
				this.live = 2
				this.boom = 4
			    return 3
			case 'enemy3':
				this.live = 5
				this.boom = 6
				return 2
		}
	}
	update() {
		if (this.alive()) {
			this.texture.y += this.speed
		}else if(this.boom>0) {
			this.image_count--
			if (this.image_count === 0) {
				name = this.name+'_'+this.boom
				let new_img = this.game.imageByName(name)
				this.texture.image = new_img.image
				this.boom--
				this.image_count = 3
			}
		}
	}
	hit() {
		if (this.live > 0) {
			this.live--
		}
	}
}
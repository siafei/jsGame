class Bullet extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.speed = 15
	}
	update() {
		this.texture.y -= this.speed
	}
	hit(enemys) {
		for(e of enemys){
			if (e.alive()) {
				if (e.texture.x<this.texture.x && this.texture.x < (e.texture.x+e.texture.w)) {
					if (this.texture.y < (e.texture.y+e.texture.h) && this.texture.y>e.texture.y) {
						e.hit()
						return true 
					}
				}
			}
		}
		return false
	}
}
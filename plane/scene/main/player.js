class Player extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.texture.x = 150
		this.texture.y = 400
		this.speed = 10
		this.cool_down = 5
		this.bullets = []
	}
	moveLeft() {
		this.texture.x -= this.speed
	}
	moveRight() {
		this.texture.x += this.speed
	}
	moveUp() {
		this.texture.y -= this.speed
	}
	moveDown() {
		this.texture.y += this.speed
	}
	update() {
		this.bounaryCheck()
		//子弹更新
		if (this.cool_down === 0) {
			this.fire()
			this.cool_down = 5
		}else{
			this.cool_down--
		}
		for(var i in  this.bullets){
			this.bullets[i].update()
			if (this.bullets[i].texture.y < 0) {
				this.bullets.splice(i,1)
			}
		}
	}
	bounaryCheck() {
		if (this.texture.x < 0 ) {
			this.texture.x = 0 
		}else if (this.texture.x > (320-this.texture.w) ) {
			this.texture.x = 320-this.texture.w
		}
		if (this.texture.y < 0 ) {
			this.texture.y = 0 
		}else if (this.texture.y > (568-this.texture.h) ) {
			this.texture.y = 568-this.texture.h
		}
	}
	fire() {
		let bullet = Bullet.new(this.game,'bullet')
		bullet.texture.x = this.texture.x + (this.texture.w/2)
		bullet.texture.y = this.texture.y
		this.bullets.push(bullet)
	}
	draw() {
		this.game.drawImage(this.texture)
		for(e of this.bullets){
			e.draw()
		}
	}
}
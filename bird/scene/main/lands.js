class Lands extends GuaImage {
	constructor(game,name) {
		super(game,name)
		this.lands = []
		this.setup()
	}

	setup() {
		for(let i =0 ; i<31 ; i++){
			let land = Land.new(this.game,'land')
			land.texture.x = i*32
			this.lands.push(land)
		}
	}
	update() {
		for (e of this.lands) {
			e.update()
		}
	}
	draw() {
		for (e of this.lands) {
			e.draw()
		}
	}
}
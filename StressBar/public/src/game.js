Game = {
	// tiles' height and width 
	map_grid: {
		width:  15,
		height: 10,
		tile: {
			width:  40,
			height: 40
		}
	},
 
	// The total width of the game screen. Since our grid takes up the entire screen
	//  this is just the width of a tile times the width of the grid
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},
 
	// The total height of the game screen. Since our grid takes up the entire screen
	//  this is just the height of a tile times the height of the grid
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	},
 
	start: function() {
		Crafty.init(Game.width(), Game.height());
	//	Crafty.background('rgb(87, 109, 20)' );
		
		// Simply start the "Loading" scene to get things going
		Crafty.scene('Loading');
	}
};
 
$text_css = { 'size': '24px', 'family': 'Arial', 'color': 'red', 'text-align': 'center' };
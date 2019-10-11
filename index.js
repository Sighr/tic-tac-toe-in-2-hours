
const players = [1, 2];
const max_players = players.length;
let current_player = 0;

class Game {
	constructor(num, cell_size) {
		this.cell_size = cell_size;
		this.num = num;
		this.cells = [];
		for(let i = 0; i < num; ++i) {
			this.cells.push([]);
			for(let j = 0; j < num; ++j) {
				this.cells[i].push(new Cell(i*cell_size, j*cell_size, ' '));
			}
		}
	}

	render(id) {
		let elements = document.getElementsByClassName('hideable');
		for(let i = 0; i < elements.length; ++i)
		{
			elements[i].parentNode.removeChild(elements[i]);
		}
		console.log(this.cells);
		const parent = document.getElementById(id);
		parent.style = `width:${this.num*(this.cell_size+5)}; height:${this.num*(this.cell_size+5)};`;
		for(let i = 0; i < this.num; ++i) {
			for(let j = 0; j < this.num; ++j) {
				this.cells[i][j].render(parent);
			}
		}
		//
	}
}

class Cell {
	constructor(x, y, sym) {
		this.symbol = sym;
		this.x = x;
		this.y = y;
		this.el = document.createElement('div');
		const listener = (event) => {
			this.symbol = current_player === 1 ? 'X' : 'O';
			// draw some shit based on this.symbol
			this.el.removeEventListener('click', listener);
			this.el.innerText = this.symbol; // REWRITE THIS
			current_player = current_player + 1;
			current_player = current_player % max_players;
		};
		this.el.addEventListener('click', listener);
	}

	render(parent) {
		parent.appendChild(this.el);

	}
}
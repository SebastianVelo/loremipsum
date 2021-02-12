class Grid {
    constructor(id, col, offset, hidden) {
        this.id = id;
        this.col = col;
        this.offset = offset;
        this.hidden = hidden;
    }

    getCol() {
        return this.col ? `col-${this.id}-${this.col}` : "";
    }

    getOffset() {
        return this.offset ? `offset-${this.id}-${this.offset}` : "";
    }

    getHidden() {
        return this.hidden ? `hidden-${this.id}` : "";
    }

    getClass() {
        return `${this.getCol()} ${this.getOffset()} ${this.getHidden()} `;
    }
}
export default Grid;
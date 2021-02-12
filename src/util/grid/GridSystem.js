import Grid from "./Grid";

class GridSystem {
    constructor() {
        this.grids = [];
        this.childs = {};
    }

    add(id, col, offset, hidden) {
        this.grids.push(new Grid(id, col, offset, hidden));
    }
    
    addOnlyOffset(id, offset) {
        this.grids.push(new Grid(id, null, offset, null));
    }

    addHidden(id) {
        this.grids.push(new Grid(id, null, null, true));
    }

    addChild(id, gs) {
        this.childs[`${id}`] = gs;
    }

    getClass() {
        return this.grids.map(grid => grid.getClass()).join(' ');
    }

}
export default GridSystem;
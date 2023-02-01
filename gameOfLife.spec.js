import { gameofLife, countFrequency } from "./gameofLife";
describe('gameOfLife', function() {
    it('Any live cell with fewer than two live neighbours dies as if by under population', function() {
        expect(gameofLife(0)).toBe(false);
    });
    // can't implement as each cell has only three neighbours
    // it('Any live cell with more than three live neighbours dies, as if by overcrowding', function() {
    //     expect(gameofLife()).toBe(false);
    // });
    it('Any live cell with two live neighbours lives on to the next generation', function() {
        expect(gameofLife(4)).toBe(true);
    });
    it('Any live cell with three live neighbours lives on to the next generation', function() {
        expect(gameofLife(5)).toBe(true);
    });
    it('Any dead cell with exactly three live neighbours becomes a live cell', function() {
        expect(gameofLife(1)).toBe(true);
    });
});








const program = require('../hs');

it("should return 3 when we pass 2 as an argument", function () {
    expect(program.Sum1toN(2)).toEqual(3);
});
it("should return 6 when we pass 3 as an argument", function () {
    expect(program.Sum1toN(3)).toEqual(6);
});
it("should return 10 when we pass 4 as an argument", function () {
    expect(program.Sum1toN(4)).toEqual(10);
});
it("Should return 1 when we pass 1 as an argument", function () {
    expect(program.Sum1toN(1)).toEqual(1);
});


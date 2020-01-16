//Imports
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
const { flatten } = require("./index");

describe("Flatten Array Stack", () => {
  it("2D Simple Case", () => {
    const input = [1, 2, [3, 4, 5], 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flatten(input)).to.deep.equalInAnyOrder(expected);
  });
  it("2D Hard Case", () => {
    const input = [[1], [2], [3], [4], [5], [6]];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flatten(input)).to.deep.equalInAnyOrder(expected);
  });
  it("3D Simple Case", () => {
    const input = [1, 2, [3, [4], 5], 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flatten(input)).to.deep.equalInAnyOrder(expected);
  });
  it("3D Hard Case", () => {
    const input = [1, [2, [3]], 4, 5, [[6]]];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flatten(input)).to.deep.equalInAnyOrder(expected);
  });
  it("Madness", () => {
    const input = [
      [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [
                          [
                            [
                              [
                                [
                                  [
                                    [
                                      [
                                        [
                                          [
                                            [
                                              [
                                                [
                                                  [
                                                    1,
                                                    [2, [3]],
                                                    [[[[[[4]]]]]],
                                                    [[[5]]],
                                                    [[6]]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flatten(input)).to.deep.equalInAnyOrder(expected);
  });
});

import toUpperCase from './to_upper_case';

describe('toUpperCase', () => {

  it('should transform strings to camelCase equivalents', () => {
    expect(toUpperCase('one_two_three')).to.equal('oneTwoThree');
    expect(toUpperCase('two_three_four', '_', true)).to.equal('TwoThreeFour');
    expect(toUpperCase('threeFour_five')).to.equal('threeFourFive');
    expect(toUpperCase('four_fiveSix')).to.equal('fourFiveSix');
    expect(toUpperCase('FiveSixSeven')).to.equal('fiveSixSeven');

    expect(toUpperCase('one.two.three', '.')).to.equal('oneTwoThree');
  });

});

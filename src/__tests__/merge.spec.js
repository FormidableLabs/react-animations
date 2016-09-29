import merge from '../merge';

test('merge', () => {
  it('should merge two animations', () => {
    const primary = {
      '52%': {
        transform: 'translateX(50px)'
      }
    };
    const secondary = {
      '53.5%': {
        transform: 'translateY(100px)'
      }
    };
    expect(merge(primary, secondary)).toEqual({
      '50%': {
        transform: 'translateX(50px) translateY(100px)'
      }
    });
  });
});

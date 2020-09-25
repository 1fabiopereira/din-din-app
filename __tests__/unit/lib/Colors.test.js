/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import Colors from '~/lib/Colors';

describe('Colors Lib', () => {
  it('Should be return colors hexadecimal code', () => {
    expect(Colors.Mantis).toBe('#8dd070');
    expect(Colors.DoveGray).toBe('#666666');
  });

  it('Should be return undefined', () => {
    expect(Colors.NotFound).toBe(undefined);
  });
});

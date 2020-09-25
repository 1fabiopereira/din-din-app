/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {translate} from '~/lib/I18n';

describe('I18n Lib', () => {
  it('Should be return string in PT-BR to key', () => {
    expect(translate('add-transaction')).toBe('Nova transação');
    expect(translate('in')).toBe('Receita');
  });

  it('Should be return missing message', () => {
    expect(translate('empty')).toBe('[missing "pt_BR.empty" translation]');
    expect(translate('another')).toBe('[missing "pt_BR.another" translation]');
  });
});

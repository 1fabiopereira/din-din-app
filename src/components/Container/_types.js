/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import type {Node} from 'react';

export type ContainerProps = {
  bar?: Node,
  children?: Node | Array<Node>,
  color?: string,
  padding?: number,
};

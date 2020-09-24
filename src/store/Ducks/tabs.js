/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import produce from 'immer';
import Colors from '~/lib/Colors';

// Action Types for the user reducer
export const Types = {
  CHANGE: '@tabs/CHANGE',
};

// Action Creators
export const ActionCreators = {
  change: (current: number, color: string | number = Colors.White): any => ({
    payload: {color, current},
    type: Types.CHANGE,
  }),
};

// initial values
const initialState = {
  color: Colors.White,
  current: 1,
};

export default function (state: any = initialState, action: any): any {
  switch (action.type) {
    case Types.CHANGE: {
      return produce(state, (draft) => {
        draft.current =
          action &&
          action.payload &&
          Object.hasOwnProperty.call(action.payload, 'current') &&
          typeof action.payload.current === 'number'
            ? action.payload.current
            : state.current;

        draft.color =
          action &&
          action.payload &&
          Object.hasOwnProperty.call(action.payload, 'color') &&
          typeof action.payload.color === 'string'
            ? action.payload.color
            : state.color;
      });
    }

    default: {
      return state;
    }
  }
}

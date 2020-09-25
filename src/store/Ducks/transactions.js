/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import produce from 'immer';

// Action Types for the user reducer
export const Types = {
  ADD: '@transaction/ADD',
  DELETE: '@transaction/DELETE',
};

// Action Creators
export const ActionCreators = {
  add: (transaction: Object): any => ({
    payload: {transaction},
    type: Types.ADD,
  }),

  delete: (date: string): any => ({
    payload: {date},
    type: Types.DELETE,
  }),
};

// initial values
const initialState = {
  transactions: [],
};

export default function (state: any = initialState, action: any): any {
  switch (action.type) {
    case Types.ADD: {
      return produce(state, (draft) => {
        draft.transactions =
          action &&
          action.payload &&
          Object.hasOwnProperty.call(action.payload, 'transaction')
            ? [action.payload.transaction, ...state.transactions]
            : state.transactions;
      });
    }

    case Types.DELETE: {
      return produce(state, (draft) => {
        draft.transactions =
          action &&
          action.payload &&
          Object.hasOwnProperty.call(action.payload, 'date')
            ? [...state.transactions].filter(
                (value) => value.date !== action.payload.date,
              )
            : state.transactions;
      });
    }

    default: {
      return state;
    }
  }
}

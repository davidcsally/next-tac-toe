import {
  current,
  createSlice,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

import checkWin from './checkWin';

// store slice
export const turnSlice = createSlice({
  name: 'currentTurn',
  initialState: {
    value: 'x',
  },
  reducers: {
    flipTurn: (state) => {
      if (state.value === 'x') state.value = 'o';
      else state.value = 'x';
    },
  },
});

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    value: ['', '', '', '', '', '', '', '', ''],
  },
  reducers: {
    markSpace: (state, action) => {
      const { payload } = action;
      state.value[payload.index] = payload.turn;

      // check for win
      // need to use `current` from immer to read new state
      console.log(checkWin(current(state.value)));
    },
  },
});

// actions
export const { flipTurn } = turnSlice.actions;
export const { markSpace } = boardSlice.actions;

// selectors
export const currentTurnSelector = (state) => state.turn.value;
export const boardSelector = (state) => state.board.value;

export default configureStore({
  reducer: combineReducers({
    turn: turnSlice.reducer,
    board: boardSlice.reducer,
  }),
});

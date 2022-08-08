import { createStore } from 'redux';

const LOAD = 'LOAD';
const UPDATE = 'UPDATE';
const CREATE = 'CREATE';
const SET_VIEW = 'SET_VIEW';

const initialState = {
  groceries: [],
  view: '',
};
const store = createStore((state = initialState, action) => {
  if (action.type === LOAD) {
    state = { ...state, groceries: action.groceries };
  }
  if (action.type === UPDATE) {
    state = {
      ...state,
      groceries: state.groceries.map((grocery) =>
        grocery.id === action.grocery.id ? action.grocery : grocery
      ),
    };
  }
  if (action.type === CREATE) {
    state = { ...state, groceries: [...state.groceries, action.grocery] };
  }
  if (action.type === SET_VIEW) {
    state = { ...state, view: action.view };
  }
  return state;
});

const load = (groceries) => {
  return {
    type: 'LOAD',
    groceries,
  };
};

const update = (grocery) => {
  return {
    type: 'UPDATE',
    grocery,
  };
};

const createGrocery = (grocery) => {
  return {
    type: 'CREATE',
    grocery,
  };
};

const setView = (view) => {
  return {
    type: 'SET_VIEW',
    view,
  };
};

export default store;

export { load, update, createGrocery, setView };

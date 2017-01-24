
import { TABS_ADD_TAB } from '../constants/tabs'

const initialState = {
  items: [],
  selectedItemId: 0
};

export default function tabs (state = initialState, action) {

  switch (action.type) {
    case TABS_ADD_TAB:
      return { ...state, selectedItemId: action.payload };

    default:
      return state;
  }

}



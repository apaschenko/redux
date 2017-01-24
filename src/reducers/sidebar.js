
import { CLICK_ON_ITEM, SIDEBAR_TOGGLE } from '../constants/sidebar'

import _ from 'lodash'

const initialState = {};

export default function sidebar (state = initialState, action) {

  switch (action.type) {
    case SIDEBAR_TOGGLE:
      let newState = _.cloneDeep(state);
      newState['isPanelCollapsed'] = !newState['isPanelCollapsed'];
      console.log('value of isPanelCollapsed is '+ (newState['isPanelCollapsed']? 'true': 'false'));
      return newState;

    case CLICK_ON_ITEM:
      console.log('reducer ' + action.type + ': ' +action.payload);
      return { ...state, selectedItemId: action.payload };

    default:
      console.log('value of isPanelCollapsed has not been changed');
      return state;

  }

}


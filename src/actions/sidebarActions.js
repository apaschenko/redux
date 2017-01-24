
import { CLICK_ON_ITEM, SIDEBAR_TOGGLE } from '../constants/sidebar'

export function clickOnItem (index ) {

  return {
    type: CLICK_ON_ITEM,
    payload: index
  }

}

export function sidebarToggle () {
  return {
    type: SIDEBAR_TOGGLE
  }

}

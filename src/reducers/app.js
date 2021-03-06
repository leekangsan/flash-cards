/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { UPDATE_PAGE, UPDATE_OFFLINE,
         OPEN_SNACKBAR, CLOSE_SNACKBAR,
         SAVE_SHOW_ANSWER, SAVE_SHOW_SETTINGS, SAVE_SAY_SETTINGS } from '../actions/app.js';

const app = (state = {showSettings:'all', saySettings:'demand'}, action) => {
  let json, value;
  switch (action.type) {
    case UPDATE_PAGE:
      return Object.assign({}, state, {page: action.page});
      // return {
      //   ...state,
      //   page: action.page
      // };
    case UPDATE_OFFLINE:
      return Object.assign({}, state, {offline: action.offline});
      // return {
      //   ...state,
      //   offline: action.offline
      // };
    case OPEN_SNACKBAR:
      return Object.assign({}, state, {snackbarOpened: true});
      // return {
      //   ...state,
      //   snackbarOpened: true
      // };
    case CLOSE_SNACKBAR:
      return Object.assign({}, state, {snackbarOpened: false});
      // return {
      //   ...state,
      //   snackbarOpened: false
      // };
    case SAVE_SHOW_ANSWER:
      return Object.assign({}, state, {showAnswer: action.shouldShow});
      // return {
      //   ...state,
      //   showAnswer: action.shouldShow
      // };
    case SAVE_SHOW_SETTINGS:
      let showSettings = action.showSettings;
      // If we saved a garbage value (from an old version of the app), reset.
      if (showSettings !== 'onlyNew' && showSettings !== 'all' &&
          showSettings !== 'mostlyRight' && showSettings !== 'mostlyWrong') {
        showSettings = 'all';
      }
      return Object.assign({}, state, {showSettings:showSettings});
      // return {
      //   ...state,
      //   showSettings
      // };
    case SAVE_SAY_SETTINGS:
      let saySettings = action.saySettings;
      // If we saved a garbage value (from an old version of the app), reset.
      if (saySettings !== 'demand' && saySettings !== 'start' &&
          saySettings !== 'end') {
        saySettings = 'demand';
      }
      return Object.assign({}, state, {saySettings:saySettings});
      // return {
      //   ...state,
      //   saySettings
      // };
    default:
      return state;
  }
}

export default app;

'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AnimalConstants from '../constants/AnimalConstants';

const ActionTypes = AnimalConstants.ActionTypes;

let AnimalActions = {

  receiveAll: function(rawAnimals) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_MESSAGES,
      rawAnimals: rawAnimals
    });
  },

  createAnimal: function(text) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_ANIMAL,
      text: text
    });
  }

};

module.exports = AnimalActions;

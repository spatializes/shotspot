'use strict';

import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AnimalConstants from '../constants/AnimalConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';
const ActionTypes = AnimalConstants.ActionTypes;

let _state = {
  animals: []
};

function _persistAnimalData(rawAnimals) {
  rawAnimals.forEach(function(animal) {
    _state.animals[animal.id] = animal;
  });
}

var AnimalStore = assign({}, EventEmitter.prototype, {

  getStateFromStores: function() {
    return _state;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AnimalStore.appDispatch = AppDispatcher.register(function(action) {

  switch (action.type) {
    case ActionTypes.RECEIVE_RAW_MESSAGES:
      _persistAnimalData(action.rawAnimals);
      break;
    case ActionTypes.CREATE_ANIMAL:
      const newAnimal = {
        name: action.text.name,
        location: action.text.location
      };
      _state.animals.push(newAnimal);
      break;
    default:
      return true;
  }
  AnimalStore.emitChange();
  return true;

});

module.exports = AnimalStore;

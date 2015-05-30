'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AnimalConstants = require('../constants/AnimalConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var ActionTypes = AnimalConstants.ActionTypes;

var _state = {
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
      console.log(action);
      const newAnimal = {
        name: action.text.name,
        location: action.text.location
      };
      console.log(newAnimal);
      _state.animals.push(newAnimal);
      break;
    default:
      return true;
  }
  AnimalStore.emitChange();
  return true;

});

module.exports = AnimalStore;

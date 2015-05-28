var AppDispatcher = require('../dispatcher/AppDispatcher');
var AnimalConstants = require('../constants/AnimalConstants');

var ActionTypes = AnimalConstants.ActionTypes;

var AnimalActions = {

  receiveAll: function(rawAnimals) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_MESSAGES,
      rawAnimals: rawAnimals
    });
  }

};

module.exports = AnimalActions;

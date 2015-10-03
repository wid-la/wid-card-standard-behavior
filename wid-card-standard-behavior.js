/**
   * Use `Polymer.WidCardStandardBehavior` to implement a base card that can be used in a `wid-cards-grid` element.
   * @polymerBehavior 
   */
'use strict';

Polymer.WidCardStandardBehavior = {

  properties: {
    /**
    * Constant values defined in the dashboard config
    * @type {{value: String; key: String; type?: String}[]}
    */
    constants: {
      type: Array,
      value: function value() {
        return [];
      }
    }

  },

  observers: ['_constantsChanged(constants)'],

  /**
   * Each time the constants change, we reassign the values.
   * @param  {{value: String}[]} 
   */
  _constantsChanged: function _constantsChanged(constants) {
    for (var i = 0; i < constants.length; i++) {
      this[constants[i].key] = constants[i].value;
    }
  }

};
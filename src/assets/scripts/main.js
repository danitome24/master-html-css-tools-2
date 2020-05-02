/**
 * Import dependencies from node_modules
 * see commented examples below
 */
var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery");
require('bootstrap');
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');
} )();

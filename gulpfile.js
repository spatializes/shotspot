/* gulpfile.js 

   add tasks to gulp/tasks to be auto included
   see gulp/tasks/default.js for default tasks
   when 'gulp' is run

*/

var requireDir = require('require-dir');


// Require all in gulp/tasks
requireDir('./gulp/tasks', {recurse: true});


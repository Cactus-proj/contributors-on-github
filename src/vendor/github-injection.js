// https://github.com/OctoLinker/injection/blob/7f7a8e40ed45f824de890acd7f1eb37c0e1799a8/index.js
//  v1.1.0 (2022-07-13)
'use strict';

const gitHubInjection = cb => {
  if (!cb) {
    throw new Error('Missing argument callback');
  }

  if (typeof cb !== 'function') {
    throw new TypeError('Callback is not a function');
  }

  document.addEventListener('pjax:end', cb);
  document.addEventListener('turbo:render', cb);
  cb();
};

// Export the gitHubInjection function for **Node.js**
// Otherwise leave it as a global
if (typeof exports !== 'undefined') {
  module.exports = gitHubInjection;
  exports = module.exports;
}

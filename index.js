module.exports = Storage;

function Storage(namespace) {
  this.namespace = namespace;
  this.checkSupport();
}

Storage.prototype.load = function() {
  var str = localStorage.getItem(this.namespace);
  return str ? JSON.parse(str) : null;
};

Storage.prototype.save = function(value) {
  var str = JSON.stringify(value);
  localStorage.setItem(this.namespace, str);
};

Storage.prototype.checkSupport = function() {
  if (!('localStorage' in window)) {
    throw Error('no localStorage support');
  }

  if (!('JSON' in window)) {
    throw Error('no JSON support');
  }
};

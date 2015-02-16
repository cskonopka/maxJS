(function() {

  module.exports = function(Reddit) {
    Reddit.prototype.block = function(thingId, modhash, callback) {
      var options, params;
      options = {
        id: thingId,
        uh: modhash
      };
      params = Object.keys(options);
      return this._post('/api/block', options, params, function(error, res) {
        if (error != null) {
          return callback(error);
        }
        return callback();
      });
    };
    Reddit.prototype.compose = function(captchaResponse, captchaId, subject, message, to, modhash, callback) {
      var options, params;
      options = {
        captcha: captchaResponse,
        iden: captchaId,
        subject: subject,
        text: message,
        to: to,
        uh: modhash
      };
      params = Object.keys(options);
      return this._post('/api/block', options, params, function(error, res) {
        if (error != null) {
          return callback(error);
        }
        return callback();
      });
    };
    Reddit.prototype.readMessage = function(thingId, modhash) {
      var options, params;
      options = {
        id: thingId,
        uh: modhash
      };
      params = Object.keys(options);
      return this._post('/api/read_message', options, params, function(error, res) {
        if (error != null) {
          return callback(error);
        }
        return callback();
      });
    };
    Reddit.prototype.unreadMessage = function(thingId, modhash) {
      var options, params;
      options = {
        id: thingId,
        uh: modhash
      };
      params = Object.keys(options);
      return this._post('/api/unread_message', options, params, function(error, res) {
        if (error != null) {
          return callback(error);
        }
        return callback();
      });
    };
    return Reddit.prototype.messages = function(type, options, callback) {
      if (typeof type === 'function') {
        callback = type;
        options = {};
        type = 'inbox';
      }
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      return this._get("/message/" + type + ".json", options, function(error, res) {
        var _ref;
        if (error != null) {
          return callback(error);
        }
        return callback(null, (_ref = res.body.data) != null ? _ref.children : void 0);
      });
    };
  };

}).call(this);

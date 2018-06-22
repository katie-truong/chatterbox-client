var app = {};

app.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';

app.init = function() {
  this.fetch();
};

app.fetch = function() {
  $.ajax({
    url: this.server,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log(data.results);
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

//   endpoint: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//   init: function(){},
//   send: function(){},
//   fetch: function(){},
//   clearMessages: function(){},
//   renderMessage: function(){},
//   addRoom: function(){},
//   renderRoom: function(){},
//   handleUsernameClick: function(){},
//   handleSubmit: function(){},
//   messages: []

$(document).ready(function() {
  app.init();
});


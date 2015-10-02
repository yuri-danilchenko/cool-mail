window.onload = function () {

  // Enable pusher logging - don't include this in production
  Pusher.log = function(message) {
    if (window.console && window.console.log) {
      window.console.log(message);
    }
  };

  var pusher = new Pusher('59d673b34f1d8deb6f63', { disableStats: true }, {
    encrypted: true
  });
  
  var channel = pusher.subscribe('my_channel');
  channel.bind('my_event', function(data) {
    document.querySelector('#results').innerHTML = data.message;
  });

};
// Class defines game rules
Control = {
  socket: io(),

  // Initialize UI and configure player
  init: function() {
    // Bind events to elements in UI and keyboard
    this.bindEvents();
  },

  emitDirection: function(event) {
    Control.socket.emit('move player', this.id);
    event.preventDefault();
  },

  move: function(event) {
    var keyName = event.key;

    if (keyName == 'ArrowLeft') {
      Control.socket.emit('move player', 'left');
    }

    if (keyName == 'ArrowRight') {
      Control.socket.emit('move player', 'right');
    }

    if (keyName == 'ArrowUp') {
      Control.socket.emit('move player', 'up');
    }

    if (keyName == 'ArrowDown') {
      Control.socket.emit('move player', 'down');
    }

  },

  bindEvents: function() {
    document.addEventListener('keydown', this.move );
    var btnDirection = document.getElementsByClassName('btnDirection');
    for (var i = 0; i < btnDirection.length; i++) {
      btnDirection[i].addEventListener('click', this.emitDirection);
    }
  }
}

window.onload = function() {
  Control.init();
}

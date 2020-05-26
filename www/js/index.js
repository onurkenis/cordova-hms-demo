var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function () {
    addLog('Device is Ready');
    // Initialize LocationKit
    HMSLocationKit.init();
    HMSFusedLocation.init();
    getLocationPermission();
    
    this.receivedEvent('deviceready');
    addListeners();
  },

  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
};

app.initialize();

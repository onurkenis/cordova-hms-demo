addLog('Running addListeners...');

// Analytics
document.querySelector('#onEvent').addEventListener(
  'click',
  () => {
    onEvent();
  },
  false,
);

// Push
document.querySelector('#getAAID').addEventListener(
  'click',
  () => {
    addLog('getAAID', '-button clicked');
    getAAID();
  },
  false,
);

document.querySelector('#getToken').addEventListener(
  'click',
  () => {
    addLog('getToken', '-button clicked');
    getToken();
  },
  false,
);

document.querySelector('#subscribe').addEventListener(
  'click',
  () => {
    addLog('subscribe', '-button clicked');
    subscribe('testTopic');
  },
  false,
);

document.querySelector('#unsubscribe').addEventListener(
  'click',
  () => {
    addLog('unsubscribe', '-button clicked');
    unsubscribe('testTopic');
  },
  false,
);

// Location

document.querySelector('#getLastLocation').addEventListener(
  'click',
  () => {
   getLastLocation();
  },
  false,
);

addLog('addListeners Done !');

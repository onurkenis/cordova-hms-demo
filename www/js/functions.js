// Analytics
function onEvent() {
  var name = 'event_name';
  var value = {
    my_event_key: 'my_event_value',
  };

  HMSAnalytics.onEvent(name, value, defaultSuccessCallback, defaultErrorCallback);
}

// Push
function getToken() {
  try {
    HMSPush.getToken('getToken', defaultSuccessCallback, defaultErrorCallback);
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function subscribe(topic) {
  try {
    HMSPush.subscribe(topic, defaultSuccessCallback, defaultErrorCallback);
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function unsubscribe(topic) {
  try {
    HMSPush.unsubscribe(topic, defaultSuccessCallback, defaultErrorCallback);
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

function getAAID() {
  try {
    HMSPush.getAAID('getAAID', defaultSuccessCallback, defaultErrorCallback);
  } catch (e) {
    defaultExceptionCallback(e);
  }
}

// Location
async function getLocationPermission() {
  const { hasPermission } = await HMSFusedLocation.hasPermission();
  addLog(`HasLocationPermission: ${hasPermission}`);
  if (!hasPermission) {
    addLog('Requesting Permission');
    const permissionResult = await HMSFusedLocation.requestPermission();
    addLog('Success: ', permissionResult);
  }
}

async function getLastLocation() {
  const lastLocation = await HMSFusedLocation.getLastLocation();
  addLog(JSON.stringify(lastLocation, null, 1));
}

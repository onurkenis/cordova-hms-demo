function clearLog() {
  let obj = document.querySelector('#logs');
  obj.innerText = '';
}

function addLog(tag, message) {
  let obj = document.querySelector('#logs');
  message = message === undefined ? '' : message;
  obj.innerText = tag + message + ' \n' + obj.innerText;
}

function defaultSuccessCallback(message) {
  addLog('Success: ', message);
  message = message === undefined ? '' : message;
  console.log(message);
  alert('Success: ' + message);
}
function defaultErrorCallback(message) {
  addLog('Error: ', message);
  message = message === undefined ? '' : message;
  console.log(message);
  alert('Error: ' + message);
}

function defaultExceptionCallback(message) {
  console.log(message);
  alert(JSON.stringify('<EXCEPTION> ' + message, '\n', 4));
}

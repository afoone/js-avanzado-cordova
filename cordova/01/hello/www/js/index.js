document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  console.log(navigator.camera)

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  document.getElementById('deviceready').classList.add('ready')
  window.takePicture = takePicture
}

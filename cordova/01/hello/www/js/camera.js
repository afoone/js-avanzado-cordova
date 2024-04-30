const onSuccess = function (stream) {
  const video = document.querySelector('video')
  video.srcObject = stream
  video.onloadedmetadata = function (e) {
    video.play()
  }
}

window.takePicture = () => {
  console.log('takePicture')
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 300,
    targetHeight: 300,
    saveToPhotoAlbum: false,
  })
}

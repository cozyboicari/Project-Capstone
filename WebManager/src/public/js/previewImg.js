function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader()

    reader.onload = function (e) {
      $('#img').attr('src', e.target.result)
    }

    reader.readAsDataURL(input.files[0])
  }
}

$('#upload').change(function () {
  readURL(this)
})
$('#btn-close').click(() => {
<<<<<<< HEAD
  $('#img').attr(
    'src',
    'https://firebasestorage.googleapis.com/v0/b/yourtour-c4d0f.appspot.com/o/default-image.jpg?alt=media&token=6907d130-31c7-4428-986b-b7c9a1690f2b',
  )
=======
  $('#img').attr('src', '')
>>>>>>> fb0cc0421877ff449f75d9dc1d1578e6560b8f46
  $('#upload').val('')
  $('#id-input').val('')
  $('#name-input').val('')
  $('#description-input').val('')
})
$('#btn-cancel').click(() => {
  $('#exampleModalCenter').modal('hide')
})

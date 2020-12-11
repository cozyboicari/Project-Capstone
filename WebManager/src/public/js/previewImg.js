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
  $('#img').attr(
    'src',
    'https://firebasestorage.googleapis.com/v0/b/yourtour-c4d0f.appspot.com/o/default_img.jpg?alt=media&token=024ea00b-ef9b-48eb-b04f-ff437a4c199a',
  )
  $('#upload').val('')
  $('#id-input').val('')
  $('#name-input').val('')
  $('#description-input').val('')
})
$('#btn-cancel').click(() => {
  $('#exampleModalCenter').modal('hide')
})

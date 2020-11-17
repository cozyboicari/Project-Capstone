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
  $('#img').attr('src', '')
  $('#upload').val('')
  $('#id-input').val('')
  $('#name-input').val('')
  $('#description-input').val('')
})
$('#btn-cancel').click(() => {
  $('#exampleModalCenter').modal('hide')
})

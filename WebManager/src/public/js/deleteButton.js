$(document).ready(() => {
  $('.delete').on('click', (event) => {
    const target = $(event.target)
    const url = target.attr('data-url')
    const confirmalert = confirm('Are you sure?')
    if (confirmalert) {
      $.ajax({
        type: 'DELETE',
        url,
      })
        .done(() => {
          // If successful
          target.closest('tr').css('background', 'tomato')
          target.closest('tr').fadeOut(800, () => {
            $(this).remove()
          })
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          // If fail
          console.log(textStatus + ': ' + errorThrown)
        })
    }
  })
})

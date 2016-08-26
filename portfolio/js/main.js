// Code source http://getbootstrap.com/javascript/#modals
$('#projectModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal

  var name = button.data('project-name');
  var gitLink = button.data('git-link');
  var thumbnailImg = button.data('thumbnail-img');
  var description = button.data('description');

  var modal = $(this);
  modal.find('.modal-title').text(name);
  modal.find('.modal-thumbnail').attr('src', thumbnailImg);
  modal.find('.modal-git-link').attr('href', gitLink).text(gitLink);
  modal.find('.modal-description').text(description);
})

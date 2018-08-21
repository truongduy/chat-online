var socket = io('https://nodejs-chat-online.herokuapp.com/');
$('.form-chat').submit(function() {
  var name = $('.current-name .name').text();
  socket.emit('chat message', $('.input-message').val(), name);
  $('.input-message').val('');
  return false;
});

if ($('.current-name .name').text() !== "") {
  $('.form-login-chat').hide();
  $('.current-name').show();
} else {
  $('.current-name').hide();
}

$('.current-name .logout').on('click', function() {
  $('.form-login-chat').show();
  $('.current-name .name').text('');
  $('.form-login-chat').submit();
});

socket.on('chat message', function (msg, name) {
  var fullName = $('.list-chat li').last().find('.name').text();
  var currentName = $('.current-name .name').text();
  var typeUser = 'sender';
  console.log(fullName);
  if(currentName) {
    if(currentName !== name) {
      typeUser = 'receiver';
    }

    var templateHtml = [
      '<li class="chat-item '+ typeUser +'">',
      '<div class="avatar">',
      '<img src="/images/doraemon.png">',
      '</div>',
      '<div class="content">',
      '<div class="name">',
      name,
      '</div>',
      '<div class="message-text">',
      '<p>',
      '<span>',
      msg,
      '</span>',
      '</p>',
      '</div>',
      '</div>',
      '</li>',
    ].join('');

    if (!fullName && currentName === name) {
      console.log(name,' : chưa có trong list');
      $('.list-chat').append(templateHtml);
    } else if (fullName === name) {
      if (msg) {
        console.log('name cuối đang chat');
        $('.list-chat li').last().find('.message-text').append('<p><span>' + msg + '</span></p>');
      }
    } else if (fullName !== name) {
      $('.list-chat').append(templateHtml);
    }
  }
});

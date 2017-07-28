function attachEvents() {
  let url = `https://messenger-a360c.firebaseio.com/messenger/.json`
  $('#submit').on('click', create);
  loadMessages();

  function loadMessages() {
    var req = {
      url,
      success: displayMessages
    }
    $.ajax(req)
  }

  function displayMessages(obj) {
    var text = '';
    for (let ob in obj) {
      text += `${obj[ob].author}: ${obj[ob].content}\n`;
    }
    $('#messages').text(text)
  }


  function create() {

    var message = {
      author: $('#author').val(),
      content: $('#content').val(),
      timespan: Date.now()
    }

    var req = {
      url,
      method: "POST",
      data: JSON.stringify(message)
    }

    $.ajax(req);
    loadMessages();
  }

}
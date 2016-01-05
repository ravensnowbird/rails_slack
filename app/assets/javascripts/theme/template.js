$(document).ready(function() {

  $(".messages_list").scrollTop($(".messages_list")[0].scrollHeight);
  $('.list-group-item.room_item').click(function() {
    if($(this).hasClass('active'))
      return false;
  });

  // MODAL FULLSCREEN
  $(".modal-fullscreen").on('show.bs.modal', function() {
    setTimeout(function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
  });
  $(".modal-fullscreen").on('hidden.bs.modal', function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });


  /*SEARCHING FOR CHANNELS */

  //setup before functions
  var typingTimer; //timer identifier
  var doneTypingInterval = 500; //time in ms, 5 second for example
  var $input = $('#search_channels');

  //on keyup, start the countdown
  $input.on('keyup', function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown
  $input.on('keydown', function() {
    clearTimeout(typingTimer);
  });

  //user is "finished typing," do something
  function doneTyping() {
    var query = $("#search_channels").val();
    var queryTerms = query.split(' ');

    var results = new Array();
    for(var i = 0; i < queryTerms.length; i++) {
        for(var j = 0; j < links.length; j++) {
            if (links[j].text.toLowerCase().indexOf(queryTerms[i].toLowerCase()) > -1) {
                results.push(links[j].element);
                }
        }
    }

    $(".channel_row").each(function(index, element) {
        this.style.display = 'none';
    });
    for(var i = 0; i < results.length; i++) {
        results[i].style.display = 'block';
    }
  }

  setChannelsForSearch();

  /*SEARCHING FOR CHANNELS */



  $(window).resize(function() {
    $('.col-footer:eq(0), .col-footer:eq(1)').css('height', '');
    var footerColHeight = Math.max($('.col-footer:eq(0)').height(), $('.col-footer:eq(1)').height()) + 'px';
    $('.col-footer:eq(0), .col-footer:eq(1)').css('height', footerColHeight);
  });
  $(window).resize();



  /* CHANNELS SHOW HIDE */
  $('.visible_check_box').click(function() {
    $(this).closest('form').submit();
  });

});

var links = new Array();
function setChannelsForSearch() {
  $(".channel_row").each(function(index, element) {
      links.push({
          text: $(this).text(),
          element: element
      });
  });
}

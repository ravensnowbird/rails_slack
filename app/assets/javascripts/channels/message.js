App.cable.subscriptions.create("MessageChannel", {
  connected: function(data) {
    console.log("connected")
  },
  received: function(data) {
    if(data["type"] == "new_message")
      new_message(data);
  }
});
function new_message(data) {
  if(parseInt($(".room_item.active").data("room-id")) == parseInt(data["room_id"]))
    $(".messages .messages_list").append(HandlebarsTemplates['messages/new'](data));
  else
    $(".room_item.room_" + data["room_id"]).find(".badge").text("1");
  $(".messages .messages_list").scrollTop($(".messages .messages_list")[0].scrollHeight);
}

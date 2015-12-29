class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
  end

  def unsubscribed

  end
end

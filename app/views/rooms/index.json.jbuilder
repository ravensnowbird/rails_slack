json.array!(@rooms) do |room|
  json.extract! room, :id, :name, :type
  json.url room_url(room, format: :json)
end

json.array!(@memberships) do |membership|
  json.extract! membership, :id
  json.url membership_url(membership, format: :json)
end

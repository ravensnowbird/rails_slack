class Room < ApplicationRecord

  has_many :messages
  has_many :memberships

  has_many :owners, -> { where(memberships: {status: "owner"})}, :source =>  :user , class_name: "User",  :through => :memberships
  has_many :members, :class_name => "User", :foreign_key => :user_id ,  :through => :memberships

  def owner
    owners.first
  end


end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :messages

  def room_membership(room)
    Membership.where(:user_id => self.id , :room_id => room.id).first_or_create
  end
end

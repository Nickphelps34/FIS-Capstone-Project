class User < ApplicationRecord

  has_many :decks
  has_secure_password

  validates :email, :name, :username, :password, presence: true
end


class User < ApplicationRecord

  has_many :decks
  has_secure_password

  validates :email, :name, :password, presence: true
end


class User < ApplicationRecord

  has_many :decks, :dependent => :destroy
  has_secure_password

  validates :email, :name, :username, :password, presence: true, on: :create
end


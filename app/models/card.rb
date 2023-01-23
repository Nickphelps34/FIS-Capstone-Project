class Card < ApplicationRecord

  has_many :collections
  has_many :decks, through: :collections
end

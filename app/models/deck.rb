class Deck < ApplicationRecord
  belongs_to :user

  has_many :collections
  has_many :cards, through: :collections

  def print_details
    puts "In print_details method -"
      return "#{self.user.name} uses the deck: #{self.deck_name} with the commander of #{self.deck_commander}."
  end


end

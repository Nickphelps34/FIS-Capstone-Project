class DeckSerializer < ActiveModel::Serializer
  attributes :id, :deck_name, :deck_color, :deck_commander, :details
  has_one :user
  has_many :cards

  def details
    self.object.print_details
  end

end

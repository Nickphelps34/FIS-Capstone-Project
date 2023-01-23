class DeckSerializer < ActiveModel::Serializer
  attributes :id, :deck_name, :deck_color, :deck_commander, :details
  has_one :user

  def details
    self.object.print_details
  end

end

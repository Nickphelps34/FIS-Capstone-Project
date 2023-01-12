class DeckSerializer < ActiveModel::Serializer
  attributes :id, :deck_name, :deck_color, :deck_commander
  has_one :user
end

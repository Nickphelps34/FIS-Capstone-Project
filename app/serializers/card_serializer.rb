class CardSerializer < ActiveModel::Serializer
  attributes :id, :card_type, :mana_value, :card_color, :card_name
end

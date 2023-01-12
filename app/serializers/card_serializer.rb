class CardSerializer < ActiveModel::Serializer
  attributes :id, :"card-type", :"mana-value", :"card-color", :"card-name"
end

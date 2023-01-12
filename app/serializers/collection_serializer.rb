class CollectionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :card
  has_one :deck
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "start seeding"

User.destroy_all
Card.destroy_all
Deck.destroy_all
Collection.destroy_all


puts "seeding Users"
u1 = User.create!(name: "Nick", username: "Nickphelps34", email: "Nickphelps34@gmail.com", "password_digest": "", "password": "7412")
u2 = User.create!(name: "Brian", username: "Ping99", email: "Testing@gmail.com", "password_digest": "", "password": "9362")

puts "seeding Cards"
c1 = Card.create!(card_type: "Creature", mana_value: 2, card_color: "Black", card_name: "Misery's Shadow" )
c2 = Card.create!(card_type: "Creature", mana_value: 4, card_color: "Black", card_name: "Sheoldred, the Apocalypse")
c3 = Card.create!(card_type: "Instant", mana_value: 5, card_color: "Black", card_name: "Ad Nauseam")
c4 = Card.create!(card_type: "Sorcery", mana_value: 4, card_color: "Black", card_name: "Damnation")
c5 = Card.create!(card_type: "Creature", mana_value: 2, card_color: "Black/Red", card_name: "Kroxa, Titan of Death's Hunger")
c6 = Card.create!(card_type: "Instant", mana_value: 1, card_color: "Black", card_name: "Thoughtseize")



puts "seeding Decks"
d1 = Deck.create!(deck_name: "Rakdos Midrange", deck_color: "Black/Red", deck_commander: "Kroxa, Titan of Death's Hunger", user_id:u1.id)


puts "Seeding done"

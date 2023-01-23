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
u3 = User.create!(name: "Nate", username: "NateDog1", email: "CarrotCake1@gmail.com", "password_digest": "", "password": "1234")
u4 = User.create!(name: "Jeff", username: "JefferyTod7", email: "JT313@gmail.com", "password_digest": "", "password": "1234")

puts "seeding Cards"
c1 = Card.create!(card_type: "Creature", mana_value: 2, card_color: "Black", card_name: "Misery's Shadow", commander: false )
c2 = Card.create!(card_type: "Creature", mana_value: 4, card_color: "Black", card_name: "Sheoldred, the Apocalypse", commander: false)
c3 = Card.create!(card_type: "Instant", mana_value: 5, card_color: "Black", card_name: "Ad Nauseam", commander: false)
c4 = Card.create!(card_type: "Sorcery", mana_value: 4, card_color: "Black", card_name: "Damnation", commander: false)
c5 = Card.create!(card_type: "Creature", mana_value: 2, card_color: "Black/Red", card_name: "Kroxa, Titan of Death's Hunger", commander: true)
c6 = Card.create!(card_type: "Instant", mana_value: 1, card_color: "Black", card_name: "Thoughtseize", commander: true)



puts "seeding Decks"
d1 = Deck.create!(deck_name: "Rakdos Midrange", deck_color: "Black/Red", deck_commander: "Kroxa, Titan of Death's Hunger", user_id:u1.id)
d2 = Deck.create!(deck_name: "Thopter Combo", deck_color: "Blue/White/Red/Black", deck_commander: "Breya, Etherium Shaper", user_id:u3.id)
d3 = Deck.create!(deck_name: "Blood-pod", deck_color:"White/Red/Black/Green", deck_commander: "Tana the Bloodsower/Tymna the Weaver", user_id:u2.id)
d4 = Deck.create!(deck_name: "Slugs", deck_color: "Blue/Black", deck_commander: "Toxrill the Corrosive", user_id:u4.id)


puts "Seeding done"

class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.string :deck_name
      t.string :deck_color
      t.string :deck_commander
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

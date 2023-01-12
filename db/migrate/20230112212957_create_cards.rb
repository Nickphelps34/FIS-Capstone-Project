class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :card_type
      t.integer :mana_value
      t.string :card_color
      t.string :card_name

      t.timestamps
    end
  end
end

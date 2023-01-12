class CreateCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :collections do |t|
      t.belongs_to :card, null: false, foreign_key: true
      t.belongs_to :deck, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.text :description
      t.integer :quality, null: false
      t.text :quality_desc
      t.integer :price, null: false
      t.string :location, null: false
      t.integer :category, null: false
      t.integer :sub_category

      t.timestamps
    end
  end
end

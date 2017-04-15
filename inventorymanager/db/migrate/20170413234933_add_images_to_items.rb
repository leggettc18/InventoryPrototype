class AddImagesToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :images, :string
  end
end

class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :image, null: false
      t.decimal :coordinates, array: true, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.integer :category_id

      t.timestamps
    end
  end
end

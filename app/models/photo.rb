class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :image_url, presence: true
  validates :user_id, presence: true
  validates :coordinates, presence: true
  validates :description, presence: true
end

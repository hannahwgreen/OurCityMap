class Photo < ApplicationRecord
  belongs_to :user

  mount_uploader :image, PhotoUploader

  validates :image, presence: true
  validates :user_id, presence: true
  validates :coordinates, presence: true
  validates :description, presence: true
end

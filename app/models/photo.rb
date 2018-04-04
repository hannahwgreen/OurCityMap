class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :comments

  mount_uploader :image, PhotoUploader

  validates :image, presence: true
  validates :user_id, presence: true
  validates :coordinates, presence: true
  validates :description, presence: true
end

class Photo < ApplicationRecord

  has_attached_file :file, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :file, content_type: /\Aimage\/.*\z/

  belongs_to :user


  validates :user_id, presence: true

  validates :description, presence: true
end

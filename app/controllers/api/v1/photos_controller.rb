class Api::V1::PhotosController < ApplicationController
  def index
    photos = Photo.order('created_at desc')
    render json: photos
  end

  def show
    photo = Photo.find(params[:id])
    date = DateTime.parse(photo.created_at.to_s)
    date = date.new_offset('-04:00')
    date = date.strftime('%m-%d-%Y %I:%M:%S %p')
    category = photo.category.name
    creator = photo.user.display_name
    render json: {
      photo: photo,
      category: category,
      date: date,
      creator: creator
    }
  end
end

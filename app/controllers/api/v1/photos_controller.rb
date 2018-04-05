class Api::V1::PhotosController < ApplicationController
  def index
    photos = Photo.all
    render json: photos
  end

  def show
    photo = Photo.find(params[:id])
    category = photo.category.name
    render json: {
      photo: photo,
      category: category
    }
  end
end

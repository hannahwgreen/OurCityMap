class Api::V1::PhotosController < ApplicationController
  def index
    photos = Photo.all
    render json: photos
  end

  def show
    photo = Photo.find(params[:id])

    render json: { photo: photo }
  end
end

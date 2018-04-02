class Api::V1::PhotosController < ApplicationController
  def index
    photos = Photo.all
    render json: photos
  end

  def create
    photo = Photo.new
  end
end

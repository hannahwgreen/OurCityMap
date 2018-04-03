class PhotosController < ApplicationController
  def new
    @photo = Photo.new
  end

  def create
    @coordinates = params['coordinates'].split(',')
    @photo = Photo.new
    @photo.coordinates = @coordinates
    @photo.image = params['photo']['image']
    @photo.description = params['photo']['description']
    @photo.user_id = current_user.id

    binding.pry
  end
end

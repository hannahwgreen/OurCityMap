class PhotosController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]
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
    @photo.save
    redirect_to root_path
  end

  def show
    @user = current_user
    photo = Photo.find(params[:id])
  end

end

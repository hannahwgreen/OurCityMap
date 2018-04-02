class Api::V1::PhotosController < ApplicationController
  def index
    photos = Photo.all
    render json: photos
  end

  def create
    binding.pry
    updated_at = photo_params["files"]["updated_at"]
    updated_at = Time.at(updated_at).to_datetime
    @photo = Photo.new
    @photo.file_file_name = photo_params["files"]["name"]
    @photo.file_content_type = photo_params["files"]["type"]
    @photo.file_file_size = photo_params["files"]["size"]
    @photo.file_updated_at = updated_at
    @photo.description = photo_params["description"]
    @photo.user_id = current_user.id
    @photo.coordinates = photo_params["files"]["coordinates"]

    @photo.save
    render json: {photo: photo}
    # respond_to do |format|
    #   if @photo.save
    #     format.html { redirect_to @photo, notice: 'Upload was successfully created.' }
    #     format.json { render :show, status: :created, location: @photo }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @photo.errors, status: :unprocessable_entity }
    #   end
    # end

  end

    private
      def photo_params
        params.require(:photo).permit(:description, files: {})
      end
end

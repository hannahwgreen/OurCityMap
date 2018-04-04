class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!

  def index
    @comments = Comment.where(photo_id: params[:photo_id]).order('created_at desc')
    @comments = @comments.map { |comment|
      {
        comment: comment,
        display_name: comment.user.display_name,
      }
    }

    render json: {
      comments: @comments,
    }
  end

  def create
    user = current_user
    photo = Photo.find(params[:photo_id])
    comment = Comment.new(comment_params)
    comment.photo_id = photo.id
    if comment.save
      render json: {
        comment: {
          comment: comment,
          display_name: comment.user.display_name
        }
      }
    else
      render json: { errors: comment.errors }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end

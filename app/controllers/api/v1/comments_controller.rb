class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: [:index, :new, :create]

  def index
    @comments = Comment.where(photo_id: params[:photo_id]).order('created_at asc')
    @comments = @comments.map { |comment|
      date = DateTime.parse(comment.created_at.to_s)
      date = date.new_offset('-04:00')
      date = date.strftime('%m-%d-%Y %I:%M:%S %p')
      {
        comment: comment,
        display_name: comment.user.display_name,
        created_at: date
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
    if current_user
      comment.user = current_user
    elsif params[:user_id]
      comment.user = User.find(params[:user_id])
    end
    comment.photo_id = photo.id
    if comment.save
      render json: {
        comment: {
          comment: comment,
          display_name: comment.user.display_name,
          created_at: comment.created_at
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

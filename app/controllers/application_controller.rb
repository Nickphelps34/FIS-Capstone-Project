class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

  before_action :authorized_user, only: [:update, :destroy]


  def current_user
    User.find_by(id: session[:user_id])
  end

  def authorized_user
    render json: {error: "not authorized"}, status: :unauthorized unless current_user
  end

  private
  
  #grab render_unprocessable_entity on any unprocessable entity error
  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

  #Grab for any not_found error
  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
end

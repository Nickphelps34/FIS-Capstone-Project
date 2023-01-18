class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  
  
  def login
    byebug

    user_to_find = User.find_by()
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

class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  
  
  def login
    user_to_find_to_login = User.find_by( username: params[:username] ) 

    if 
      user_to_find_to_login

        if user_to_find_to_login.authenticate(params[:password])
          render json: user_to_find_to_login
        else
          render json: { error: " Incorrect Password " }
        end
      
    else
      render json: { error: "Username or Password Don't Match" }
    
    end

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

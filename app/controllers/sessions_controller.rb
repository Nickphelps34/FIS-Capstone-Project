class SessionsController < ApplicationController
  #skip_before_action :authorized_user, only: [:create, :show]

include ActionController::Cookies
    def create
      #byebug
      user_to_find_to_login = User.find_by( username: params[:username] ) 
      if 
        user_to_find_to_login
  
          if user_to_find_to_login.authenticate(params[:password])
            
            session[:user_id] = user_to_find_to_login.id
            
            render json: user_to_find_to_login
          
          else

            render json: { error: " Incorrect Password " }
          
          end
        
      else
        render json: { error: "Username or Password Don't Match" }
      
      end
  
    end
    

    def get_logged_in_user
      user_already_loggedin = User.find_by( id: session[:user_id])
      
      render json: user_already_loggedin
    end

    def destroy
      session.delete( :user_id )

      render json: {}
    end

end

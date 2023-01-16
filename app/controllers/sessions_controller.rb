class SessionsController < ApplicationController

  def create
    user = User.find_by(name:params[:name])
  
    if user && user.authenticate(params[:password])
        #Logs in user, and confirms log in
      render json: user, status: :ok
        #Creates cookie
      cookies[:user_id] = { value: user.id, expires: 1.year.from_now }
    else
      render json: {errors: "Invalid Password or User"}, status: :unauthorized
    end
    def destroy
      user = User.find_by(id: params[:id])
      #Deletes the cookie for the seassion
      cookies.delete :user_id
      head :ok
    end
  end

end

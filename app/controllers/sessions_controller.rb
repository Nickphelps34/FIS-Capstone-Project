class SessionsController < ApplicationController

  def create
    user = User.find_by(name:params[:name])
  
    if user && user.authenticate(params[:password])
      render json: user, status: :ok
    else
      render json: {errors: "Invalid Password or User"}
    end
  end

end

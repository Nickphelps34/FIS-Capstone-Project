class UsersController < ApplicationController


  rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

  before_action :find_user, except: [:index, :create]
  
  def index
    render json: User.all
  end
  
  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def create
    user = User.create(user_params)
    if
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # def update
  #   if update = user.update(user_params)
  #     render json: user
  #   else
  #     render json: user.errors, status: :unprocessable_entity
  #   end
  # end



  def update 
    user = User.find(params[:id])
    user.update(user_params)
    render json: user, status: :accepted
  end

  # def destroy
  #   User.destroy
  # end
  
  
  
  
  private

  def user_params
    params.permit(:name, :username, :email, :password)
  end

  def find_user
    user = User.find(params[:id])
  end

end

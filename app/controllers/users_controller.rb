class UsersController < ApplicationController


  before_action :user_find_method, except: [:index, :create]
  
  def index
    render json: User.all
  end
  
  def show
    user = User.find(cookies[:user_id])
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
    if
      render json: user, status: :create
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
  end

  def destroy
    User.destroy
  end
  private

  def user_params
    params.permit(:name, :email, :password)
  end

  def find_user
    user = User.find(params[:id])
  end

end

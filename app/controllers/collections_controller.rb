class CollectionsController < ApplicationController

  def index
    render json: Collection.all
  end

end

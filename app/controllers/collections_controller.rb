class CollectionsController < ApplicationController

  def index
    render json: Collection.all
  end

  def show
    collection_found = Collection.find_by_id(params[:id])
    if collection_found
      render json: deck_found
    else
      render json: {"error": "Collection not found"}, status: :not_found
    end
  end


  def create
    collection = Collection.create(collection_params)
    if collection.valid?
      render json: collection.card, status: :created
    else
      render json: { error: "All bad"}, status: :unprocessable_entity
    end
  end

  private

  def collection_params
    params.permit(:card_id, :deck_id)
  end

end

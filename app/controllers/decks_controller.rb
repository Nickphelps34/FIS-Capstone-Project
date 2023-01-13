class DecksController < ApplicationController

  def index
    render json: Deck.all
  end

  def show
    deck_found = Deck.find_by_id(params:[:id])
    if deck_found
      render json: deck_found
    else
      render json: {"error": "Deck not found"}, status: :not_found
    end
  end







end

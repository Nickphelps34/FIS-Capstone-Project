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

    def create
      deck = Deck.create(deck_params)
      if
        render json: deck, status: :created
      else
        render json: deck.errors, status: unprocessable_entity
      end
    end
  
  private
  def deck_params
    params.permit(:deck_name, :deck_color, :deck_commander)
  end 
  
  end







end

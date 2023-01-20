class CardsController < ApplicationController

  def index
    render json: Card.all
  end

  # def show

  # end

  def create
    card = Card.create(card_params)
    if
      render json: card, status: :created
    else
      render json: card.errors, status: :unprocessable_entity
    end
  end



  private
  def card_params
    params.permit(:card_type, :mana_value, :card_color, :card_name)
  end

end

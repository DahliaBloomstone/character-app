class CharactersController < ApplicationController 
  before_action :current_character, only: [:show, :update, :destroy]

  def index
    render json: Character.all
  end

  def show
    render json: @character
  end

  def create
    character = Character.new(character_params)
    if character.save
      render json: character
    else
      render json: { message: character.errors}, status: 400
    end
  end

  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: { message: @character.errors }, status: 400
    end
  end

  def destroy
    if @character.destroy
      render status: 204
    else
      render json: { message: @character.errors }, status: 400
    end
  end

  private
    def character_params
      params.require(:character).permit(:name, :location, :image_url, :date, :breed, :like)
    end

    def current_character
      @character = Character.find_by(id: params[:id])
    end

end

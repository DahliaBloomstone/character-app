class CharactersController < ApplicationController 
  before_action :current_character, only: [:show, :update, :destroy]

    def index 
        @characters = Character.all 
        render json: @characters, status: 200 
    end 

    def show
       # @character = Character.find(params[:id]) 
        render json: @character, status: 200 
    end 

    def create
        @character = Character.new(character_params)
    
        if @character.save
          render json: @character, status: :created, location: @character
        else
          render json: @character.errors, status: :unprocessable_entity
        end
      end
    
      # PATCH/PUT /characters/1
      def update
        if @character.update(character_params)
          render json: @character
        else
          render json: @character.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /characters/1
      def destroy
        @character.destroy
      end
    
      private
        def set_character
          @character = Character.find(params[:id])
        end
    
        def character_params
          params.require(:character).permit(:name, :story)
        end
    end
    
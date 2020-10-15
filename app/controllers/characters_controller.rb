class CharactersController < ApplicationController 
    
    def index 
        @characters = Character.all 
        render json: @characters, status: 200 
    end 

    def show
        @character = Character.find(params[:id]) 
        render json: @character, status: 200 
    end 

    def create 
    end 

    def update 
    end 

    def destroy 
    end 

    private
    def set_character
    end 
end 
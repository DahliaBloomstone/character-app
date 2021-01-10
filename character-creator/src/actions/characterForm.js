//SECOND STEP IN REDUX APPLICATION
//ACTIONS A USER CAN DO. UPDATE CHARACTERS
//ADD LIKE DELETE CHARACTERS 
//TYPE IS THE ONLY PROPERTY REDUX EXPECTS IN ACTION OBJECTS

export const updateCharacterFormData = characterFormData => {
    return {
      type: 'UPDATED_DATA',
      characterFormData
    }
  }
  
  export const resetCharacterForm = () => {
    return {
      type: 'RESET_CHARACTER_FORM'
    }
  }
  
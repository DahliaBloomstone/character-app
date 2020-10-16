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
  
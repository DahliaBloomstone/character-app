const initialState= {
    name: '',
    location: '',
    image_url: '',
    date: '',
    background_info: ''
  }
  
  export default (state = initialState, action) => {
  
      switch(action.type) {
        case 'UPDATED_DATA':
          return action.characterFormData
  
        case 'RESET_CHARACTER_FORM':
          return initialState;
  
        default:
          return state;
     }
  
  }
  
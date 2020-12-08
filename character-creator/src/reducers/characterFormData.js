//reducers are pure functions determined by input values 
//to update, passing action and old state to our reducer 

const initialState= {
    name: '',
    location: '',
    image_url: '',
    date: '',
    background_info: ''
  }
  
  //switch case: action.type is the info we are switching
  //tells the function what to do 
  //returns info passed into the function
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
  
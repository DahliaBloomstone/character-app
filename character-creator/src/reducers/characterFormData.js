//REDUX STEP 3. AFTER CREATING THE STORE AND ACTIONS.
//reducers are pure functions determined by input values 
//to update, passing action and old state to our reducer 

//the state is equal to the object 
//state is the object that includes the data the components need
//have an array of items that we are rendering
const initialState= {
    name: '',
    location: '',
    image_url: '',
    date: '',
    background_info: ''
  }
  
  //switch case: action.type is the info we are switching
  //switch handles multiple actions, returns the data 
  //reducers have to return what you want the new state to be
  //you return the new state you want out of each case block
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
  
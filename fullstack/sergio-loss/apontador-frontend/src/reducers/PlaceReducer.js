const initState = {    
    search_text:"",
    result_search:{
      search_text:"",
      matches:0,
      current_page:0,
      places:[]
    }
}
  
const PlaceReducer = (state = initState, action) => {

    if (action.type === 'LS_RESULT_SEARCH') {            
      return {
        ...state,
        result_search: action.result_search
      };
    }  
    
    if (action.type === 'LS_SEARCH_TEXT') {            
      return {
        ...state,
        search_text: action.search_text
      };
    }  
    
  
    return state;
};
  
export default PlaceReducer;
  
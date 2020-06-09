const initState = {
    redirect: {      
      to: ""
    }
}
  
const RedirectReducer = (state = initState, action) => {

    if (action.type === 'LS_REDIRECT') {            
      return {
        ...state,
        redirect: action.redirect
      };
    }
    
    if (action.type === 'RESET_REDIRECT') {            
      return {
        ...state,
        redirect: { to: "" }
      };
    }

    
  
    return state;
};
  
export default RedirectReducer;
  
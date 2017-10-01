import {authenticateAsApplication} from 'utils/AuthService';
import {
    AUTHENTICATE,
    AUTHENTICATION_FAIL,
    AUTHENTICATION_COMPLETE
} from 'actions';


export function authenticate() {
    return dispatch => {
      dispatch({ type: AUTHENTICATE });
      authenticateAsApplication()
          .then(function(res) {
              return res.json();
          })
          .then(function(resJson) {
              dispatch({ type: AUTHENTICATION_COMPLETE, payload: resJson })
          })
          .catch(e => {
              console.log("ERRO: " + e);
              dispatch({ type: AUTHENTICATION_FAIL, payload: e })
          });
    };
}

export function getPlaceInfo(){

}
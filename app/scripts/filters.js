//MASCARAS
app.filter('viewMaks', function(){
  return function(val, mask){

    if(val){      
      val = val.replace(/[\-._:/]/g,'');
      var newValue = "";
      var maskValue = 0;
      var error = false;
      
      for(var mId = 0, vId = 0; mId<mask.length;mId++){
        if(mask[mId].match(/[DYM9\*]/) == null){
          maskValue++;
          newValue += mask[mId];
        }else{
          if(mask[mId] === '9' && val[vId].match(/[^0-9.]/)){
            error = true;
            break;
          }
          newValue += val[vId];
          vId++;
        }
      }
      return (error ? mask : (mask.length - maskValue >= val.length ? newValue : val));    
    }else{
      return val;
    }
  }
});

//IFRAME
app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
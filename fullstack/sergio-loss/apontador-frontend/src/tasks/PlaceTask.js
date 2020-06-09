
export const doSearch = (search_text, page, callback) => {
    /*codigo que vai chamar a API*/
    //test(search_text, page, callback)    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");                
    
    let requestOptions = {
        method: 'GET',
        headers: myHeaders
    };    

    fetch(`http://localhost:44324/api/place/list/${search_text}/${page}`, requestOptions)
    .then(response => {
        if(response.status === 200) {
            response.json().then(json => {                    
                callback(json)                    
            });
        }                
    });
}

export const doPost = (place, callback) => {
    /*codigo que vai chamar a API*/

    console.log(place)

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");                
    
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(place)
    };    


    fetch(`http://localhost:44324/api/place/add`, requestOptions)
    .then(response => {
        if(response.status === 200 || response.status === 400) {
            response.json().then(json => {                    
                callback(json)                    
            });
        }                
    });

}
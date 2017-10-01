export function getRating(totalRating){
    const stars = [];
    for(var i=1; i<=5; i++){
        stars.push(<li className={`star ${i <= parseInt(totalRating) ? 'filled' : ''}`}></li>);
    }
    return stars;
}
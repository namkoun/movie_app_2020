import React from 'react';
import './Detail.css';
class Detail extends React.Component{
    componentDidMount() {
        const { location, history }= this.props;

      if(location.state === undefined){
          history.push('/');
      }  
    }

    render(){
const { location } = this.props;
if(location.state){
    return(
        <div className="detail">

            <h2>{location.state.title}    <hr /> rating  {location.state.rating}/10</h2>
            <img src={location.state.poster} alt={location.state.title} title={location.state.title}  />
            <p className="movie-summary">{location.state.summary}</p> 
          
            
        
        </div>
        
        );
}else{
    return null;
}
       
    }
}



export default Detail;
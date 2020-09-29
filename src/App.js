import React from 'react';
import img01 from './images/123.jpg';
import img02 from './images/345.jpg';
import img03 from './images/789.jpg';
function Food({name,picture,message0}){
 
  return (
    <div>
          <h3>I Love {name}</h3>
          <img src={picture} alt={message0}></img>
    </div>
           
    )
  
}




const foodILike = [
  {id:1,name: '코알라', image: img01,message:'코알라사진'},
  {id:2,name: '집', image: img02, message:'집사진'},
  {id:3,name: '펭귄', image: img03, message:'펭귄사진'},
];


function App() {
  // return <div className="App" />;
      return (
      <div>
       {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} message0={dish.message} />))}
        
      </div>
      );
}

export default App;

import React, { Component } from 'react';
import './main.css';

class Div extends Component{
  render(){
    return(
    
    <div className="toptrendingdiv" >
        {/* heading */}
        <h3 id="headingtt" >Top Trending</h3>
          {/* paragraph */}
        <p id="paratt" >Choose the best, wear the elegance</p>
  
             {/* Images */}
        <div >
      <div className="ui card"  id="pic1row1tt">
        <div className="image">
          <img src="PicCarousel12.jpg" />
        </div>
      </div>
      <div className="ui card"  id="pic2row1tt">
        <div className="image">
          <img src="PicCarousel10.jpg" />
        </div>
      </div>
      <div className="ui card"  id="pic3row1tt" >
        <div className="image">
          <img src="PicCarousel2.jpg" />
        </div>
      </div>
      <div className="ui card"  id="pic4row1tt">
        <div className="image">
          <img src="PicCarousel7.jpg" />
        </div>
      </div>     
       <div className="ui card"  id="pic1row2tt" >

        <div className="image">
          <img src="PicCarousel11.jpg" />
        </div>
      </div>
      <div className="ui card"  id="pic2row2tt" >
        <div className="image">
          <img src="PicCarousel4.jpg" />
        </div>
      </div>
      <div className="ui card"  id="pic3row2tt" >
        <div className="image">
          <img src="PicCarousel1.jpg" />
        </div>
      </div>
      <div className="ui card"  id="pic4row2tt" >
        <div className="image">
          <img src="PicCarousel6.jpg" />
        </div>
      </div>
</div>
 
        

  
  </div>
  
    );

}
}
export default Div;
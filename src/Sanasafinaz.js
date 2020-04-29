

import React, { Component } from 'react';

import axios from 'axios';
import {Link} from "react-router-dom";
import AdminUI from './AdminUI';




class Sanasafinaz extends Component{

 
  constructor(props)
  {
  super(props); 
  this.state={
      brands: []
      }
  }

  
  async componentDidMount(){

    if(!sessionStorage.getItem("userData")){
        
      this.props.history.push('/login')
  }else{
      const url="http://localhost/sanasafinaz/api/post/read.php";
      const response=await fetch(url);
      const data= await response.json();
     this.setState({brands:data.data});
    }
}




render(){

  return(     
    <div>
      <AdminUI />
    <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px'}}>
        <div className="container">
            
           
          <h1 className="display-4">Sana Safinaz</h1>
          <hr class="my-4"></hr>
          <p class="lead">Admin Not Allowed To Modify Sana Safinaz Records.</p>
  <hr class="my-4"></hr>


       </div>


    </div>

    <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px',  marginTop:'-20px'}}>
        <div className="container">
            
          <h1 className="display-6" style={{textAlign:'center',  letterSpacing:'2px'}}>Current Record</h1>
          <p class="lead" style={{textAlign: 'center', color:'#e57373'}}>All the available data is shown below</p>
          <hr class="my-7"></hr>
<div>
    {this.state.brands.map((brands,id)=>
    <div className="ui link cards " style={{display: 'inline-block' ,  marginLeft: '50px'}} >
      <div className="card " >
             <div className="image">
               <img src={"http://localhost/sanasafinaz/api/post/" + brands.image}/>
             </div>
       <div className="content" >
            <div className="header">{brands.code}</div>
                 <div className="meta">
                     <a>{brands.name}</a>
                  </div>
                 <div className="description">
                    {brands.color}
                 </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{brands.material}</li>
          <li className="list-group-item">{brands.type}</li>
          <li className="list-group-item">{brands.size_type}</li>
          <li className="list-group-item">{brands.category_name}</li>
          <li className="list-group-item" style={{textAlign: 'right', color: 'grey'}}><i className="money bill alternate icon large"></i>{brands.price}</li>
        </ul>
        
    
      </div>
    </div> )
    }
</div> 


</div>          
</div>      
</div>

);
}
}


export default (Sanasafinaz);

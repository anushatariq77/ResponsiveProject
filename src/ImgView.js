import React, { Component } from 'react';
import MainNavBar from './MainNavBar';
import Footer from './Footer';
 import {Link} from "react-router-dom";
 import './style.css'

 class ImgView extends Component{

  incrementValue(e){
    
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value=value+1;
            document.getElementById('number').value = value;
    }
}

decrementValue(e)
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }
}

    render(){

        return(
            <div>
                <MainNavBar/>
                
            <div className="ui breadcrumb" style={{backgroundColor:'white',marginTop:'10px',position:'absolute'}}>
            <Link to="/mainpage">Home</Link>
            <i className="right angle icon divider"></i>
            <Link className="section" to="/BrandFullPage">Brands</Link> 
            <i className="right angle icon divider"></i>
            <Link className="section" to="/khaadiUI">Khaadi</Link> 
            <i className="right angle icon divider"></i>
        <div className="active section" style={{textTransform:'capitalize'}}>{this.props.brand} {this.props.material} {this.props.type} {this.props.category} {this.props.size}</div>
       
            </div>
            <hr style={{ borderWidth:'2px',width:'99%',marginLeft:'10px',marginTop:'50px'}}></hr>


         <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'white',width:'99%',height:'140vh',marginLeft:'10px',overflow:'hidden'}}>
         <div style={{width:'90%' ,marginTop:'-30px', marginLeft:'20px',position:'absolute'}}>
         <h1 style={{textTransform:'capitalize',fontFamily:"Geneva"}}>{this.props.brand} {this.props.material} {this.props.type} {this.props.category} {this.props.size}</h1>
         <h4 style={{fontFamily:"Geneva"}} >{this.props.name}</h4> 
        <div className="img-wrapper ">
             <img src={this.props.src} className="inner-img"  style={{float:'right',width:'30%',marginTop:'50px'}}/>
             </div>
         <div style={{width:'32%',overflow:'hidden'}}>
        
         <h4 style={{fontSize:'17px',marginTop:'30px',textAlign:'center',float:'right'}}> DESCRIPTION<hr  style={{backgroundColor:'pink',borderRadius:"20px",borderWidth:'5px',
        marginTop:'5px'}}></hr></h4>
        {/* <hr style={{backgroundColor:'black',borderWidth:'5px',width:'12%',position:'absolute',marginLeft:'250px',marginTop:'50px'}}></hr> */}
        <ul style={{marginTop:"80px",fontFamily:"Geneva",fontSize:'17px',textTransform:'capitalize',listStyle:'none'}}>
        <li style={{marginLeft:'-40px'}}><p>{this.props.type} &nbsp; {this.props.material} &nbsp; {this.props.category}</p></li>
        <li style={{marginTop:'10px',marginLeft:'-40px'}}><strong>Manufacturer: </strong>{this.props.brand}</li>
        <li style={{marginTop:'10px',marginLeft:'-40px'}}><strong>Fabric:</strong>{this.props.material}</li>
        <li style={{marginTop:'10px',marginLeft:'-40px'}}><strong>Type:</strong>{this.props.type}</li>
        <li style={{marginTop:'10px',marginLeft:'-40px'}}><strong>Color:</strong>{this.props.color}</li>
        <li style={{marginTop:'10px',marginLeft:'-40px'}}><strong>Size:</strong>{this.props.size}</li>
        <li style={{marginTop:'10px',marginLeft:'-40px'}}><strong>Category:</strong>{this.props.category}</li>
       
        </ul>
        </div>
        <div className='container 'style={{width:'65%',boxShadow:'2px 3px 8px 2px #9e9e9e',float:'left'
        ,marginTop:'20px' ,height:'60vh',position:'absolute'}}>

       <center><h1 style={{marginTop:'60px',letterSpacing:'1px',fontWeight:'1200',
       fontFamily:"Geneva",color:'#ad1457'}}>PKR {this.props.price}</h1>
                 </center> 
                 <hr style={{width:'30%',borderWidth:'1px',backgroundColor:'#e0e0e0'}}></hr>

<div style={{backgroundColor:'red',width:'50%',marginLeft:'20px',marginLeft:'90px'}}>
  <div className="ui small icon input" style={{marginTop:'15px',
 borderColor:'black',fontSize:"15px",fontWeight:'bold',float:'right'}} >

<button className="ui icon button" onClick={()=>this.decrementValue()} value="-" >
<i class="minus icon"></i>
</button>

<input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" id="number" style={{textAlign:'center'}}/>
<button className="ui icon button" onClick={()=>this.incrementValue()} value="+" >
<i class="plus icon"></i>
</button>
</div>
</div>

<div style={{width:'100%',marginTop:'80px'}}>
<center><button className="ui red button" style={{width:'35%',letterSpacing:'1px',fontWeight:'1200',fontSize:'15px',
       fontFamily:"Geneva",backgroundColor:'#ad1457',whiteSpace:'nowrap'}}>Add To Cart</button></center>
</div>


        </div>
     
         </div>
      
        </div>

                <Footer/>
            </div>
        )
    }


 }
 export default ImgView;
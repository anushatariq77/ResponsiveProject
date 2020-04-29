 //import react libraries
 import React, { Component } from 'react';
 import {Link} from "react-router-dom";
 import './main.css';



 class TopNav extends Component{ 
   render(){
    return(

      <div >
        <div className="mainnavbardv" >
          {/* logo img */}
         <center><Link to='/mainpage'><img src="logo.jpg" className="mainlogo" ></img></Link></center> 
               

               {/* right side text */}
         <div className="signin" > 

         <Link to='/login'> <p className="signinpara"  >  
           <i class="user outline icon"></i>Sign in</p></Link>

      <p className="registerpara" ><i class="edit outline icon">
        </i>Register</p>
      <p className="shoppingcartpara" ><i class="opencart icon"></i>Shopping Cart</p>
  
         </div> 
   
        </div>
  {/* nav */}
<center><nav className="mainnav" >
  <ul >
    <li className="newarrivalnav" >
      NEW ARRIVALS
   
    </li>
    <li className="othersnav"  >
   UNSTITCHED
   
    </li>
    <li className="othersnav" >
    STITCHED
    </li>
    <li className="othersnav" >
    LAWN
   
    </li>
    <li className="othersnav" >
     FANCY
   
    </li>
    <li className="othersnav" >
     KURTI
   
    </li>
    <li className="othersnav" >
    <Link to='/brandfullpage'>BRANDS</Link> 
   
    </li>
    <li className="brandnav" >
     </li>
  </ul>
</nav>
</center>

</div>
    );
   }
     
 
 }
 export default TopNav;
 
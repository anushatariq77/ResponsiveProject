import React, { Component } from 'react';
import {Link} from "react-router-dom";
import  './brand.css';





class Brand extends Component{


    render(){
        

        return(
          
         <div className="container-fluid" >

        
            {/* breadcrumb */}
          
         <nav aria-label="breadcrumb" >
             <ol className="breadcrumb" style={{backgroundColor:'white'}}>
              <li className="breadcrumb-item"><Link to="/mainpage">Home</Link></li>
              <i className="right angle icon divider"></i>
              <li className="breadcrumb-item active" aria-current="page">Brands</li>
               </ol>   
               <hr style={{marginTop:'-20px'}}></hr>
          
               </nav>
            {/* //   pink div */}
           <div className="container-fluid bbox" >
              <div className="row" >
                 <div className="col pinkcolumn1"   >
                 <h1 className="headingbrands" > Shop By Brands  <hr className="linebrands" ></hr> </h1>
                  
                 </div>
             </div>
            <div className="row">
               <div className = "col pinkcolumn2">
                      {/* paragraph */}
              <p className="parabrands">Pehnaway provides you a variety of clothing brands to shop according to your needs.</p>
               </div>
            </div>
            
     
         {/* brands div */}


               {/* Row A */}


            {/* 1st brand */}
      <div className="container-fluid abox" style={{boxShadow:'2px 3px 8px 2px #9e9e9e'}}>
         <div className="row">
            <h1 className="alphabetheadingbrands">A </h1> 
            <hr className="alphabetlinebrands" ></hr>
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="an.png" ></img>
         </div>
         <h3>Agha Noor</h3>
         </div>

         {/* 2nd brand */}
         <div className="col-md-3 col-6">
         <div className="card">
         <img className="card-img-top" src="ak.png" ></img>
         </div>
         <h3>Alkaram</h3>
         </div>

         {/* 3rd brand      */}
        <div className="col-md-3 col-6">
        <div className="card">
        <img className="card-img-top" src="aen.png" ></img>
       </div>
       <h3>Asifa &amp; Nabeel</h3>
       </div>

       {/* 4th brand */}
      
      <div className="col-md-3 col-6">
      <div className="card">
      <img className="card-img-top" src="as.png" ></img>
      </div>
      <h3>Asim Jofa</h3>
      </div>
            

         

      </div>
       
       {/* ROw B */}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">B </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="br.png" ></img>
         </div>
         <h3>Bareeze</h3>
         </div>

         {/* 2nd brand */}
         <div className="col-md-3 col-6">
         <div className="card">
         <img className="card-img-top" src="bz.png" ></img>
         </div>
         <h3>Bonanza</h3>
         </div>
         </div>

         {/* ROw C */}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">C </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="ch.png" ></img>
         </div>
         <h3>Charizma</h3>
         </div>

         {/* 2nd brand */}
         <div className="col-md-3 col-6">
         <div className="card">
         <img className="card-img-top" src="CO.png" ></img>
         </div>
         <h3>Chen One</h3>
         </div>
         </div>

         {/* ROw D */}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">D </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="dn.png" ></img>
         </div>
         <h3>Dhanak</h3>
         </div>
         </div>

           {/* ROw E */}
    
           <div className="row">      
            <h1 className="alphabetheadingbrands">E </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="ed.png" ></img>
         </div>
         <h3>Edenrobe</h3>
         </div>

               {/* 1s brand */}
               <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="eg.png" ></img>
         </div>
         <h3>Ego</h3>
         </div>

               {/* 1s brand */}
               <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="et.png" ></img>
         </div>
         <h3>Ethnic</h3>
         </div>
         </div>

          {/* ROw F */}
    
          <div className="row">      
            <h1 className="alphabetheadingbrands">F </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="fs.png" ></img>
         </div>
         <h3>Edenrobe</h3>
         </div>
         </div>

           {/* ROw G */}
    
           <div className="row">      
            <h1 className="alphabetheadingbrands">G </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="gn.png" ></img>
         </div>
         <h3>Generation</h3>
         </div>
               {/* 2nd brand */}
               <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="gul.png" ></img>
         </div>
         <h3>Gul Ahmed</h3>
         </div>
         </div>

         {/* ROw J */}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">J </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="j.png" ></img>
         </div>
         <h3>Junaid Jamshed</h3>
         </div>
         </div>

         {/* ROw K */}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">K </h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="kd.png" ></img>
         </div>
         <h3>Khaadi</h3>
         </div>
         </div>

         {/* ROw L*/}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">L</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="lm.png" ></img>
         </div>
         <h3>Lime Light</h3>
         </div>
         </div>

         
         {/* ROw M*/}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">M</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="mb.png" ></img>
         </div>
         <h3>Maria B</h3>
         </div>
               {/* 2nd brand */}
               <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="mf.png" ></img>
         </div>
         <h3>Motifz</h3>
         </div>
               {/* 3rd brand */}
               <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="ms.png" ></img>
         </div>
         <h3>Mausummery</h3>
         </div>
         </div>

           {/* ROw N*/}
    
           <div className="row">      
            <h1 className="alphabetheadingbrands">N</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="nl.png" ></img>
         </div>
         <h3>NishatLinen</h3>
         </div>
         </div>

          {/* ROw O*/}
    
          <div className="row">      
            <h1 className="alphabetheadingbrands">O</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="OT.png" ></img>
         </div>
         <h3>Outfitters</h3>
         </div>
         </div>

         {/* ROw S*/}
    
         <div className="row">      
            <h1 className="alphabetheadingbrands">S</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="sn.png" ></img>
         </div>
         <h3>Sana Safinaz</h3>
         </div>
              {/* 2nd brand */}
              <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="SP.png" ></img>
         </div>
         <h3>Sapphire</h3>
         </div>
            
         </div>

          {/* ROw W*/}
    
          <div className="row">      
            <h1 className="alphabetheadingbrands">W</h1> 
            <hr className="alphabetlinebrands" ></hr>
               {/* 1s brand */}
         <div className="col-md-3 col-6">
         <div className="card" >
          <img className="card-img-top" src="wd.png" ></img>
         </div>
         <h3>Warda</h3>
         </div>
         </div>









                 
</div>


                 
                 
                

              </div>

           </div>
   
      
        )
    }

}
export default Brand;
import React, { Component } from 'react';
import MainNavBar from './MainNavBar';
import Footer from './Footer';
 import {Link} from "react-router-dom";
import ImgView from "./ImgView";
class KhaadiUI extends Component{

    constructor(props){
        super(props)
        this.state={
          
            brands:[],
           info:''  ,
           catg:''  ,
           max:'',
           min:'' ,
           price:'',
           img:'',
           name:'',
           code:'',
           brand:'',
           color:'',
           material:'',
           price:'',
           type:'',
           size:'',
           category:''

        }
    } 
    async componentDidMount(){

       
          const url="http://localhost/php_rest_myblog/api/post/read.php";
          const response=await fetch(url);
          const data= await response.json();
         this.setState({brands:data.data});
         console.log(this.state.brands)
         
    
      
    }

    func = (level,name,minimum,maximum) => {
        this.setState({
            info: name,
            catg: level,
            min: parseInt(minimum),
            max: parseInt(maximum)     
        })  
     
         }

    img =(img,name,code,brand,color,material,price,type,category_name,size_type) =>{
        this.setState({
            img: img,
            name: name,
            code: code,
            brand: brand,
            color: color,
            price: price,
            type: type,
            material: material,
            category: category_name,
            size: size_type


        })
        console.log(this.state.type);

    }

    



    render(){

        const type=this.state.brands.filter(brand => (brand.type == this.state.info) || (brand.color == this.state.info)||
         ( brand.material == this.state.info) ||(brand.category_name == this.state.info )||( brand.size_type == this.state.info)||
        ((brand.price <= this.state.max)&&(brand.price >= this.state.min)))
        const rows1=type.length
      
     
        if(this.state.img!==""){
            return(
                <div>
                    <ImgView src={this.state.img}  name={this.state.name} brand= {this.state.brand} color={this.state.color}
                    code={this.state.code} material={this.state.material} price={this.state.price} type={this.state.type}
                    category={this.state.category} size={this.state.size}
                    />
                </div>
            )        }

    
    

        return(
            <div>
                <MainNavBar/>
            <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'white',height:'5400px',width:'101%',borderStyle:'solid',borderColor:'#bdbdbd'}}>
            <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'white',marginLeft:'270px',marginTop:'-50px',position:'absolute'}}>

            <div class="ui breadcrumb" style={{marginLeft:'-5px',marginTop:'-90px',backgroundColor:'white'}}>
            <Link to="/mainpage">Home</Link>
            <i class="right angle icon divider"></i>
            <Link className="section" to="/BrandFullPage">Brands</Link> 
            <i class="right angle icon divider"></i>
            <div class="active section">Khaadi</div>
          </div>
          <hr style={{borderWidth:'2px',width:'91%',marginLeft:'10px',marginTop:'-30px'}}></hr>
          <h1 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'15px'}}>Khaadi</h1>
        <p style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'10px',fontSize:'15px'}}>Items {rows1} of {this.state.brands.length} total</p>
        <hr style={{borderWidth:'2px',width:'91%',marginLeft:'10px',marginTop:'10px'}}></hr>
       
           
             <div className="ui four column doubling stackable grid container ">
           {this.state.brands.filter(brand =>(brand.type == this.state.info )||( brand.color == this.state.info)||
           ( brand.material == this.state.info) ||(brand.category_name == this.state.info )||( brand.size_type == this.state.info)||
           ((brand.price <= this.state.max)&&(brand.price >= this.state.min)  )
           ).map(filteredBrand => (
            <div className="column">
                <div className="ui card" >
                <div className="image" >
                { <img src={"http://localhost/php_rest_myblog/api/post/" + filteredBrand.image}  onClick={() =>this.img("http://localhost/php_rest_myblog/api/post/" 
                + filteredBrand.image ,(filteredBrand.name),(filteredBrand.code),(filteredBrand.brand),
                (filteredBrand.color) ,(filteredBrand.material ),(filteredBrand.price),  (filteredBrand.type),
                (filteredBrand.category_name) ,(filteredBrand.size_type)
               )} />
                        }
                    </div>
                    </div>
                    <div >
                   <center> <p style={{textTransform:'capitalize',fontSize:'18px',fontFamily:'helvatica'}}> {filteredBrand.brand }
                    &nbsp; {filteredBrand.material}  &nbsp; {filteredBrand.category_name} &nbsp; {filteredBrand.type} 
                    &nbsp; {filteredBrand.color}</p></center>

                   <center><h3 style={{fontFamily:'helvatica',marginTop:'8px'}}><strong>PKR {filteredBrand.price}</strong></h3></center> 
                   <hr></hr>
                        </div>
                 </div>
              ))}
                </div>

             
                </div>

                <div style={{marginTop:'-58px',borderStyle:'solid',borderColor:'#bdbdbd',marginLeft:'-10px',width:'20%',height:'5380px'}}>
                <h1 style={{marginLeft:'10px',fontFamily:'helvatica'}}>Khaadi</h1>
              <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>
              <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PIECE</h3>
          
              <div style={{width:'80%',marginLeft:'10px'}}>
              <img src="arrow.png"
                   style={{width:"10px"}}></img>
          <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575' }} onClick={() => this.func('type','1piece')} >1 Piece</h3>    
             
          <img src="arrow.png"
                   style={{width:"10px"}}></img>
          <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','2piece')}>2 Piece</h3>    
          
              <img src="arrow.png"
                   style={{width:"10px"}}></img>
          <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','3piece')}>3 Piece</h3>    
          <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>
              
                  </div>
          
              <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>COLOR</h3>
              <div style={{ width:'90%',marginLeft:'10px'}}>
                  <div style={{backgroundColor:'black',display:'inline-block',marginLeft:'10px',width:'20%',height:'5vh'}} onClick={() => this.func('color','black')}>b</div>
                  <div style={{backgroundColor:'pink',color:'pink',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','pink')}>p</div>
                  <div style={{backgroundColor:'blue',color:'blue',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','blue')}>b</div>
                  <div style={{backgroundColor:'yellow',color:'yellow',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','yellow')}>y</div>
                  <div style={{backgroundColor:'red',color:'red',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','red')}>r</div>
                  <div style={{backgroundColor:'green',color:'green',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','green')}>g</div>
                  <div style={{backgroundColor:'maroon',color:'maroon',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','maroon')}>m</div>
                  <div style={{backgroundColor:'purple',color:'purple',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','purple')}>p</div>
                  <div style={{backgroundColor:'grey',marginLeft:'10px',color:'grey',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','grey')}>g</div>
                  <div style={{backgroundColor:'#ffe0b2',color:'#ffe0b2',borderColor:'black',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color',
                  'beige')}>	
                  b</div>
            
              </div>
          
              <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
              <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PRICE</h3>
              
              <div style={{width:'80%',marginLeft:'10px'}}> 
          <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  
                  onClick={() => this.func('price','','1000','3000')}>1,000-3,000</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}
                   onClick={() => this.func('price','','3000','5000')}>3,000-5,000</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}
                   onClick={() => this.func('price','','5000','7000')}>5,000-7,000</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} 
                   onClick={() => this.func('price','','7000','9000')}>7,000-9,000</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} 
                   onClick={() => this.func('price','','10000','15000')}>Above 13,000</h3>
                  <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
           </div>
          
           <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>FABRIC</h3>
           <div style={{width:'80%',marginLeft:'10px'}}>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
          <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}  onClick={() => this.func('material','cambric')}>Cambric</h3>    
          <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('material','khaddar')}>Khaddar</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','cross hatch')}>Cross Hatch</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','poly viscose')}>Poly Viscose</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','medium silk')}>Medium Silk</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}  onClick={() => this.func('material','velvet')}>Velvet</h3>
                  <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
           </div>
              
           <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>SIZE</h3>
           <div style={{width:'80%',marginLeft:'10px'}}>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
          <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('size_type','extrasmall')}>Extra Small</h3>    
          <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','small')}>Small</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','medium')}>Medium</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','large')}>Large</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('size_type','extralarge')}>Extra Large</h3>
                  <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
           </div>
              
           <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>Category</h3>
           <div style={{width:'80%',marginLeft:'10px'}}>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
          <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('category_name','kurti')}>Kurti</h3>    
          <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','shirtshalwar')}>Shirt Shalwar</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','fancy')}>Fancy</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','longshirt')}>Long Shirt</h3>
                  <img src="arrow.png"
                   style={{width:"10px"}}></img>
                  <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}} onClick={() => this.func('category_name','shirt shalwar dupatta')}>Shirt Shalwar Dupatta</h3>
                  <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
        
          </div>
          </div>
             
             <Footer/>
         </div>
         </div>
        )
    }
}
export default KhaadiUI;
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     //     <div >
  
        //     <div className="jumbotron jumbotron-fluid" style={{backgroundColor:'red', width:'90%',marginTop:'80px',marginLeft:'300px',position:'absolute'}}>
          
        //   <div class="ui breadcrumb" >
        //     <a class="section">Home</a>
        //     <i class="right angle icon divider"></i>
        //     <a class="section">Store</a>
        //     <i class="right angle icon divider"></i>
        //     <div class="active section">T-Shirt</div>
        //   </div>
          
        //       {this.state.brands.filter(brand => brand.type == this.state.info).map(filteredBrand => (
        //         <div className="ui link cards " style={{display: 'inline-block' ,  marginLeft: '50px'}} >
        //         <div className="card " >
        //                <div className="image" style={{flex:'33.33%'}}>
        //                  <img src={"http://localhost/php_rest_myblog/api/post/" + filteredBrand.image}/>
        //                </div>
        //          <div className="content" >
        //               <div className="header">{filteredBrand.code}
        //               </div>
        //                    <div className="meta">
        //                        <a>{filteredBrand.name}</a>
        //                     </div>
        //                    <div className="description">
        //                       {filteredBrand.color}
        //                    </div>
        //           </div>
        //           <ul className="list-group list-group-flush">
        //             <li className="list-group-item">{filteredBrand.material}</li>
        //             <li className="list-group-item">{filteredBrand.type}</li>
        //             <li className="list-group-item">{filteredBrand.size_type}</li>
        //             <li className="list-group-item">{filteredBrand.category_name}</li>
        //             <li className="list-group-item" style={{textAlign: 'right', color: 'grey'}}><i className="money bill alternate icon large"></i>{filteredBrand.price}</li>
        //           </ul>
                  
              
        //         </div>
               
        //   </div>
        //       ))}
        //   {this.state.brands.filter(brand => brand.color == this.state.info).map(filteredBrand => (
        //       <li>
        //           {filteredBrand.color}
        //       </li>
        //   ))}
        //   </div>
        //    <div className="jumbotron jumbotron-fluid" style={{ width:'20%',marginLeft:'10px',borderStyle:'solid',borderWidth:'1px',
        //    borderColor:'#bdbdbd',height:'auto',minHeight:'250vh'}}>
        //       <h1 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>Khaadi</h1>
        //       <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>
          
          
             
          
          
        //       <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PIECE</h3>
          
        //       <div style={{width:'80%',marginLeft:'10px'}}>
        //       <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575' }} onClick={() => this.func('type','1piece')} >1 Piece</h3>    
             
        //   <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','2piece')}>2 Piece</h3>    
          
        //       <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}} onClick={() => this.func('type','3piece')}>3 Piece</h3>    
        //   <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px',marginTop:'-10px'}}></hr>
              
        //           </div>
          
        //       <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>COLOR</h3>
        //       <div style={{ width:'90%',marginLeft:'10px'}}>
        //           <div style={{backgroundColor:'black',display:'inline-block',marginLeft:'10px',width:'20%',height:'5vh'}} onClick={() => this.func('color','black')}>black</div>
        //           <div style={{backgroundColor:'pink',color:'pink',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','pink')}>pink</div>
        //           <div style={{backgroundColor:'blue',color:'blue',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','blue')}>blue</div>
        //           <div style={{backgroundColor:'yellow',color:'yellow',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','yellow')}>yellow</div>
        //           <div style={{backgroundColor:'red',color:'red',marginLeft:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','red')}>red</div>
        //           <div style={{backgroundColor:'green',color:'green',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','green')}>green</div>
        //           <div style={{backgroundColor:'maroon',color:'maroon',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','maroon')}>maroon</div>
        //           <div style={{backgroundColor:'purple',color:'purple',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','purple')}>purple</div>
        //           <div style={{backgroundColor:'grey',marginLeft:'10px',color:'grey',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color','grey')}>grey</div>
        //           <div style={{backgroundColor:'#ffe0b2',color:'#ffe0b2',borderColor:'black',marginLeft:'10px',marginTop:'10px',display:'inline-block',width:'20%',height:'5vh'}}  onClick={() => this.func('color',
        //           'beige')}>	
        //           beige</div>
            
        //       </div>
          
        //       <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
        //       <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>PRICE</h3>
              
        //       <div style={{width:'80%',marginLeft:'10px'}}>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Below 1,000</h3>    
        //   <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>1,000-3,000</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>4,000-6,000</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>7,000-9,000</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>10,000-12,000</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Above 13,000</h3>
        //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
        //    </div>
          
        //    <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>FABRIC</h3>
        //    <div style={{width:'80%',marginLeft:'10px'}}>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Cambric</h3>    
        //   <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Khaddar</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Cross Hatch</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Poly Viscose</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Medium Silk</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Velvet</h3>
        //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
        //    </div>
              
        //    <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>SIZE</h3>
        //    <div style={{width:'80%',marginLeft:'10px'}}>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Extra Small</h3>    
        //   <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Small</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Medium</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Large</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Extra Large</h3>
        //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
        //    </div>
              
        //    <h3 style={{marginLeft:'10px',fontFamily:'helvatica',marginTop:'20px'}}>Category</h3>
        //    <div style={{width:'80%',marginLeft:'10px'}}>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //   <h3 style={{fontFamily:'helvatica',marginTop:'-20px',marginLeft:'20px',color:'#757575'}}>Kurti</h3>    
        //   <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Shirt Shalwar</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Fancy</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Long Shirt</h3>
        //           <img src="arrow.png"
        //            style={{width:"10px"}}></img>
        //           <h3 style={{marginTop:'10px',fontFamily:'helvatica',marginTop:'-20px',color:'#757575',marginLeft:'20px'}}>Shirt Shalwar Dupatta</h3>
        //           <hr style={{borderWidth:'2px',width:'70%',marginLeft:'10px'}}></hr>
                
             
                
        //   </div>
          
          
          
          
        //    </div>
           
          
          
        //   </div>
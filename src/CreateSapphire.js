import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AdminUI from './AdminUI';
class CreateSapphire extends React.Component{
    constructor(props){
        super(props)
        this.state={
          
            name:'',
            code:'',
            brand:'',
            color:'',
            material:'',
            price:'',
            type:'',
            size_id:'',
            category_id:'',
            image:'',
       

        }
    }
    componentDidMount(){
      if(!sessionStorage.getItem("userData")){
          
          this.props.history.push('/login')
      }
  }
    changeHandler= e => {
        this.setState({[e.target.name]: e.target.value})
    }
    

    submitHandler= e => {
        
        e.preventDefault()
        var formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("code", this.state.code);
        formData.append("brand", this.state.brand);
        formData.append("color", this.state.color);
        formData.append("material",this.state.material);
        formData.append("price", this.state.price);
        formData.append("type", this.state.type);
       formData.append("size_id", this.state.size_id);
        formData.append("category_id", this.state.category_id);
        formData.append("file", this.state.file);
        const config = {
            headers: { 
                'content-type': 'multipart/form-data'
            }
        }
    
     
        axios.post('http://localhost/sapphire/api/post/create.php',formData,config)
        .then(response=>{console.log(response)})

        console.log(this.state)
    }

    render(){
        const { name, code, brand, color, material, price, type, size_id, category_id, image}=this.state
        return(
            
            <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px',backgroundImage: 'url(sadd.jpg)',backgroundSize:'cover'}}>
<div className="container">
            
            <h1 className="display-4" style={{ marginLeft: '210px',fontFamily:'helvatica',textShadow:'3px 3px 3px #d32f2f', letterSpacing:'2px',color:'#000000'}}>Sapphire Add Record Pannel</h1>
            <hr class="my-4" ></hr>
          </div>
          <AdminUI/>
  <form  encType="multipart/form-data" style={{ marginTop:'80px', marginLeft: '300px',color:'white'}}>

 
  <div className="form-group"  style={{marginLeft:'-80px', color:'black'}}>
    <label style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Name</label>
 
    <input type="text" className="form-control col-7" name="name" value={name} onChange={this.changeHandler} />
    {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group"  style={{marginLeft:'-80px', color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Code</label>
 
    <input type="text" className="form-control col-7" name="code" value={code}  onChange={this.changeHandler} />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px' , color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Brand</label>
 
    <input type="text" className="form-control col-7"  name="brand" value={brand}  onChange={this.changeHandler} />
    {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group"  style={{marginLeft:'-80px' , color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Color</label>
 
    <input type="text" className="form-control col-7" name="color" value={color}  onChange={this.changeHandler} />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px', color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Material</label>
    <input type="text" className="form-control col-7" name="material" value={material}  onChange={this.changeHandler} />
    {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group"  style={{marginLeft:'-80px',  color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Price</label>
    <input type="number" className="form-control col-7" name="price" value={price}  onChange={this.changeHandler} />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px',  color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Type</label>
    <input type="text" className="form-control col-7" name="type" value={type}  onChange={this.changeHandler}/>
  </div>
  <div className="form-group"  style={{marginLeft:'-80px', color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Size_id</label>
    <input type="number" className="form-control col-7" name="size_id" value={size_id} onChange={this.changeHandler} />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px', color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Category_id</label>
    <input type="number" className="form-control col-7" name="category_id" value={category_id} onChange={this.changeHandler}  />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px', color:'black'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >File</label>
    <input type="file" className="form-control col-7" name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}  />
  </div>
 <div>
  <button type="submit" className="btn btn-primary col-7" style={{backgroundColor:'#d32f2f',borderColor:'#d32f2f', color: 'black', marginLeft:'-60px'}} 
  onClick={this.submitHandler}>Add Record</button>
   </div>
  
<Link to="/sapphire" ><button className="btn btn-primary col-7" style={{backgroundColor:'#000000',borderColor:'#000000', color: 'white',  marginLeft:'-60px',marginTop:'10px'}} 
  >Back</button></Link>

   
</form>
</div>


            // <form  encType="multipart/form-data">
            //     <div>
            //         <input type="text" name="name" value={name} onChange={this.changeHandler}/>

            //     </div>
            //     <div>
            //         <input type="text" name="code" value={code}  onChange={this.changeHandler}/>
                    
            //     </div>
            //     <div>
            //         <input type="text" name="brand" value={brand}  onChange={this.changeHandler}/>
                    
            //     </div>
            //     <div>
            //         <input type="text" name="color" value={color}  onChange={this.changeHandler}/>
                    
            //     </div>
            //     <div>
            //         <input type="text" name="material" value={material}  onChange={this.changeHandler}/>
                    
            //     </div>
            //     <div>
            //         <input type="text" name="price" value={price}  onChange={this.changeHandler} />
                    
            //     </div>
            //     <div>
            //         <input type="text" name="type" value={type}  onChange={this.changeHandler}/>
                    
            //     </div>
            //     <div>
            //         <input type="number" name="size_id" value={size_id} onChange={this.changeHandler}/>
                    
            //     </div>
            //     <div>
            //         <input type="number" name="category_id" value={category_id} onChange={this.changeHandler} />
                    
            //     </div>
            //     <div>
            //         <input type="file" name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}/>
                    
            //     </div>
            //     <button type="submit" onClick={this.submitHandler}>Submit</button>
            // </form>
        )
    }
}
export default CreateSapphire;
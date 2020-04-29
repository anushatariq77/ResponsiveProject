

import React, { Component } from 'react';

import axios from 'axios';
import {Link} from "react-router-dom";
import AdminUI from './AdminUI';




class Sapphire extends Component{

 
  constructor(props)
  {
  super(props); 
  this.state={
      brands: [],
      isEdit: false,
      isDelete: false,
      id: ''
      }
  }

  
  async componentDidMount(){

    if(!sessionStorage.getItem("userData")){
        
      this.props.history.push('/login')
  }else{
      const url="http://localhost/sapphire/api/post/read.php";
      const response=await fetch(url);
      const data= await response.json();
     this.setState({brands:data.data});
    }
}

update(record){
this.setState({
  isEdit: true,
  id: record.id,
  name: record.name,
  code: record.code,
  brand: record.brand,
  color: record.color,
  material: record.material,
  type: record.type,
  price: record.price,
  size_id: record.size_id,
  category_id: record.category_id
})


 
}
delete(record){


  console.log(record) 
  axios.post("http://localhost/sapphire/api/post/delete.php", {
      id: record.id
  })
  .then(response=>{
   console.log(response)
   const newState= this.state.brands.slice();
  newState.splice(newState.indexOf(record), 1)
  this.setState({
      brands:newState
  })
  
  }).catch(error=>{
      console.log(error);
  })

}
popUp= e => {
  this.setState({isDelete: true})
}

changeHandler= e => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e  =>{
  e.preventDefault()
  var formData = new FormData();
  formData.append("id",this.state.id)
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


  axios.post('http://localhost/sapphire/api/post/update.php',formData,config)
  .then(response=>{console.log(response)})

  console.log(this.state)


}

render(){
  console.log(this.state);
  const {brands} = this.state

 if(this.state.isEdit==true){
  console.log(this.state.name)
  return(
    
  // <form  encType="multipart/form-data">
  //     <div>
  //         <input type="number" name="id" defaultValue={this.state.id}></input>
  //     </div>
  //     <div>
  //                 <input type="text" name="name" defaultValue={this.state.name} onChange={this.changeHandler}/>

  //             </div>
  //             <div>
  //                 <input type="text" name="code" defaultValue={this.state.code}  onChange={this.changeHandler}/>
                  
  //             </div>
  //             <div>
  //                 <input type="text" name="brand" defaultValue={this.state.brand}  onChange={this.changeHandler}/>
                  
  //             </div>
  //             <div>
  //                 <input type="text" name="color" defaultValue={this.state.color}  onChange={this.changeHandler}/>
                  
  //             </div>
  //             <div>
  //                 <input type="text" name="material" defaultValue={this.state.material}  onChange={this.changeHandler}/>
                  
  //             </div>
  //             <div>
  //                 <input type="text" name="price" defaultValue={this.state.price}  onChange={this.changeHandler} />
                  
  //             </div>
  //             <div>
  //                 <input type="text" name="type" defaultValue={this.state.type}  onChange={this.changeHandler}/>
                  
  //             </div>
  //             <div>
  //                 <input type="number" name="size_id" defaultValue={this.state.size_id} onChange={this.changeHandler}/>
                  
  //             </div>
  //             <div>
  //                 <input type="number" name="category_id" defaultValue={this.state.category_id} onChange={this.changeHandler} />
                  
  //             </div>
  //             <div>
  //                 <input type="file" name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}/>
                  
  //             </div>
  //             <button onClick={this.submitHandler}>submit</button>
  // </form>
<div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px',backgroundImage: 'url(slogo.jpg)',backgroundSize:'cover'}}>
<div className="container">
            
            <h1 className="display-4" style={{ marginLeft: '210px',fontFamily:'helvatica', letterSpacing:'2px',color:'#880e4f'}}>Sapphire Update Pannel</h1>
            <hr class="my-4" ></hr>
          </div>
          <AdminUI/>
  <form  encType="multipart/form-data" style={{ marginTop:'80px', marginLeft: '300px',color:'white'}}>
  <div className="form-group" style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'20px', letterSpacing:'2px',fontWeight: 'bold'}} >Id</label>
 
    <input type="number" className="form-control col-7" name="id" defaultValue={this.state.id}  />
  </div>
 
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Name</label>
 
    <input type="text" className="form-control col-7" name="name" defaultValue={this.state.name} onChange={this.changeHandler} />
    {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Code</label>
 
    <input type="text" className="form-control col-7"  name="code" defaultValue={this.state.code}  onChange={this.changeHandler}  />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Brand</label>
 
    <input type="text" className="form-control col-7" name="brand" defaultValue={this.state.brand}  onChange={this.changeHandler} />
    {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Color</label>
 
    <input type="text" className="form-control col-7" name="color" defaultValue={this.state.color}  onChange={this.changeHandler} />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Material</label>
    <input type="text" className="form-control col-7"  name="material" defaultValue={this.state.material}  onChange={this.changeHandler} />
    {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Price</label>
    <input type="number" className="form-control col-7" name="price" defaultValue={this.state.price}  onChange={this.changeHandler} />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >Type</label>
    <input type="text" className="form-control col-7"  name="type" defaultValue={this.state.type}  onChange={this.changeHandler}/>
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Size_id</label>
    <input type="number" className="form-control col-7" name="size_id" defaultValue={this.state.size_id} onChange={this.changeHandler}  />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}} >Category_id</label>
    <input type="number" className="form-control col-7" name="category_id" defaultValue={this.state.category_id} onChange={this.changeHandler}  />
  </div>
  <div className="form-group"  style={{marginLeft:'-80px'}}>
    <label  style={{fontSize:'18px', letterSpacing:'2px',fontWeight: 'bold'}}  >File</label>
    <input type="file" className="form-control col-7"  name="file" defaultValue={this.state.image} onChange={(e)=>this.setState({file: e.target.files[0]})}  />
  </div>
 <div>
  <button type="submit" className="btn btn-primary col-7" style={{backgroundColor:'#bdbdbd',borderColor:'#bdbdbd', marginLeft:'-60px'}} 
   onClick={this.submitHandler}>Submit</button>
   </div>
  
   <button className="btn btn-primary col-7" style={{backgroundColor:'#880e4f',borderColor:'#880e4f',  marginLeft:'-60px',marginTop:'10px'}}
><Link to="/sapphire" ></Link>Back</button>

</form>
</div>
  );
     
 }

if(this.state.isDelete==true){
  console.log("delete");

return(
<div >
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button> */}
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
 
);


}

  return(     
    <div>
      <AdminUI />
    <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'10px'}}>
        <div className="container">
            
           
          <h1 className="display-4">Sapphire</h1>
          <hr class="my-4"></hr>
          <p class="lead">New Records can be added by clicking the button below.</p>
  <hr class="my-4"></hr>


  <Link to="/createSapphire" ><button type="button" className="btn btn-outline-success"><i className="plus icon"></i> Add Record</button></Link>
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
               <img src={"http://localhost/sapphire/api/post/" + brands.image}/>
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
        <div className="extra content">
        <div className="ui two buttons">
          <div type="button" className="btn btn-outline-primary" onClick={this.update.bind(this, brands)}><i class="edit outline icon"></i>Edit Record</div>
          <div type="button" className="btn btn-outline-danger"  onClick={this.delete.bind(this, brands)} ><i class="trash alternate icon"></i>Delete Record</div>
        </div>
      </div>
    
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
export default (Sapphire);

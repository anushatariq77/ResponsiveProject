import React,{Component} from "react";
import Khaadi from "./Khaadi";
import AdminUI from "./AdminUI";
import Login from "./Login";



class Home extends Component{

    componentDidMount(){
        if(!sessionStorage.getItem("userData")){
            
            this.props.history.push('/login')
        }
    }

    render(){


        
            return(
                <div>
                       
                    <AdminUI/>
             <Khaadi />
                </div>
            )
        
   
    }
}


export default Home;
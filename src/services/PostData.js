export function PostData(userData){

    let BaseUrl="http://localhost/api_authentication/api/login.php";
   
 

    return new Promise((resolve, reject) => {
        fetch(BaseUrl,{
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) =>{
           
           if(responseJson.email){
            resolve(responseJson);
            console.log(responseJson);
           }
        })
        .catch((error) => {
            reject(error);
        });
    });
}
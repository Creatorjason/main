

// async function checkName(username){
    // response = await fetch('http://127.0.0.1:8000/get_path/'+ username)
    // data = await response.json()
    // const {name} = data[0]
    // return name
// }
// 
// function dir(){
    // document.getElementById("to").setAttribute("onclick", "http://127.0.0.1:5500/web/cell.html")
// }
err = ""
function gt(){
    value = document.getElementById('in').value
    window.localStorage.setItem("username", `${value}`)
            
    if (value.length === 0){
        err = "Name cannot be blank 😎"
        document.getElementById("err").innerHTML= err
    } else{ 
         err = "Sorry, username already exist 🤫"
        return value
        }
    }

async function createUser(username){
    // if (username == checkName(username)){
        // console.log("Name taken")
    // }
    // else{
    value = document.getElementById('in').value
   
   
  
   
    response = await fetch(
      "http://127.0.0.1:8000/create_user/",{
      method : "POST",
      body : JSON.stringify({name:username}),
      headers: {
        "Content-type":"application/json; charset=UTF-8"
      }
  });
  
  

    var link = "http://127.0.0.1:5500/web/cell.html"
    if (response.status == 201){

        window.location.replace(link);
        // console.log("Created")

    }else if(response.status == 500){
        // console.log("Name already taken")
        document.getElementById("err").innerHTML= err  
    }
  }







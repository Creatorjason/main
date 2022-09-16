
const handle = async () => {
let bounty;
let cell_val = document.getElementById("cell").value
let fav_val = document.getElementById("fav").value
let range_val = document.getElementById("vol").value
let gen_val = document.getElementById("gender").value
let desc = document.getElementById("area").value

if (range_val === "1"){
    console.log("am 1")
    bounty = 5000
}
else if(range_val === "2"){
    console.log("am 2")
     bounty = 10000
    
}
else if (range_val === "3"){
    console.log("am 3")
    bounty = 15000
 
}
else if(range_val === "4"){
    console.log("am 4")
    bounty = 20000

}
else if(range_val === "5"){
    console.log("am 5")
    bounty = 25000

}
else if(range_val === "6"){
    console.log("am 6")
    bounty = 30000
  
}
if (fav_val.length === 0){
    document.getElementById("err_fav").innerHTML = "C'mon, your favorite word"
}
const response = await fetch("http://127.0.0.1:8000/create_block",{
    method: "POST",
    body: JSON.stringify(
        {
            "temp_path_id": `${cell_val}`,
            "gender": `${gen_val}`,
            "fav_word": `${fav_val}`,
            "bounty":`${bounty}`,
            "description":`${desc}`,
          
    }),
    headers: {
        "Content-type":"application/json; charset=UTF-8"
    }
   
}) 
if (response.status == 201){
    console.log("created")
    location.replace("http://127.0.0.1:5500/web/first_use_case.html")
}
else if(response.status == 400){
    document.getElementById("err_all").innerHTML = "Please refresh and re-enter values correctly"
    console.log(response)
}

}

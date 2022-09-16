const getObj = async (username) => {
    response = await fetch('http://127.0.0.1:8000/get_path/'+ username)
    data = await response.json();
    const {name, temp_path_id, balance, gatekeeper_id, 
      transaction_pool, overload, live,
       drain_input, drain_output, witness_obj_list, 
       knock_count_per_day} = data[0]
    document.getElementById("head").innerHTML = `Welcome ${name} 👋`
    document.getElementById("name").innerHTML = name
    document.getElementById("path").innerHTML = temp_path_id
    document.getElementById("bal").innerHTML = balance
    document.getElementById("gate").innerHTML = gatekeeper_id
    document.getElementById("trx").innerHTML = transaction_pool
    document.getElementById("over").innerHTML = overload
    document.getElementById("live").innerHTML = live
    document.getElementById("in").innerHTML = drain_input
    document.getElementById("out").innerHTML = drain_output
    document.getElementById("wit").innerHTML = witness_obj_list
    document.getElementById("knock").innerHTML = knock_count_per_day
    console.log(name)
  }

getObj(window.localStorage.getItem("username"))
  
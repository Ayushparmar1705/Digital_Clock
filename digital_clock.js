const time = document.querySelector("#time")



setInterval(function(){
    const d = new Date()
    let my_time = d.toLocaleTimeString();
    time.innerHTML = my_time
    
},1000)
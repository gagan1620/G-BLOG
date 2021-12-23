if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(regestration=>{
        console.log("SW Registered!");
        console.log(regestration);


    }).catch(error=>{
        console.log("SW Registration Failed!");
      
    })
}
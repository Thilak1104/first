function fetch(url){
    return new Promise(function(resolve,reject){
          console.log("Starting fetching from",url);
          setTimeout(function process() {
            let data="Dummy data";
             console.log("Completed fetching the data");
             resolve(data);   
          },4000 );
    });

}
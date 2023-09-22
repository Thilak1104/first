function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed some task")
    },3000);
    for(let i = 0; i<1000000000;i++){

    }
    console.log("End");
}

process();

console.log("TATA");
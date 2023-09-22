function fetchCustom(url,fn){
    console.log("Starting downloading from",url);
    setTimeout(function process(){
        console.log('Download completed');
        let response = "Dummy data";
        fn(response);
    },3000);
}

// const response = fetchCustom('www.google.com',function callback(response){
//     console.log("download content is",response);
//     console.log("End of file");

// });

function writeFile(data,fn){
    console.log("Started writing data",data);
    setTimeout(function process(){
        console.log("Writing completed");
        let filename= "output.text";
        fn(filename);
    },4000);
}

function upoloadFile(filename,newurl,fn){
    console.log("upload started");
    setTimeout(function process() {
        console.log("File",filename, "uploaded sucessfully on", newurl);
        let uploadResponse ="SUCCESS";
        fn(uploadResponse);
    }, 2000);
}

fetchCustom("www.google.com",function downloadCallback(response){
    console.log("Downloaded response is",response);
    writeFile(response,function writeCallback(filenameResponse){
        console.log("new file written is",filenameResponse);
        upoloadFile(filenameResponse,"www.drive.google.com",function uploadCallback(uploadResponse){
            console.log("Succesfully uploaded",upoloadFile);
        })
    })
});
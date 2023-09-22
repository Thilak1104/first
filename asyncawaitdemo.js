function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("Started downloading from",url);
        setTimeout(function processDownloading(){
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);

        }, 7000);
    });
}

function writeFile(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing",data," in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully");
            resolve(filename);
        }, 3000);
    });
}

function uploadData(file,url){
    return new Promise(function(resolve,reject){
        console.log("upload started on url",url,"filename is",file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("uploading done");
            resolve(result);
        }, 5000);
    });
}

let data = fetchData("www.datadrive.com");
let filename = writeFile(data);
let response =  uploadData("www.datadrive.com");


let downloadPromise = fetchData("www.datadrive.com");
downloadPromise.then(function processDownload(value){
    console.log("Download promise fulfilled");
    console.log(value); 
})


async function processing(){
    let downloadData = await fetchData("www.google.com");
    console.log("Downloading await completed");
    let file = await writeFile(downloadData);
    console.log("writing await completed");
    let uploadResponse = await uploadData(file,"www.drive.google.com");
    console.log("uploading await completed");
    console.log("Completed process with response:",uploadResponse);
    return true;
}

processing();























const dropArea=document.getElementById('drop-area');
const inputElement=document.getElementById('upload-file')
const fielView=document.getElementById("file-view")


dropArea.addEventListener("change",uploadFile);

function uploadFile(){
    let file=inputElement.files[0];
    fielView.innerHTML=file.name;
    
}
dropArea.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

dropArea.addEventListener('drop',(e)=>{
    e.preventDefault();
    inputElement.files=e.dataTransfer.files;
    uploadFile()

})
//https://www.youtube.com/watch?v=SgyLy6BlAcI&list=PLtMugc7g4GaqAVDZwQ_t1H6500ZGJzOgW&index=4

const messageInput = document.getElementById("message-input"); 

messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    getMessage();
})

function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value; 
    messageInput.value = ""; 

}
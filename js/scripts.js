
// Login JS
document.getElementById("loginBtn").addEventListener('click', function(e){
    e.preventDefault();
    
    let userName = document.getElementById('userName').value
    let userPassword = document.getElementById("userPassword").value
    
    if(userName === 'masum' && userPassword==='1234'){
        window.location.href = "calculatePage.html";
    }else{
        alert("Wrong password or id. Try again!!")
        document.getElementById('userName').value = ""
        document.getElementById("userPassword").value=""
    }
})


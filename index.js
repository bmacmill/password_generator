const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnPwd = document.getElementById("generatePwd")
const passwordText1 = document.getElementById("pwrd1")
const passwordText2 = document.getElementById("pwrd2")
const passwordRange = document.getElementById("password-length")
let passwordLengthValue = 5

btnPwd.addEventListener("click", function() {
       passwordText1.textContent = generatePassword()
       passwordText2.textContent = generatePassword()
    })
    

function generatePassword(){
        let generatedPwd = ""
        for(let i = 0; i < passwordLengthValue; i++){
        let rand = Math.floor(Math.random() * characters.length)
        generatedPwd += characters[rand]
    }
    return generatedPwd
}

//password range
passwordRange.addEventListener("input", (e) =>{
    passwordLengthValue = e.target.value
})


// click to copy

let copyText = document.getElementById("pwrd1")
let copyText2 = document.getElementById("pwrd2")

copyText.addEventListener("click", clickCopy)
copyText2.addEventListener("click", clickCopy)

// copy text part
function clickCopy(event) {
        /* Get the text field */
       let copyText = event.currentTarget
        navigator.clipboard.writeText(copyText.textContent);

        document.getElementById("modal").style.display = "block"
        copiedTextAlert()
}

function copiedTextAlert(){
    setTimeout(function(){
        document.getElementById("modal").style.display = "none"
    }, 2000);
}
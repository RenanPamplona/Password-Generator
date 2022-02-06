let newPassword = ""
let passwordLength = document.getElementById("value")
let passwordField = document.getElementById("password")
let passwordContainer = document.getElementById("container-password")

//Default values
passwordLength.innerText = 15
let passwordSize = 15

function changeValue(value) {
   passwordLength.innerText = value
   passwordSize = value
}

document.getElementById('button').addEventListener("click", () => {
   const includeNumbers = document.getElementById('numbers').checked
   const includeUppercased = document.getElementById('uppercased').checked
   const includeSymbols = document.getElementById('symbols').checked

   generatePassword(includeNumbers, includeUppercased, includeSymbols)
})



let numbers = "1234567890"
let lowercased = "abcdefghjiklmnopqrstuvwxyz"
let uppercased = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let symbols = "!@#$(){}[]"


function generatePassword(IncludeNumbers, IncludeUppercased, IncludeSymbols) {
   let password = ""
   let charSet = lowercased
   if(IncludeNumbers) { charSet = charSet.concat(numbers) }
   if(IncludeUppercased) { charSet = charSet.concat(uppercased) }
   if(IncludeSymbols) { charSet = charSet.concat(symbols) }

      for (let i = 0, n = charSet.length; i < passwordSize; i++) {
         password += charSet.charAt(Math.floor(Math.random() * n))
      }

   passwordContainer.classList.remove("hide")
   passwordField.innerHTML = password
   newPassword = password
}

function copyPassword() {
   navigator.clipboard.writeText(newPassword).then(() => {
      alert("Password copied to clipboard!")
   }).catch(() => {
      alert("Error")
   })
}


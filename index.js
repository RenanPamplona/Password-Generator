let newPassword = ""
let passwordLength = document.getElementById("value")
let passwordField = document.getElementById("password")
let passwordContainer = document.getElementById("container-password")
let strengthContainer = document.getElementById("strength")

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
   if (IncludeNumbers) { charSet = charSet.concat(numbers) }
   if (IncludeUppercased) { charSet = charSet.concat(uppercased) }
   if (IncludeSymbols) { charSet = charSet.concat(symbols) }

   for (let i = 0, n = charSet.length; i < passwordSize; i++) {
      password += charSet.charAt(Math.floor(Math.random() * n))
   }

   let passwordScore = checkPasswordStrenght(password)
   updateStrenght(passwordScore, strengthContainer)   

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


//I've tried to import but it wouldn't work
function updateStrenght(score, field){
   if(score <= 25){
      field.innerHTML = "Weak"
      field.classList.remove('strong')
      field.classList.remove('normal')
      field.classList.add('weak')
   }

   if(score > 25 && score <= 65){
      field.innerHTML = "Normal"
      field.classList.remove('weak')
      field.classList.remove('strong')
      field.classList.add('normal')
   }

   if(score > 65){
      field.innerHTML = "Strong"
      field.classList.remove('weak')
      field.classList.remove('normal')
      field.classList.add('strong')
   }
}

function checkPasswordStrenght(password){
   let passwordScore = 100

   passwordScore -= checkLenght(password)
   passwordScore -= checkLowercase(password)
   passwordScore -= checkUppercase(password)
   passwordScore -= checkNumbers(password)
   passwordScore -= checkSymbols(password)
   if(password.length >= 16){
      passwordScore += 20
   }

   return passwordScore
}

function checkLenght(password){
   const Passwordlength = password.length

   if(Passwordlength <= 7){
      return 40
   }

   if(Passwordlength <= 10){
      return 15
   }

   if(Passwordlength > 10){
      return 0
   }
}

function checkLowercase(password){
   const matches = password.match(/[a-z]/g) || []
   
   if(matches.length === 0){
      return 15
   }

   if(matches.length <= 2){
      return 5
   }

   if(matches.length > 2){
      return 0
   }
}

function checkUppercase(password){
   const matches = password.match(/[A-Z]/g) || []

   if(matches.length === 0){
      return 25
   }

   if(matches.length <= 2){
      return 5
   }

   if(matches.length > 2){
      return 0
   }
}

function checkNumbers(password){
   const matches = password.match(/[0-9]/g) || []

   if(matches.length === 0){
      return 25
   }

   if(matches.length <= 2){
      return 5
   }

   if(matches.length > 2){
      return 0
   }
}

function checkSymbols(password){
   const matches = password.match(/[^0-9a-zA-Z\s]/g) || []

   if(matches.length === 0){
      return 25
   }

   if(matches.length <= 2){
      return 5
   }

   if(matches.length > 2){
      return -20
   }
}
function checkPasswordStrenght(password){
   let passwordScore = 100

   passwordScore -= checkLenght(password)
   passwordScore -= checkLowercase(password)
   passwordScore -= checkUppercase(password)
   passwordScore -= checkNumbers(password)
   passwordScore -= checkSymbols(password)

   return passwordScore
}

function checkLenght(password){
   const Passwordlength = password.length

   if(Passwordlength <= 5){
      return 40
   }

   if(Passwordlength <= 10){
      return 20
   }

   if(Passwordlength > 10){
      return 0
   }
}

function checkLowercase(password){
   const matches = password.match(/[a-z]/g) || []
   
   if(matches.length === 0){
      return 20
   }

   if(matches.length <= 3){
      return 10
   }

   if(matches.length > 3){
      return 0
   }
}

function checkUppercase(password){
   const matches = password.match(/[A-Z]/g) || []

   if(matches.length === 0){
      return 20
   }

   if(matches.length <= 3){
      return 10
   }

   if(matches.length > 3){
      return 0
   }
}

function checkNumbers(password){
   const matches = password.match(/[0-9]/g) || []

   if(matches.length === 0){
      return 20
   }

   if(matches.length <= 3){
      return 10
   }

   if(matches.length > 3){
      return 0
   }
}

function checkSymbols(password){
   const matches = password.match(/[^0-9a-zA-Z\s]/g) || []

   if(matches.length === 0){
      return 20
   }

   if(matches.length <= 3){
      return 10
   }

   if(matches.length > 3){
      return 0
   }
}

export default checkPasswordStrenght
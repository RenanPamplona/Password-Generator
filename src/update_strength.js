function updateStrenght(score, field){
   if(score <= 25){
      field.innerHTML = "Weak"
      field.classList.remove('strong')
      field.classList.remove('normal')
      field.classList.add('weak')
   }

   if(score > 25 && score <= 70){
      field.innerHTML = "Weak"
      field.classList.remove('weak')
      field.classList.remove('strong')
      field.classList.add('normal')
   }

   if(score > 70){
      field.innerHTML = "Weak"
      field.classList.remove('weak')
      field.classList.remove('normal')
      field.classList.add('strong')
   }
}

export default updateStrenght
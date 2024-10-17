const listEmail = document.querySelector('.list-email')



  for (let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      const mails = response.data;
  
      console.log(mails);
      let email = mails.response
    
    console.log(email);
    
    let markup = `
    
       <li>${email}</li>
        
    `
  
    
    listEmail.innerHTML += markup
  
  
    })




    
  
  }

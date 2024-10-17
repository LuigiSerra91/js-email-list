const listEmail = document.querySelector('.list-email')

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response => {
    const mails = response.data;

    


    for (let i = 0; i < 10; i++){
        let email = mails.response
        console.log(email);
        
        let markup = `
        
           <li>${email}</li>
            
        `
      
        
      listEmail.innerHTML += markup
      
      }

  })

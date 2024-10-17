console.log('its works');




axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response => {
    const data = response.data;

    console.log(data);
    document.querySelector('.list-email').innerHTML = data.response;


  })

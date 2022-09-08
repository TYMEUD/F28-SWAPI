



let button = document.querySelector('button')

 const baseUrl = 'https://swapi.dev/api/'

const residentCallback = ({ data: people }) => buttonClicked(people)
 const errCallback = err => console.log(err)


const buttonClicked = () => { axios.get(baseUrl).then(residentCallback).catch(errCallback)
    
}

button.addEventListener('click', buttonClicked)
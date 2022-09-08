



let button = document.querySelector('button')

 const baseUrl = 'https://swapi.dev/api/planets/2'

const residentCallback = ({ data: people }) => console.log(people.residents)
 const errCallback = err => console.log(err)


const buttonClicked = () => { axios.get(baseUrl).then(residentCallback).catch(errCallback)
    
}

button.addEventListener('click', buttonClicked)
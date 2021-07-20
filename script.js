const indexBody = document.querySelector('body');

document.addEventListener("DOMContentLoaded", () =>  {
    
    const reloadButton = document.querySelector('#reload-joke-button')
    reloadButton.addEventListener('click', (e) => {
        e.preventDefault()
        getDadJoke()
    } )

    const getDadJoke = ()=> {
        let allJokes = []

        fetch("http://localhost:3000/jokes")
        .then(data => data.json())
        .then(response => displayData(response))


    }
})

const newJoke = document.querySelector('#New-Joke')
const likedJokes = document.querySelector('#Number-of-Likes')
const likeButton = document.querySelector('#like-joke-button')
const UnlikeButton = document.querySelector('#Un-like-joke-button')

function displayData(allJokes){
    let dynamicJokes = Math.floor(Math.random() * 5);
        
        newJoke.innerHTML=allJokes[dynamicJokes].text
        likedJokes.innerHTML=allJokes[dynamicJokes].likes

        likeButton.addEventListener('click', (e) => {
            e.preventDefault()
            likeButtonFunction(allJokes[dynamicJokes])
        } )
}


function likeButtonFunction(joke){
  console.log(joke.likes+=1 )
  let newJoke = joke.likes
  likedJokes.innerHTML=newJoke
  let jokeObject = {
    "likes": newJoke
   
  }
  let reqPackage = {
    headers: {'content-type': 'application/json'},
    method: 'PATCH',
    body: JSON.stringify(jokeObject)
    }
    fetch("http://localhost:3000/jokes/"+`${joke.id}`, reqPackage)
    .then(res => res.json())
    .then(res => renderUser(res))
    UnlikeButton.addEventListener("click", UnlikeButtonFunction)
}


function UnlikeButtonFunction(){
    console.log(likedJokes)
    
    likedJokes.innerHTML -= 1

    // console.log(joke.likes-=1 )
    // let newJoke = joke.likes-1
    // likedJokes.innerHTML=newJoke
    // let jokeObject = {
    //   "likes": newJoke
     
    // }
    // let reqPackage = {
    //   headers: {'content-type': 'application/json'},
    //   method: 'PATCH',
    //   body: JSON.stringify(jokeObject)
    //   }
    //   fetch("http://localhost:3000/jokes/"-`${joke.id}`, reqPackage)
    //   .then(res => res.json())
    //   .then(res => renderUser(res))
  }

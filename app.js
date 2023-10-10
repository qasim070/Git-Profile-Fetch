let fetchGit = () =>{
    // let user = document.getElementById("").value
    let nameDom = document.getElementById("git_name")
    let user = document.getElementById("login")
    fetch('https://api.github.com/users/qasim070')
    .then((data) => data.json())
    .then((res) => nameDom.innerHTML =  res.name )
    .catch( (error) => console.error('error :' , error) )
}
fetchGit()
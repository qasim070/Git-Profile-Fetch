let  data;
let  nameDom;
let  place;
let  follower;
let  following;
let  repo;
let  desc;
let  git_link ;
let  avatar ;


let setData = () =>{

    nameDom = document.getElementById("git_name")
    place = document.getElementById("location")
    follower = document.getElementById("follower-count")
    following = document.getElementById("following-count")
    repo = document.getElementById("repo-count")
    desc = document.getElementById("desc")
    avatar = document.getElementById("avatar")
    git_link = document.getElementById("link_it")
    data = fetch('https://api.github.com/users/qasim070')
    .then((data) => data.json())
    .then((res) => res)
    .catch( (error) => console.error('error :' , error) )




   
    if(data.then((response) =>  response.message == 'Not Found') ){
        swal({icon: 'error',title: 'Oops...',text: 'User Not found!!',}) 
    }else{
        data.then((response) => nameDom.innerHTML = response.name );
        data.then((response) => avatar.src = response.avatar_url );
        data.then((response) => follower.innerHTML = response.followers );
        data.then((response) => following.innerHTML = response.following );
        data.then((response) => repo.innerHTML = response.public_repos );
        data.then((response) => place.innerHTML = response.location );
        data.then((response) => desc.innerHTML = response.bio );
        data.then((response) => git_link.href = response.url );
        document.getElementById("profile-card").style.opacity = "1";
    }
}


// let check = () => {
//     alert('hhh');
// }
// function swalcheck(){
//     swal({icon: 'error',title: 'Oops...',text: 'User Not found!!',}) 
// }

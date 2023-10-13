let data;
let nameDom;
let place;
let follower;
let following;
let repo;
let desc;
let git_link;
let avatar;
let input;

nameDom = document.getElementById("git_name");
place = document.getElementById("location");
follower = document.getElementById("follower-count");
following = document.getElementById("following-count");
repo = document.getElementById("repo-count");
desc = document.getElementById("desc");
avatar = document.getElementById("avatar");
git_link = document.getElementById("link_it");

const setData = () => {
    input = document.getElementById("git_input").value;

    fetch(`https://api.github.com/users/${input}`)
        .then((response) => {
            if (response.status === 404) {
                return response.json().then((errorData) => {
                    throw new Error(errorData.message); 
                });
            }
            return response.json();
        })
        .then((data) => {
            nameDom.innerHTML = data.name;
            avatar.src = data.avatar_url;
            follower.innerHTML = data.followers;
            following.innerHTML = data.following;
            repo.innerHTML = data.public_repos;
            place.innerHTML = data.location;
            desc.innerHTML = data.bio;
            git_link.href = data.html_url;
            document.getElementById("profile-card").style.opacity = "1";
        })
        .catch((error) => {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'User Not found!',
            });
            console.error('Error:', error);
        });
};

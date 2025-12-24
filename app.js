let userContainer = document.querySelector('.userContainer')
let searchInput = document.querySelector('#searchInput')

const users = [
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIV6vkqXTUC0V4Vff9Dny06X4MYn0uG8XAg&s',
        name: 'Bruce Wayne',
        email: 'bruce@wayne.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFAYpDi8rMTvjC99bjqEkphlyNzIBvLLfIg&s',
        name: 'Levi',
        email: 'levi@ackerman.com'
    },
     {
        profileUrl: 'https://i.pinimg.com/1200x/13/46/e7/1346e73b76079ccee23da8ee865fdb39.jpg',
        name: 'John Doe',
        email: 'john@doe.com'
    },
    {
        profileUrl: 'https://i.pinimg.com/736x/2f/e6/75/2fe675e72c3ce545ae2d46ee88d29276.jpg',
        name: 'Huraira Ansari',
        email: 'hurairaansari@instagram.com'
    },
     {
        profileUrl: 'https://i.pinimg.com/736x/3d/6f/22/3d6f221900358baf8098b9d367adacb3.jpg',
        name: 'Abdul',
        email: 'abdul@facebook.com'
    },
     {
        profileUrl: 'https://i.pinimg.com/736x/a4/0d/cd/a40dcdadc6bb804c126f158d54eec2c7.jpg',
        name: 'Sam',
        email: 'sam@google.com'
    },
     {
        profileUrl: 'https://i.pinimg.com/1200x/45/18/d9/4518d914dc0be4f3b2a469928daf25fa.jpg',
        name: 'James',
        email: 'james@pinterest.com'
    },
    {
        profileUrl: 'https://i.pinimg.com/736x/07/7f/3e/077f3ec06547d09ff86620ebf5d16cf8.jpg',
        name: 'Harry',
        email: 'harry@yahoo.com'
    },
     {
        profileUrl: 'https://i.pinimg.com/736x/b9/c2/5b/b9c25bb1cb6ff3ca3f89e4e6d796c550.jpg',
        name: 'Michael Jordan',
        email: 'michael@jordan.com'
    },
  
]

users.map(function(obj){
    let {profileUrl,name,email} = obj

    let divElem = document.createElement('div')
    divElem.className = 'userItem'
    divElem.innerHTML = `
           <div class="image">
                    <img src=${profileUrl}>
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>
    `
userContainer.append(divElem)
})

function renderUsers(arr){
    userContainer.innerHTML = ''
    arr.map(function(obj){
    let {profileUrl,name,email} = obj

    let divElem = document.createElement('div')
    divElem.className = 'userItem'
    divElem.innerHTML = `
           <div class="image">
                    <img src=${profileUrl}>
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>
    `
userContainer.append(divElem)
})
}

function handleSearch(e){
    let searchValue = e.target.value
    let filterUsers = users.filter(obj=>{
        return (obj.name.toLowerCase().includes(searchValue.toLowerCase()))||
        obj.email.toLowerCase().includes(searchValue.toLowerCase())
    })
    renderUsers(filterUsers)
}

searchInput.addEventListener('input',handleSearch)
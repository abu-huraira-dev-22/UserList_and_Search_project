let userContainer = document.querySelector('.userContainer')

const arr = [
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIV6vkqXTUC0V4Vff9Dny06X4MYn0uG8XAg&s',
        name: 'Bruce Wayne',
        email: 'bruce@wayne.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFAYpDi8rMTvjC99bjqEkphlyNzIBvLLfIg&s',
        name: 'Levi Ackerman',
        email: 'levi@ackerman.com'
    },
     {
        profileUrl: '',
        name: 'Lelouch vi britannia',
        email: 'lelouch@britannia.com'
    },
]

arr.map(function(obj){
    let {profileUrl,name,email} = obj

    let divElem = document.createElement('div')
    divElem.className = 'userItem'
    divElem.innerHTML = `
           <div class="image">
                    <img src="${profileUrl}">
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>
    `
userContainer.append(divElem)
})
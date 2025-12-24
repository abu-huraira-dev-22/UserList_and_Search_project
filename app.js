let userContainer = document.querySelector('.userContainer')

const arr = [
    {
        profileUrl: '2wCEAAkGBxMSEhUSEhMVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0rKy0tLS0tKy0tLSstLS0tLS0rLS0tKy0tLS0tLS0tLS0rKy0tKy0tLS0rKy0rLf',
        name: 'Bruce Wayne',
        email: 'bruce@wayne.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFAYpDi8rMTvjC99bjqEkphlyNzIBvLLfIg&s',
        name: 'Levi Ackerman',
        email: 'levi@ackerman.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgCXTeeoBphZcsGL7fIPUYkbBZTWAwNz8Ug&s',
        name: 'Lelouch vi britannia',
        email: 'lelouch@britannia.com'
    },
]

arr.map(function(obj){
    let elem = document.createElement('div')
    elem.className = 'userItem'
    elem.innerHTML = `
           <div class="image">
                    <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQWSYe1mX-RUjCpTUxaKNTaMpgtgINKyBiiLuLQ5yZKJ3dO5zbOtbHnQbhn4TNxjG8KGOnE77krtUCewKC4s0cxZ6viSCseq9mYyJZzIWgWzHvqAY_Zo07ExfjSfTDtZlQWkgj1oZbjL1UOX_IE09Y3ApvY.jpg?r=d1b" alt="Error loading image...">
                </div>
                <div class="userDetails">
                    <h3>Thomas Shelby</h3>
                    <p>thomas@shelby.com</p>
                </div>
            </div>
    `

})
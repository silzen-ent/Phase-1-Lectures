document.addEventListener("DOMContentLoaded", ()=> {
        
    // fetch('http://localhost:3000/stores/1')
    // .then(res => res.json())
    // .then(store => {
    //     renderHeader(store)
    //     renderFooter(store)
    // })
    // .catch(e => console.error(e))

    // fetch('http://localhost:3000/books')
    // .then(res => res.json())
    // .then(books => books.forEach(renderBookCard))
    // .catch(e => console.error(e))

    function fetchResource(url){
        return fetch(url)
        .then(res => res.json())
    }

    fetchResource('http://localhost:3000/stores/1')
        .then(store => {
            renderHeader(store)
            renderFooter(store)
        })
        .catch(e => console.error(e))
    
        fetchResource('http://localhost:3000/books')
        .then(books => books.forEach(renderBookCard))
        .catch(e => console.error(e))

    function renderHeader(store){
        return document.querySelector('h1').textContent = store.name
    }
    
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
        return footerDivs
    }
    
    const renderBookCard = (cardData) => {
        console.log(cardData)
        const li = document.createElement('li')
        const h3 = document.createElement("h3")
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const image = document.createElement('img')
        const btn = document.createElement('button')
        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$ ${cardData.price}`
        btn.textContent = "Delete"
        image.src = cardData.imageUrl
        li.className = 'list-li'
        li.append(h3, pAuthor, pPrice, image, btn)
        document.querySelector('#book-list').append(li)
        btn.addEventListener('click', (e) => {li.remove()})
    }
    
    document.querySelector("#book-form").addEventListener("submit", (e) => {
        e.preventDefault()
        const book = {
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory: e.target.inventory.value,
            reviews: []
        }
        renderBookCard(book)
    })
})

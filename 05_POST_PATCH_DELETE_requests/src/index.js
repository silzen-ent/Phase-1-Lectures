document.addEventListener("DOMContentLoaded", ()=> {

    // fetch('http://localhost:4000/books')
    // .then((res)=> res.json())
    // .then((book) => book.forEach(renderBookCard))
    // // .then((book) => renderBookCard(book))
    // .catch(e => console.log(e))

    // fetch('http://localhost:4000/stores/1')
    // .then((response)=> response.json())
    // .then(store => {
    //     renderHeader(store)
    //     renderFooter(store)
    // })
    //fetching diffrent urls
    function fetchResource(url){
        return fetch(url)
        .then(response => response.json())
    }
    fetchResource("http://localhost:4000/stores")
    .then(store => {
        const store_list = document.createElement("ul")
        const footer = document.querySelector("#f1")
        footer.append(store_list)
        store_list.className = "store-menu"
        store.forEach((s)=> {
            console.log(s)
            const store_li = document.createElement("li")
            store_li.textContent = s.name
            store_list.append(store_li)
            store_li.addEventListener("click", ()=>{
                renderFooter(s)
                renderHeader(s)
            })
        })
        renderFooter(store)
        renderHeader(store)
    })
    .catch(e => console.error(e))

    fetchResource("http://localhost:4000/books")
    .then(book => book.forEach(renderBookCard))
    .catch(e => console.error(e))







    function renderHeader(bookStore){
        return document.querySelector('h1').textContent = bookStore.name
    }
    
    function renderFooter(bookStore){
        const footerDivs = document.querySelectorAll('footer div')
        console.log(footerDivs)
        footerDivs[0].textContent = bookStore.name
        footerDivs[1].textContent = bookStore.address
        footerDivs[2].textContent = bookStore.hours
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
    // bookStore.inventory.forEach(renderBookCard)
    
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
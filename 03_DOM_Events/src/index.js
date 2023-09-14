document.addEventListener("DOMContentLoaded", ()=> {
    function renderHeader(){
        return document.querySelector('h1').textContent = bookStore.name
    }
    
    console.log(renderHeader())
    
    function renderFooter(){
        const footerDivs = document.querySelectorAll('footer div')
        console.log(footerDivs)
        footerDivs[0].textContent = bookStore.name
        footerDivs[1].textContent = bookStore.address
        footerDivs[2].textContent = bookStore.hours
        return footerDivs
    }
    console.log(renderFooter())
    //* 1. use a forEach to iterate over BookStore inventory.
    //  2. Pass the forEach an anonymous callback that takes the inventory data and creates an li, with an h3 tag, 2 p tags, and image tag.
    // 3. Add the cardData content to the tags.
    // 4. Append li to the DOM through the ul with the id of book-list
    // bookStore.inventory.forEach((cardData) => {
    //     console.log(cardData)
    //     const li = document.createElement('li')
    //     const h3 = document.createElement("h3")
    //     const pAuthor = document.createElement('p')
    //     const pPrice = document.createElement('p')
    //     const image = document.createElement('img')
    //     const btn = document.createElement('button')
    //     h3.textContent = cardData.title
    //     pAuthor.textContent = cardData.author
    //     pPrice.textContent = `$ ${cardData.price}`
    //     btn.textContent = "Delete"
    //     image.src = cardData.imageUrl
    //     li.className = 'list-li'
    //     li.append(h3, pAuthor, pPrice, image, btn)
    //     document.querySelector('#book-list').append(li)
    // })
    //* Refactor to make the anonymous callback its own function so it can be reused later. 
    
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
    bookStore.inventory.forEach(renderBookCard)
    
    document.querySelector('label').addEventListener('click', (event) => console.log(event))
    
    // const form = document.querySelector("#book-form")
    // form.addEventListener()
    
    // function handleForm(e){
    //     console.log(e)
    //     e.preventDefault()
    //     const book = {
    //         title: e.target.title.value,
    //         author: e.target.author.value,
    //         price: e.target.price.value,
    //         imageUrl: e.target.imageUrl.value,
    //         inventory: e.target.inventory.value,
    //         reviews: []
    //     }
    //     console.log(book.title)
    //     debugger;
    //     renderBookCard(book)
    // }
    // document.querySelector("#book-form").addEventListener("submit", handleForm)
    
    document.querySelector("#book-form").addEventListener("submit", (e) => {
        console.log(e)
        e.preventDefault()
        const book = {
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory: e.target.inventory.value,
            reviews: []
        }
        console.log(book.title)
        debugger;
        renderBookCard(book)
    })
    
    // document.querySelector("#book-form").addEventListener("submit", function(e){
    //     console.log(e)
    //     e.preventDefault()
    //     const book = {
    //         title: e.target.title.value,
    //         author: e.target.author.value,
    //         price: e.target.price.value,
    //         imageUrl: e.target.imageUrl.value,
    //         inventory: e.target.inventory.value,
    //         reviews: []
    //     }
    //     console.log(book.title)
    //     debugger;
    //     renderBookCard(book)
    // })
    
    
})

function Book(title, pages, tags, author){
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function addOnStock(quantidade){
        this.inStock += quantidade;
    }
    this.save = function(){
        //salva no BD
    }
}
const author = {name: "Christopher Paolini"}
const tags = ["Fantasy" , "Adventure"]

const eragon = new Book()
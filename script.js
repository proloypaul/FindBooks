// get search text value 
const getSearchText = () => {
    console.log("onclick done");
    const inputText = document.getElementById("inputText");
    const getInputText = inputText.value 
    inputText.value = "";

    // check inputText
    if(getInputText.length === 0 || getInputText === ""){
        // console.log("Write book name");
        const searchResult = document.getElementById("searchResult")
        searchResult.textContent = "";
        const div = document.createElement("div");
        div.innerHTML = `
            <p class="wrongInput">Write your book name in search box...</p>
        `
        searchResult.appendChild(div)

    }else{
        const url = `http://openlibrary.org/search.json?q=${getInputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispalyBook(data.docs))
    };
    
};


// display search result 
const dispalyBook = books => {
    // console.log(books)
    const searchResult = document.getElementById("searchResult");
    searchResult.textContent = "";
    let count = 1;

    // if data is not this Api
    if(books.length === 0){
        // console.log("Data ney")
        const div = document.createElement("div");
        div.innerHTML = `
            <p class="wrongInput">Your input incorrect please write a book name...</p>
        `
        searchResult.appendChild(div);
    };
    books?.forEach(book => {
        // console.log(book);
        const totalCount = count++;
        // console.log(totalCount);
        // create div element
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="book">
                <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="Empty!">
                <div class="bookTitle">
                    <h1>Name: ${book.title}</h1>
                    <h3>Writer: ${book.author_name[0] ? book.author_name[0] : "Not find"}</h3>
                    <h3>Publisher: ${book.publisher[0] ? book.publisher[0] : "Not find"}</h3>
                    <h3>First Publish: ${book.first_publish_year ? book.first_publish_year: "Not find"}</h3>
                    <h3>Result Number: ${totalCount} </h3>
                </div>
            </div>
        `
        searchResult.appendChild(div);

    });
}
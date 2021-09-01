// get search text value 
const getSearchText = () => {
    console.log("onclick done");
    const inputText = document.getElementById("inputText");
    const getInputText = inputText.value 
    inputText.value = "";

    // check inputText
    if(getInputText.length === 0 || getInputText === ""){
        console.log("Write book name");
    }else{
        const url = `http://openlibrary.org/search.json?q=${getInputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispalyBook(data.docs))
    };
    
};

const dispalyBook = books => {
    // console.log(books)
    const searchResult = document.getElementById("searchResult");
    searchResult.textContent = "";
    books.forEach(book => {
        console.log(book);
        // create div element
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="book">
                <img src="javascript.jpg" alt="Empty!">
                <div class="bookTitle">
                    <h1>Name: javascript</h1>
                    <h3>Writer: jankar Mahmmud</h3>
                    <h3>Publisher: programming hero, IT sector</h3>
                    <h3>First Publish: 2000</h3>
                </div>
            </div>
        `
        searchResult.appendChild(div);

    });
}
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
    books.forEach(book => console.log(book.author_name[0]));
}
function getBookTemplate(indexBook) {
  return `<div id="book_card${indexBook}" class="book_Cards"><div class="book_Cards_h2_Container"><h2>${books[indexBook].name}</h2></div><div class="book_Cards_Img_Container"><img src="assets/book-1294406_1280.png" alt=""></div><div class="price_likes_Container"><div class="book_Price"><p>${books[indexBook].price} €</p></div><div class="likes"><p id = "likeCounter${indexBook}">${books[indexBook].likes}</p><p id="heart${indexBook}"><svg onclick="likeUnlike(${indexBook})" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
${books[indexBook]}</svg></p></div></div><div class="book_description_container"><div class="book_descriptions"><p>Author</p><p>Erscheinungsjahr</p><p>Genre</p></div><div class="book_desicription_values"><p>: ${books[indexBook].author}</p><p>: ${books[indexBook].publishedYear}</p><p>: ${books[indexBook].genre}</p></div></div><div class="comment_section"><h3>Kommentare :</h3><table id="comment_window${indexBook}"><tbody></tbody></table></div><div class = "comments_input"><input type="text" id="comment_input${indexBook}" class="input_bar" placeholder="Dein Kommentar"</div><button onclick = renderNewComment(${indexBook})> kommentieren</button></div>
`;
}

function getCommentTemplate(indexBook, indexComment) {
  return `<tr class = "comment" id = "comment${indexComment}"><td><p class = "comment_name${indexComment}" id = "comment_name${indexComment}">[${books[indexBook].comments[indexComment].name}]: </p></td><td><p id = "comment_text${indexComment}">${books[indexBook].comments[indexComment].comment}</td></tr>`;
}

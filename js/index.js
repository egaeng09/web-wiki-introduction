console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

window.onload = function(){
  document.querySelector('.enter_btn').addEventListener('click', ( ) => {
    click_add_button();
  });

  function click_add_button(){
    if(confirm("등록하시겠습니까?")){
      const comment = document.querySelector('.comment_box').value;
      if (comment.length === 0) {
        alert("댓글을 입력해주세요.")
      }

      else {
        alert("댓글이 등록되었습니다.");
        add_comment(comment);
        document.querySelector('.comment_box').value = '';
      }
    }
  }

  function add_comment(comment) {
    const body = document.querySelector('li').cloneNode(true);
    body.querySelector('.comment-content').textContent = comment
    document.querySelector('ul').appendChild(body);
  }

}

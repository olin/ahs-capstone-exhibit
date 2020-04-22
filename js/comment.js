var comment_links = document.getElementsByClassName("Page__comment-link");
var comments = document.getElementsByClassName("Page__comment");

function onClick (e) {
    var id_num = this.id.split("-")[2];
    var matching_comment_id = "comment-" + id_num;
    this.style.backgroundColor ="#ffe376";
    document.getElementById(matching_comment_id).style.backgroundColor = "#ffe376";
}

function clickClear(e) {
    var target_id = e.target.id.split("-")[2];
    for (var i = 0; i < comments.length; i++ ) {
        if (comments[i].id.split("-")[2] != target_id) {
            this.style.backgroundColor ="#fffdbe";
        }
    }

    for (var j = 0; j < comment_links.length; j++ ) {
        if (comment_links[j].id.split("-")[2] != target_id) {
            this.style.backgroundColor ="#fffdbe";
        }
    }
}

for (var i = 0; i < comments.length; i++) {
    var className = i % 2 ? "left" : "right";
    console.log(comments[i]);
    console.log(i % 1);
    comments[i].classList.add(className);
}

for (var j = 0; j < comment_links.length; j++) {
    comment_links[j].onclick = onClick;
}

document.addEventListener("click", clickClear);
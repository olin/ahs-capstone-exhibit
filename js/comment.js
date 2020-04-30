var comment_links = document.getElementsByClassName("Page__comment-link");
var comments = document.getElementsByClassName("Page__comment");

function onClick (e) {
    var id_num = this.id.split("-")[2];
    var matching_comment_id = "comment-body-" + id_num;
    this.style.backgroundColor ="#ffe376";
    document.getElementById(matching_comment_id).style.backgroundColor = "#ffe376";
    document.getElementById(matching_comment_id).style.zIndex = 1;
}

function onClickBody (e) {
    var id_num = this.id.split("-")[2];
    var matching_comment_id = "comment-link-" + id_num;
    this.style.backgroundColor ="#ffe376";
    this.style.zIndex = 1;
    document.getElementById(matching_comment_id).style.backgroundColor = "#ffe376";
}

function clickClear(e) {
    var target_id = e.target.id.split("-")[2];
    for (var i = 0; i < comments.length; i++ ) {
        if (comments[i].id.split("-")[2] != target_id) {
            comments[i].style.zIndex = 0;
            comments[i].style.backgroundColor ="#fffdbe";
        }
    }

    for (var j = 0; j < comment_links.length; j++ ) {
        if (comment_links[j].id.split("-")[2] != target_id) {
            comment_links[j].style.backgroundColor ="#fffdbe";
        }
    }
}

for (var i = 0; i < comments.length; i++) {
    var className = i % 2 ? "left" : "right";
    comments[i].classList.add(className);
    comments[i].onclick = onClickBody;
}

for (var j = 0; j < comment_links.length; j++) {
    comment_links[j].onclick = onClick;
}

document.addEventListener("click", clickClear);
var post_content = document.getElementsByClassName("post-content")[0];

if (post_content) {
  var facts_p = post_content.getElementsByTagName("p")[0];
  facts_p.setAttribute("style", "text-align: center; padding-bottom: 2%;");
  var facts_text = facts_p.innerHTML;
} else {  // not on about.md, must be on projects.html
  facts_p = document.getElementsByClassName("measure")[0].getElementsByTagName("p")[0];
  var facts_text = facts_p.innerHTML;
}

// we won't remove the facts <p> tag we will just remove what's inside it
var new_html = "";

facts = facts_text.split("@@ ");

facts.forEach(function(fact) {
  if (fact.replace(/\s/g, '').length) {
    var regex = /(.*)\[(.*)\]\((.*)\)(.*)/; // checks for markdown hyperlink
    var matches = regex.exec(fact);

    if (matches) {
      var hyperlink = "<a href='" + matches[3] + "'>" + matches[2] + "</a>"
      new_html += ("<span id='quick_fact'>" + matches[1] + hyperlink + matches[4] + "</span>");
    } else {
      new_html += ("<span id='quick_fact'>" + fact + "</span>")
    }
  }
});

console.log(new_html);

facts_p.innerHTML = new_html;

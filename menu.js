document.write('\
\
<div id="navigate">\
<h2 class="hide">Menu:</h2>\
<ul>\
	<li><a href="index.html">Home</a></li>\
	<li><a href="news.html">News</a></li>\
	<li><a href="publications.html">Publications</a></li>\
	<li><a href="collaborators.html">Collaborators</a></li>\
	<li><a href="editorial.html">Editorial</a></li>\
	<li><a href="workshops.html">Workshops</a></li>\
	<li><a href="publishing.html">Publishing</a></li>\
	<li><a href="history.html">History</a></li>\
	<li><a href="students.html">Students</a></li>\
	<li><a href="teaching.html">Teaching</a></li>\
</ul>\
</div>\
\
');
document.addEventListener("DOMContentLoaded", function () {
  let currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  // Highlight Programme for the extended programme too.
  if (currentPage === "extended-programme.html") {
    currentPage = "programme.html";
  }

  document.querySelectorAll("#navigate a").forEach(function (link) {
    const linkedPage =
      new URL(link.href).pathname.split("/").pop() || "index.html";

    if (linkedPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
});

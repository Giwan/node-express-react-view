exports.home = function(request, response) {
  response.render("index", { title: "App title"});
};
Templates = {};

Templates.contactLoad = [
    "<h2> {{contatos.0.nome}} </h2>",
    "<ul>",
        "<li> Email: {{contatos.0.email}} </li>",
        "<li> Phone: {{contatos.0.tel}} </li>",
    "</ul>",
    "<p>{{resume contatos.[0]}}</p>"
].join("\n");

Templates.contactList = [
  "<h2> {{nome}} </h2>",
  "<ul>",
      "<li> Email: {{email}} </li>",
      "<li> Phone: {{tel}} </li>",
  "</ul>",
  "<p>{{resume_l nome email tel}}</p>"
].join("\n");

Handlebars.registerHelper('resume', function(obj) {
  //return new Handlebars.SafeString(
    return obj.nome + " <" + obj.email + "> - " + obj.tel;
  //);
});

Handlebars.registerHelper('resume_l', function(n, e, t) {
  //return new Handlebars.SafeString(
    return n + " <" + e + "> - " + t;
  //);
});

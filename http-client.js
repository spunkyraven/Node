let http = require("http");

let url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding("utf8");

  response.on("error", function (err) {
    console.error(err);
  });

  response.on("data", function (data) {
    console.log(data);
  });
});

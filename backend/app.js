var express = require('express');
var app = express();

app.use(express.urlencoded({extended: true}));

// Tukaj pridejo metode za backend



//

app.get('/', function(req, res) {
    res.send("Backend za opsi deluje");
});

app.listen(3000);
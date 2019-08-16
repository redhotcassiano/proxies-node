const proxy = require('redbird')({port:80});

proxy.register("api.megaredhot.com", "http://18.220.33.221:8080");


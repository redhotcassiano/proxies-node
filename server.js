const proxy = require('redbird')({port:80});

proxy.register("http://DOMAIN", "http://DOMAIN:8080");


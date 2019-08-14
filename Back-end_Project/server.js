var http = require("http"),
    fs = require("fs");


    http.createServer(function(req, res){
        if(req.url.indexOf("favicon.ico") > 0) {return;}

        fs.readFile ("./index.html", function(err, html){
            var html_string = html.toString();
            //expresion regular que busca en el HTML donde haya {contenido}
            var variables = html_string.match( /[^\{\}]+(?=\})/g);
            var name = "Dani";
            var guy = "Nico";
            //iteramos sobre las variables {} para asi dar la correcta
            for(var i = 0; i < variables.length; i++){
                var value = eval(variables[i]); //evaluando cual es la variable requerida asi se remplaza en la proxima linea de codigo
                html_string = html_string.replace("{"+variables[i]+"}", value);
            }
            // var mi_boton = document.getElementById("my_b");
            
            // mi_boton.onclick= function(){hola}
            // function hola(){
            //     document.getElementById("my_b").innerHTML= "HELLOOO";
            // }

            res.writeHead(200, {"Content-type": "text/html"});
            console.log("got a request...")
            res.write(html_string);
            res.end();
        
    });
}).listen(8080);



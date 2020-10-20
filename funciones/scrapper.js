const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

function buscar(){
    
    request('https://www.computrabajo.com.co/trabajo-de-panadero?q=panadero',(err, res , body) =>{
        if (!err && res.statusCode == 200){ // si no hay error entonces ..
            let $ = cheerio.load(body);// me carga el cuerpo de la pagina
            let titulos = $('a.js-o-link','#p_ofertas').toArray();// se lleva todos los titulos 
            let desc = $('p','#p_ofertas').toArray();// se lleva todos las descripciones 
            let links = [];
            $('a.js-o-link','#p_ofertas').each(function(){
                links.push($(this).attr('href'));// se lleva todos los links
            })
            console.log(links.toString())        
        }
    })
    
}
function getTitulos(){
    return titulos;
}
function getDesc(){
    return desc;
}
function getLinks(){
    return links;
}
buscar();
module.exports={buscar,getDesc,getLinks,getTitulos}

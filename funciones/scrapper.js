const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');
var links = [];
var titulos = [];
var desc = [];
function buscar() {

    request('https://www.computrabajo.com.co/trabajo-de-panadero?q=panadero', (err, res, body) => {

        if (!err && res.statusCode == 200) { // si no hay error entonces ..
            let $ = cheerio.load(body);// me carga el cuerpo de la pagina

            $('a.js-o-link', '#p_ofertas').each(function () {
                titulos.push($(this).text());// se lleva todos los links
            })
            $('p', '#p_ofertas').each(function () {
                desc.push($(this).text());// se lleva todos los links
            })
            $('a.js-o-link', '#p_ofertas').each(function () {
                links.push($(this).attr('href'));// se lleva todos los links
            })
        }
    })

}
function getTitulos() {
    return titulos;
}
function getDesc() {
    return desc;
}
function getLinks() {
    return links;
}
buscar();
module.exports = { buscar, getDesc, getLinks, getTitulos }

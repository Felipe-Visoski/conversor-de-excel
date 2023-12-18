const { table } = require("console");
var Reader = require("./Reader");
var Processor = require("./processor");
var Table = require("./table");
var HtmlParser = require("./HtmlParser");




var leitor = new Reader();



async function main(){
    var dados = await leitor.Read("./usuarios.csv");
    var dadadosprocessados = Processor.Process(dados);

    var usuarios = new Table(dadadosprocessados);
   var html = await HtmlParser.Parse(usuarios);
   console.log(html);
}
main();
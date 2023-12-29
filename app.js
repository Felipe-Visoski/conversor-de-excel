const { table } = require("console");
var Reader = require("./Reader");
var Processor = require("./processor");
var Table = require("./table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFwriter = require("./PDFwriter");





var leitor = new Reader();
var escritor = new Writer();



async function main(){
    var dados = await leitor.Read("./usuarios.csv");
    var dadadosprocessados = Processor.Process(dados);

    var usuarios = new Table(dadadosprocessados);
   var html = await HtmlParser.Parse(usuarios);
   escritor.Write(Date.now()+".html",html);
   PDFwriter.writepdf(Date.now()+".PDF",html);
   //console.log(html);
}
main();
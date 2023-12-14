var Reader = require("./Reader");
var Processor = require("./processor")



var leitor = new Reader();



async function main(){
    var dados = await leitor.Read("./usuarios.csv");
    var dadadosprocessados = Processor.Process(dados);
}
main();
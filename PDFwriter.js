var pdf = require("html-pdf")

class PDFwriter{
    static writepdf(filename, html){
        pdf.create(html,{}).toFile(filename,(err)=>{});
    }

}

module.exports = PDFwriter;
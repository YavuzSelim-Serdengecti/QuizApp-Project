function Soru(sorumetni, cevapsecenekleri, dogrucevap)
{
    this.sorumetni = sorumetni;
    this.cevapsecenekleri = cevapsecenekleri;
    this.dogrucevap = dogrucevap;
    
} 
Soru.prototype.cevabikontrolet = function(cevap)
{
    return cevap === this.dogrucevap;
}
let sorular = [
    new Soru("1-hangisi js paket yönetim uygulamasıdır ?", { a : "typescript", b : "node.js",c : "Npm"}, "c"),
    new Soru("2-hangisi js paket yönetim uygulamasıdır ?", { a : "typescript", b : "node.js",c : "Npm"}, "c"),
    new Soru("3-hangisi js paket yönetim uygulamasıdır ?", { a : "typescript", b : "node.js",c : "Npm"}, "c"),
    new Soru("4-hangisi js paket yönetim uygulamasıdır ?", { a : "typescript", b : "node.js",c : "Npm"}, "c")
];
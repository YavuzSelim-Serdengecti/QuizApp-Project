function Quiz(sorular)
{
    this.sorular = sorular;
    this.soruindex = 0;
    this.dogrucevapsayisi = 0;
}

Quiz.prototype.sorugetir = function()
{
    return this.sorular[this.soruindex];
}
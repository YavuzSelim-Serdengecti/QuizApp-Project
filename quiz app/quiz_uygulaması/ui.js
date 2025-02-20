// document.querySelector(".btn-start").addEventListener("click", function()
// {
//     document.querySelector(".quiz_box").classList.add("active");
//         sorugoster(quiz.sorugetir());
//         sorusayisigoster(quiz.soruindex + 1, quiz.sorular.length);
//     document .querySelector(".next-btn").classList.remove("show");
// })    // BU ŞEKİLDE DE OLUR AMA DEĞİŞİKLİK YAPTIĞIMIZDA DAHA KOLAY OLSUN DİYE ALTTAKİ GİBİ KULLANMAK MANTIKLI

function UI()
{
    this.btn_start = document.querySelector(".btn-start"),
    this.next_btn = document .querySelector(".next-btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option-list"), 
this.correcticon = ' <div class="icon"><i class="fas fa-check"></i></div>',
this.incorrecticon = ' <div class="icon"><i class="fas fa-times"></i></div>'

}
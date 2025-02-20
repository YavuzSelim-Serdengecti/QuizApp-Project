const quiz = new Quiz(sorular); // const yerine var let gibi türlerde kullanılabilir

document.querySelector(".btn-start").addEventListener("click", function()
{
    document.querySelector(".quiz_box").classList.add("active");
        sorugoster(quiz.sorugetir());
        sorusayisigoster(quiz.soruindex + 1, quiz.sorular.length);
    document .querySelector(".next-btn").classList.remove("show");
})
document.querySelector(".next-btn").addEventListener("click", function()
{
    if(quiz.sorular.lenght != quiz.soruindex)
    {
        document.querySelector(".quiz_box").classList.add("active");
        sorugoster(quiz.sorugetir());
        sorusayisigoster(quiz.soruindex + 1, quiz.sorular.length);
        document .querySelector(".next-btn").classList.remove("show");
    quiz.soruindex +=1;
    }   
    else
    {
        console.log("quiz bitti");
        document.querySelector(".score_box").classList.add("active");
    }
})
const option_list = document.querySelector(".option-list"); // consolede optionlar üzerinde gezerek tek tek ele alabilme
const correcticon = ' <div class="icon"><i class="fas fa-check"></i></div>';
const incorrecticon = ' <div class="icon"><i class="fas fa-times"></i></div>';
function sorugoster(soru)
{
    let question = `<span>${soru.sorumetni}</span>`;    
    let option = '';

    for(let cevap in soru.cevapsecenekleri)
    {
        option +=

        `
              <div class = "option">
              <span><b>${cevap}</b>: ${soru.cevapsecenekleri[cevap]}</span>
              </div>
        `;
    }

document.querySelector(".question-text").innerHTML = question;
option_list.innerHTML = option;

const options = option_list.querySelectorAll(".option");

for(let opt of options)
  {
    opt.setAttribute("onclick", "optionSelected(this)")
  }
}
function optionSelected(options)
{
    let cevap = options.querySelector("span b").textContent;
    let soru = quiz.sorugetir();

    if(soru.cevabikontrolet(cevap))
    {
        quiz.dogrucevapsayisi +=1;
        options.classList.add("correct");
        options.insertAdjacentHTML("beforeend", correcticon);
    }
    else
    {
        options.classList.add("incorrect");
        options.insertAdjacentHTML("beforeend", incorrecticon);
    }
    for(let i = 0; i<option_list.children.length; i++)
    {
        option_list.children[i].classList.add("disabled");
    } 
    document .querySelector(".next-btn").classList.add("show");
}
function sorusayisigoster(sorusirasi, toplamsoru)
{
    let tag = `<span class="badge bg-warning">${sorusirasi} / ${toplamsoru}</span>`;
    document.querySelector(".quiz_box .question-index").innerHTML = tag;
}
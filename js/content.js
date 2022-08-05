const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");


// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
for(let i = 0; i < btns.length; i++){

    btns[i].classList.remove("on");
    boxs[i].classList.remove("on");
    // 각 버튼 클릭
    btns[i].addEventListener("click", () => {
        // on 클래스 추가 및 제거 로직
        btns[i].classList.add("on");
        boxs[i].classList.add("on");
        boxs[i].classList.add(`box${i+1}`);

        if(i === 0){
            btns[1].classList.remove("on");
            btns[2].classList.remove("on");

            boxs[1].classList.remove("on");
            boxs[2].classList.remove("on");
        }else if(i === 1){
            btns[0].classList.remove("on");
            btns[2].classList.remove("on");

            boxs[0].classList.remove("on");
            boxs[2].classList.remove("on");
        }else if(i === 2){
            btns[0].classList.remove("on");
            btns[1].classList.remove("on");

            boxs[0].classList.remove("on");
            boxs[1].classList.remove("on");
        }

    });
};
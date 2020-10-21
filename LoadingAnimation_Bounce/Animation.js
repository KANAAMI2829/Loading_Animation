'use strict';

function Bounce_Nowloading() { // 跳ねるCSSアニメーションを動かす処理
  let id_num = 0; 
  function replace_class_bounce() {
    let obj = document.getElementById(`${id_num}`);
    obj.classList.add('bounce'); // classをbounceへ0.05秒ごとに一回置換していく処理
    if (obj.classList.contains('def')) {
      obj.classList.remove('def');
    } else {
      obj.classList.remove('reposition');
    }
    console.log(obj.classList);
    id_num++;

    if (id_num > 15) {
      clearInterval(id);
    }
  }

  let id = setInterval(() => {
    replace_class_bounce();
  }, 50);
}

function Reposition_Nowloading() { // 再配置のCSSアニメーションを動かす処理
  for (let id_num = 0; id_num < 16; id_num++) { // classをbounceからrepositionへ置換していく処理
    let obj = document.getElementById(`${id_num}`);
    obj.classList.add('reposition');
    obj.classList.remove('bounce');
    console.log(obj.classList);
  }
}

function Stop_Nowloading_Animation() {
  clearInterval(StopId);
}

 // Nowloading_Animationを動かすための処理
Bounce_Nowloading();
setTimeout(() => {
  Reposition_Nowloading();
}, 1800);

const StopId = setInterval(() => {
  Bounce_Nowloading();
  setTimeout(() => {
    Reposition_Nowloading();
  }, 1800);
}, 2700);
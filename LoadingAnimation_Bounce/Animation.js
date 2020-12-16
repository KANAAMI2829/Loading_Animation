'use strict';

const ID_MAX = 15;

function Bounce_Nowloading() { // 跳ねるCSSアニメーションを動かす処理
  let id_num = 0; 
  function replace_class_bounce() {
    let obj = document.getElementById(`${id_num}`);
    obj.classList.add('bounce');
    if (obj.classList.contains('def')) {
      obj.classList.remove('def');
    } else {
      obj.classList.remove('reposition');
    }
    id_num++;

    if (id_num > ID_MAX) {
      clearInterval(id);
    }
  }

  let id = setInterval(() => { // classをbounceへ0.05秒ごとに一回置換していく処理
    replace_class_bounce();
  }, 50);
}

function Reposition_Nowloading() { // classをbounceからrepositionへ置換していく処理
  for (let id_num = 0; id_num < ID_MAX + 1; id_num++) {
    let obj = document.getElementById(`${id_num}`);
    obj.classList.add('reposition');
    obj.classList.remove('bounce');
  }
}

function Stop_Nowloading_Animation() { // アニメーションを停止させる処理
  clearInterval(STOP_ID);
  for (let id_num = 0; id_num < ID_MAX + 1; id_num++) {
    let obj = document.getElementById(`${id_num}`);
    obj.classList.add('def');
    if (obj.classList.contains('bounce')) {
      obj.classList.remove('bounce');
    } else if (obj.classList.contains('reposition')) {
      obj.classList.remove('reposition');
    }
  }
}

 // Nowloading_Animationを動かすための処理
Bounce_Nowloading();
setTimeout(() => {
  Reposition_Nowloading();
}, 1800);

const STOP_ID = setInterval(() => {
  Bounce_Nowloading();
  setTimeout(() => {
    Reposition_Nowloading();
  }, 1800);
}, 2700);

// function animate(obj, target, callback) {
  // console.log(callback);  callback = function() {}  调用的时候 callback()

//   // 先清除以前的定时器，只保留当前的一个定时器执行
//   clearInterval(obj.timer);
//   obj.timer = setInterval(function() {
//       // 步长值写到定时器的里面
//       // 把我们步长值改为整数 不要出现小数的问题
//       // var step = Math.ceil((target - obj.offsetLeft) / 10);
//       var step = (target - obj.offsetLeft) / 10;
//       step = step > 0 ? Math.ceil(step) : Math.floor(step);
//       if (obj.offsetLeft == target) {
//           // 停止动画 本质是停止定时器
//           clearInterval(obj.timer);
//           // 回调函数写到定时器结束里面
//           // if (callback) {
//           //     // 调用函数
//           //     callback();
//           // }
//           callback && callback();
//       }
//       // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
//       obj.style.left = obj.offsetLeft + step + 'px';

//   }, 15);
// }





// 封装一个动画函数
function animate(obj,target,callback) {
  //先清除以前的定时器,只保留当期的一个定时器 (每次触发,只执行一个定时器的动画效果)
  clearInterval(obj.timer);
  // 设置一个名为 obj.timer的定时器 设置每隔15ms执行一次效果
  obj.timer = setInterval(function(){
    // 获取移动的步数
    var step = (target - obj.offsetLeft) / 10;
    // 因为添加列缓动效果,所有应该设置怎么取整 这里使用三元表达式来实现
    step = step > 0 ? Math.ceil(step)  : Math.floor(step);
    // 当目标移动到指定位置后,清除定时器
    if(obj.offsetLeft === target) {
      clearInterval(obj.timer);
      // 清除定时器后,查看是否有回调函数 callback 和 callback()  如人存在callback 那就执行callback()函数
      callback && callback();
    }
    //当目标还没有移动到指定位置是,通过增加距离使其一点点移动到指定位置  记得加单位px
    obj.style.left = obj.offsetLeft + step + "px";
  },15)
  
}
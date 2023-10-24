// window.addEventListener('load', function() {
//     // 1. 获取元素
//     var arrow_l = document.querySelector('.arrow-l');
//     var arrow_r = document.querySelector('.arrow-r');
//     var focus = document.querySelector('.focus');
//     var focusWidth = focus.offsetWidth;
//     // 2. 鼠标经过focus 就显示隐藏左右按钮
//     focus.addEventListener('mouseenter', function() {
//         arrow_l.style.display = 'block';
//         arrow_r.style.display = 'block';
//         clearInterval(timer);
//         timer = null; // 清除定时器变量 
//     });
//     focus.addEventListener('mouseleave', function() {
//         arrow_l.style.display = 'none';
//         arrow_r.style.display = 'none';
//         timer = setInterval(function() {
//             //手动调用点击事件
//             arrow_r.click();
//         }, 2000);
//     });

//     // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('.circle');
//     // console.log(ul.children.length);
//     for (var i = 0; i < ul.children.length; i++) {
//         // 创建一个小li 
//         var li = document.createElement('li');
//         // 记录当前小圆圈的索引号 通过自定义属性来做 
//         li.setAttribute('index', i);
//         // 把小li插入到ol 里面
//         ol.appendChild(li);
//         // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
//         li.addEventListener('click', function() {
//             // 干掉所有人 把所有的小li 清除 current 类名
//             for (var i = 0; i < ol.children.length; i++) {
//                 ol.children[i].className = '';
//             }
//             // 留下我自己  当前的小li 设置current 类名
//             this.className = 'current';
//             // 5. 点击小圆圈，移动图片 当然移动的是 ul 
//             // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
//             // 当我们点击了某个小li 就拿到当前小li 的索引号
//             var index = this.getAttribute('index');
//             // 当我们点击了某个小li 就要把这个li 的索引号给 num  
//             num = index;
//             // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
//             circle = index;
//             // num = circle = index;
//             console.log(focusWidth);
//             console.log(index);

//             animate(ul, -index * focusWidth);   // 要设置target里面的元素 首先应该获取到它们 var
//         })
//     }
//     // 把ol里面的第一个小li设置类名为 current
//     ol.children[0].className = 'current';
//     // 6. 克隆第一张图片(li)放到ul 最后面
//     var first = ul.children[0].cloneNode(true);
//     ul.appendChild(first);
//     // 7. 点击右侧按钮， 图片滚动一张
//     var num = 0;
//     // circle 控制小圆圈的播放
//     var circle = 0;
//     // flag 节流阀
//     var flag = true;
//     arrow_r.addEventListener('click', function() {
//         if (flag) {
//             flag = false; // 关闭节流阀
//             // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
//             if (num == ul.children.length - 1) {      
//                 ul.style.left = 0;
//                 num = 0;
//             }
//             num++;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true; // 打开节流阀
//             });
//             // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle++;
//             // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
//             if (circle == ol.children.length) {
//                 circle = 0;
//             }
//             // 调用函数
//             circleChange();
//         }
//     });

//     // 9. 左侧按钮做法
//     arrow_l.addEventListener('click', function() {
//         if (flag) {
//             flag = false;
//             if (num == 0) {
//                 num = ul.children.length - 1;
//                 ul.style.left = -num * focusWidth + 'px';

//             }
//             num--;
//             animate(ul, -num * focusWidth, function() {
//                 flag = true;
//             });
//             // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
//             circle--;
//             // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
//             // if (circle < 0) {
//             //     circle = ol.children.length - 1;
//             // }
//             circle = circle < 0 ? ol.children.length - 1 : circle;
//             // 调用函数
//             circleChange();
//         }
//     });

//     function circleChange() {
//         // 先清除其余小圆圈的current类名
//         for (var i = 0; i < ol.children.length; i++) {
//             ol.children[i].className = '';
//         }
//         // 留下当前的小圆圈的current类名
//         ol.children[circle].className = 'current';
//     }
//     // 10. 自动播放轮播图
//     var timer = setInterval(function() {
//         //手动调用点击事件
//         arrow_r.click();
//     }, 2000);

// })









// 原生JS首先声明加载
window.addEventListener("load",function(){
  // 获取元素
  var focus = document.querySelector(".focus");
  var previous = document.querySelector(".arrow-l");
  var next = document.querySelector(".arrow-r");
  var focusWidth = focus.offsetWidth
  // 设置一个节流阀 (即使让同一时间,只执行一个animate动画)
  var flag = true;
  // 当鼠标进入focus里面将按钮显示出来
  focus.addEventListener("mouseenter",function(){
    previous.style.display = "block";
    next.style.display = "block";
    //此时应该停止自动播放
    clearInterval(timer);
    timer = null;
  });
  // 当鼠标离开focus时，将按钮隐藏
  focus.addEventListener("mouseleave",function(){
    previous.style.display = "none";
    next.style.display = "none";
    //当鼠标离开图片栏,使其自动播放
    timer = setInterval(function(){
      next.click();
    },1500)
  });
  //给ol里添加li小圆点,先声明 ol 和 ul 
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector("ol")
  // 通过for循环，次数为ul里元素的个数，以此添加相应数量的li
  for(var i = 0;i< ul.children.length;i++){
    // 通过创建节点的方式来创造新元素
    var li = document.createElement("li");
    // 给创建的节点li添加一个索引号 i
    li.setAttribute("index",i)
    //将新建的li放入ol里面
    ol.appendChild(li);
  }
  //获取ol里面的所有li以此实现点击点变色
  var lis = ol.querySelectorAll("li")
  for(i = 0; i < ol.children.length; i++){
    //给创建的所有li添加一个点击事件
    lis[i].addEventListener("click",function(){
      if(flag){
        flag = false;
        for(i = 0;i < ol.children.length; i++){
          //通过遍历先给所有的li添加空白类名
          lis[i].className = "";
          //再给点击了的li添加新的类名
          this.classList = "current";
          // 将点击后的图片放到对应的点击事件里来
          index = num;
          index = dot;
         // 给lis里的li建立一个点击即可跳转到指定图片
          var index = this.getAttribute('index');
          animate(ul,-index * focusWidth,function(){
            flag = true;
          })
        }
      }

    });
  }

  // 封装一个函数,里面设置li的颜色,将dot对应的li改变颜色,在后面的点击事件里应用
  function dotChange(){
    for(i = 0;i<lis.length;i++){
      lis[i].className = "";
    }
    lis[dot].className = "current";
  }

  // 通过克隆一个图片实现更好的滚动效果
  var pic0 = ul.children[0].cloneNode(true);
  // 将复制到的图片添加到ul里面
  ul.appendChild(pic0)
  // 点击next标志，实现图片移动
  var num = 0;
    // 将每个图片对应的位置反馈给当前对应的小圆点
  var dot = 0;
  // 当dot为0 的时候执行一次函数，使得打开到浏览器的时候默认第一个的小圆点变色
  dotChange();
  // 给next按钮添加一个点击事件
  next.addEventListener("click",function(){
    if(flag){
      flag = false;
      // 如果num等于ul的最大索引号时，将图片设置到最开始的位置，重新开始执行动画(移动动画)
    if(num == ul.children.length-1){
      ul.style.left = 0;
      num = 0;
    }
    // num++放到后面,先执行原来的数,再将num的数加1
    num++;
    // 执行动画,指定移动到位置是图片的宽度乘索引号
    animate(ul, -focusWidth * num,function(){
      flag = true;
    });
    //此处将判定小圆点的显示插入到点击事件里,每点击一次小圆点的位置改变一次  dot++ 表示先+1再执行新的数
    dot++;
    if(dot == lis.length){
      dot = 0;
    }
    // 调用一次设置的函数
    dotChange();
    }
  });
  // 给  previous添加一个点击事件,使得点击后返回上一个图片
  previous.addEventListener("click",function(){
   if(flag){
    flag = false;
     // 如果num到0的位置了 ,索引号没有负数,次数应当放回最大的索引号
     if(num == 0){
      num = ul.children.length-1;
      //此处将ul的图片设置到最大索引号对应的位置
      ul.style.left = -num * focusWidth + 'px';
    }
    num--;
    // 执行一次ul设定的位置的动画
    animate(ul,-focusWidth * num,function(){
      flag = true;
    });
    // 设置对应的小圆点的位置显示
    if(dot == 0){
      dot = lis.length;
    }
    dot--;
    dotChange();
   }
  });

  // 设置一个定时器,使得图片可以自动播放
  var timer = setInterval(function(){
    next.click();   //next.click() 表示手动将此点击事件内容调用
  },1500);

});




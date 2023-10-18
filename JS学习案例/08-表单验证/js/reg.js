
window.onload = function(){   //等页面加载出来后执行JS函数
  var setTel = /^1[3-8]\d{9}$/;  //声明一个变量 里面可以填写手机号码的格式  11位数
  var setQQ = /^[1-9]\d{4,9}$/;   //声明一个变量 里面可以填写QQ号的格式  10位数
  var setNc = /^[\u4e00-\u9fa5]{2,8}$/;   //声明一个变量 里面可以填写汉字2-8个
  var setMsg = /^\d{6}$/;     //声明一个变量 里面可以填写一个六位数
  var setPwd = /^[a-zA-Z0-9_-]{6,16}$/;   //声明一个变量，里面可以填写 6-16个以字母和数字的组合
  var tel = document.querySelector("#tel");  //获取页面的元素
  var qq = document.querySelector("#qq");
  var nc = document.querySelector("#nc");
  var msg = document.querySelector("#msg");
  var pwd = document.querySelector("#pwd");
  var surepwd = document.querySelector('#surepwd');
  regexp(tel, setTel);  //调用 tel值 和setTel值
  regexp(qq, setQQ);    //调用 qq 和 setQQ的值
  regexp(nc, setNc);    //调用 nc 和setNc的值
  regexp(msg, setMsg);  //调用 msg 和 setMsg的值
  regexp(pwd, setPwd);  //调用 pwd 和 setPwd的值
  function regexp(ele,set){  //运行5次调用的regexp的值
    ele.onblur = function(){  //当对这个事件的鼠标离开时，执行下列函数
      if(set.test(this.value)){  //如果填入这个元素里的值等于这个值的格式时
        this.nextElementSibling.className = "success";   //给这个元素的下个兄弟元素添加success类名
        this.nextElementSibling.innerHTML = "<i class='success_icon'></i> 恭喜您输入正确"  //给这个元素的下个兄弟元素添加 新的标签  和内容
      }else{
        this.nextElementSibling.className = "error"; //给这个元素的下个兄弟元素添加error类名
        this.nextElementSibling.innerHTML = "<i class='error_icon'></i> 格式不正确，请重新输入" //与条件不符的话给这个元素下个兄弟元素添加不符的标签和内容
      }
    } 
  }
  surepwd.onblur = function(){  //给下面的确定密码元素框输入设置一个鼠标离开焦点的函数
    if(this.value == pwd.value){ //如果这个输入的值和密码框输入的值一样时
      this.nextElementSibling.className = "success";  //给这个元素的下个兄弟元素添加success类名
      this.nextElementSibling.innerHTML = "<i class ='success_icon'></i> 恭喜输入正确"  //给这个元素的下个兄弟元素添加 新的标签  和内容
    }else{
      this.nextElementSibling.className = "error";  //给这个元素的下个兄弟元素添加error类名
      this.nextElementSibling.innerHTML = "<i class='error_icon'></i> 第二次密码输入有误，请重新输入" //与条件不符的话给下个兄弟元素添加不符的标签和内容
    }
  }
};
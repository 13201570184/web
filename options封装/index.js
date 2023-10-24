// 封装弹窗：创建函数->面向对象
var showModal = function() {
  // 默认：标题，内容，关闭按钮，取消按钮，确定按钮，取消文本，确定文本，弹窗宽度，取消方法，确定方法。合并数据对象
  this.init = (params) => {
      let options = Object.assign(
          {
              title: '提示',
              content: '加油',
              showClose: true,
              showCancel: true,
              showConfirm: true,
              cancelText: '取消',
              confirmText: '确定',
              width: '10rem',
              onCancel: () => {
                  this.closeModal()
              },
              onConfirm: () => {
                  this.confirmModal()
              }
          },
          params
      )
      let modal = document.createElement('div')
      modal.className = 'modal_bg'
      let modalBox = 	document.createElement('div')
      modalBox.className ='modal_box'
      let modalHead = document.createElement('div')
      modalHead.className ='modal_head'
      modalHead.innerHTML = options.title
      if(options.showClose){
          let closeBtn = document.createElement('div')
          closeBtn.className ='modal_close'
          closeBtn.innerHTML = '<i class="iconfont icon-close"></i>'
          closeBtn.onclick = options.onCancel
          modalHead.appendChild(closeBtn)
      }
      let modalBody = document.createElement('div')
      modalBody.className ='modal_content'
      modalBody.innerHTML = options.content
      let modalFoot = document.createElement('div')
      modalFoot.className ='modal_foot'
      if(options.showCancel){
          let cancelBtn = document.createElement('div')
          cancelBtn.className ='modal_btn modal_cancel'
          cancelBtn.onclick = options.onCancel  
          cancelBtn.innerText = options.cancelText
          modalFoot.appendChild(cancelBtn)
      }
      if(options.showConfirm){
          let confirmBtn = document.createElement('div')
          confirmBtn.className ='modal_btn modal_confirm'
          confirmBtn.innerText = options.confirmText
          confirmBtn.onclick = options.onConfirm
          modalFoot.appendChild(confirmBtn)
      }
      modalBox.appendChild(modalHead) 	
      modalBox.appendChild(modalBody) 
      modalBox.appendChild(modalFoot)
      modal.appendChild(modalBox)
      document.body.appendChild(modal)
  }
  this.closeModal = () => {
      document.body.removeChild(document.getElementsByClassName('modal_bg')[0])
  }
  // this.confirmModal = () => {
  //     document.body.removeChild(document.getElementsByClassName('modal_bg')[0])
  // }
}

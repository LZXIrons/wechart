//获取应用实例
const app = getApp()

Page({
    data: {
      isTel:true
    },
    //options(Object)
    onLoad: function () {
      
    },
    nextView(){
        wx.navigateTo({
          url: '../ValidatePaper/ValidatePaper',
        });
      }
});
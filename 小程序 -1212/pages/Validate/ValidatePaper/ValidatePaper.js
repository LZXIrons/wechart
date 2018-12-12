//获取应用实例
const app = getApp();

Page({
  data: {
    isPaper: true,
    isDepartment: true,
    userPic: "",
    paperPic: [],
    namePic: "",
    sex: [{ value: "男", checked: true }, { value: "女", checked: false }],
    LeftIndex:0,
    Departments:[],
    navChecked:false,
    navLeftItems:[{value:"内科",},{value:"妇科",},{value:"外科",},{value:"男科",},{value:"内科"},{value:"妇科"},{value:"外科"},{value:"男科"},{value:"内科"},{value:"妇科"},{value:"外科"},{value:"男科"},{value:"内科"},{value:"妇科"},{value:"外科"},{value:"男科"},{value:"内科"},{value:"妇科"},{value:"外科"},{value:"男科"},],
    navRightItems:[
      {
        child:[
          {value:"内科1"},
          {value:"妇科1"},
          {value:"外科1"},
          {value:"男科1"},
     
        ]
      },
      {
        child:[
          {value:"内科2"},
          {value:"妇科2"},
          {value:"外科2"},
          {value:"男科2"}
        ]
      },
      {
        child:[
          {value:"内科3"},
          {value:"妇科3"},
          {value:"外科3"},
          {value:"男科3"}
        ]
      },
      {
        child:[
          {value:"内科4"},
          {value:"妇科4"},
          {value:"外科4"},
          {value:"男科4"}
        ]
      },
      
    ],
  },
  //options(Object)
  onLoad: function() {
    
  },
  chooseUserPic() {
    wx.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: result => {
        this.setData({
          userPic: result.tempFilePaths
        });
      }
    });
  },
  choosePaperPic() {
    wx.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: result => {
        // let item=result.tempFilePaths;
        // this.data.namePic.push(item)
        this.setData({
          paperPic: result.tempFilePaths
        });
        console.log(this.data.paperPic);
      }
    });
  },
  chooseNamePic() {
    wx.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: result => {
        this.setData({
          namePic: result.tempFilePaths
        });
      }
    });
  },
  nextView() {
    wx.navigateTo({
      url: "../ValidateData/ValidateData"
    });
  },
  // 科室页面是否展现
  departmentView() {
    this.setData({
      isDepartment: true
    });
  },
  // 科室选项切换
  LeftTap(e){
    this.setData({
      LeftIndex:e.currentTarget.dataset.index
    })
  },
  RightTap(e){
    this.setData({
      RightIndex:e.currentTarget.dataset.index
    })
  },
  checkboxChange(e){
    console.log(e.detail.value)
  },
  // 确定科室
  sureItems(e){
    // this.setData({
    //   // Departments:e.detail.value
    // })
    console.log(e.detail.value)
  },
  // 性别样式切换
  toggleClass(e) {
    this.setData({
      sex: [
        { value: "男", checked: !this.data.sex[0].checked },
        { value: "女", checked: !this.data.sex[1].checked }
      ]
    });
  }
});

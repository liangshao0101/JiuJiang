// pages/demoData/demoData.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
text:'字符串555',
array:[{text:'数组内字符串555'},{text:'数组内字符串999'}],
array2:['nihao','haah'],
object:{
  text:'对象内字符串555',
  message:'onject对象'
},
condition:false,
a:2,
b:3,
c:4,
zhangjie:['第一章','第二章','第三章','第四章','第五章'],
objectArray:[{id: 2,unique : 'unique_2'},
            {id :1 , unique :'unique_1'},
            {id : 0 , unique :'unique_0'}],
numberArray:[1,2],
view : 'MINA',
count : 1
  },
  add : function(e){
   
      this.setData({
        count : this.data.condition+1
      })
  } ,
  addTest : function(e){
    this.setData({
      count : this.data.condition+1
    })
  },
  addToFront:function(e){
  const length = this.data.objectArray.length
  this.data.objectArray = [{id : length ,unique :'unique_' +length}].concat(this.data.objectArray)
  this.setData({
    objectArray : this.data.objectArray
  })
  },
  addNumberToFront :function(e){
this.data.numberArray = [this.data.numberArray.length+1].concat(this.data.numberArray)
this.setData({
  numberArray:this.data.numberArray
})
  },
  changeText:function(){
    this.setData({
      text:'字符串---修改成功'
    })
  },
  changeItemInArray:function(){
    this.setData({
       'array[1].text':'数组内字符串---修改成功'
    })
  },
  changeItemInObject:function(){
    this.setData({
      'object.text':'对象内字符串---修改成功'
    })
  },
  addNewField:function(){
    this.setData({
        'newField.text':'新对象'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
});

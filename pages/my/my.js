// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                id: 1,
                icon: '../../image/home.png', //图标
                title: '申请公众号关联小程序', //内容文字
                arrow: '../../image/arrow.png', //箭头icon
                url: '../index/index', //跳转地址
            },
            {
                id: 2,
                icon: '../../image/home.png', //图标
                title: '问题反馈 · 客服', //内容文字
                arrow: '../../image/arrow.png', //箭头icon
                url: '../index/index', //跳转地址
            },
            {
                id: 3,
                icon: '../../image/home.png', //图标
                title: '商户合作 · 上首页', //内容文字
                arrow: '../../image/arrow.png', //箭头icon
                url: '../index/index', //跳转地址
            }
        ]
    },
    jumpList(e) { //列表跳转
        console.log(e.currentTarget.dataset.url)
        const url = e.currentTarget.dataset.url
        wx.navigateTo({
            url
        })
    },
    canyu() { //跳转参与抽奖
        wx.navigateTo({
            url: './canyu/canyu'
        })
    },
    fabu() { // 跳转发布抽奖
        wx.navigateTo({
            url: './fabu/fabu'
        })
    },
    zhongjiang() { //跳转中奖纪录
        wx.navigateTo({
            url: './zhongjiang/zhongjiang'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
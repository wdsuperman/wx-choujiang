// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [ //产品图片
            'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        btnText: '参 加抽 奖',
        interval: 3000, //自动切换时间间隔
        duration: 500, //滑动动画时长
        time: '9小时41分钟后', // 开奖时间
        sponsor: { //赞助商信息
            title: '赞助商',
            name: 'xx俱乐部',
            arrow: '../../image/arrow.png',
            content: '赞助商详情。。。。。。'
        },
        list: [{ //奖品列表
                id: 1,
                title: '奖项一',
                content: '飞利浦电动牙刷大娃娃达瓦达瓦大大是发奥术大师多生', //奖品名
                num: '1', //奖品个数
                probability: '随机中奖' //中奖概率
            },
            {
                id: 2,
                title: '奖项二',
                content: '50幸运币', //奖品名
                num: '不限', //奖品个数
                probability: '概率码≥10的人可中奖' //中奖概率
            },
        ],
        addList: [ //参加抽奖人头像 最大显示5个
            {
                id: 1,
                avatar: ''
            },
            {
                id: 2,
                avatar: ''
            },
            {
                id: 3,
                avatar: ''
            },
            {
                id: 4,
                avatar: ''
            },
            {
                id: 5,
                avatar: ''
            }
        ]
    },
    onShareAppMessage() { //分享
    },
    lottery() { //参加抽奖
        console.log('参加抽奖')
        this.setData({
            btnText: '参 加成 功'
        })
    },
    all() { //查看全部参加
        wx.navigateTo({
            url: '../addAll/addAll'
        })
    },
    sponsor() { //赞助商详情 跳转到别的小程序 或 公众号
        console.log('赞助商详情 跳转到别的小程序 或 公众号')
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
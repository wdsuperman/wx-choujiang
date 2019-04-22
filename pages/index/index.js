// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: [{
                id: 1,
                image: '', //商品图片
                shangjia: '打卡56天领福利', // 右上角红框内字
                time: '9小时41分钟后 自动开奖', // 开奖时间
                add: true, //是否已参加
                join:'仅限女性用户参与', // 参加性别限制
                sp: [{
                        id: 1,
                        title: '奖项一',
                        content: '飞利浦电动牙刷大娃娃达瓦达瓦大大是发奥术大师多生',
                        num: '1'
                    },
                    {
                        id: 2,
                        title: '奖项二',
                        content: '50幸运币',
                        num: '不限'
                    },
                ],
                
            },
            {
                id: 2,
                image: '',
                shangjia: '打卡56天领福利',
                time: '9小时41分钟后 自动开奖',
                add: true,
                join:'',
                sp: [{
                        id: 1,
                        title: '奖项一',
                        content: '飞利浦电动牙刷',
                        num: '1'
                    },
                    {
                        id: 2,
                        title: '奖项二',
                        content: '飞利浦电动牙刷',
                        num: '2'
                    },
                    {
                        id: 3,
                        title: '奖项三',
                        content: '飞利浦电动牙刷',
                        num: '1'
                    },
                ]
            },
            {
                id: 3,
                image: '',
                shangjia: '打卡56天领福利',
                time: '9小时41分钟后 自动开奖',
                add: false,
                join:'仅限女性用户参与',
                sp: [{
                        id: 1,
                        title: '奖项一',
                        content: '飞利浦电动牙刷',
                        num: '1'
                    }
                ]
            }
        ],
        sure:'../../image/对.png',
        msg:false
    },
    sure(){
        if(!this.data.msg){
            this.setData({
                sure:'../../image/对 (1).png',
                msg:true
            })
        }else{
            this.setData({
                sure: '../../image/对.png',
                msg:false
            })
        }
    },
    jump(){
        wx.navigateTo({
            url: '../tyLottery/tyLottery',
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
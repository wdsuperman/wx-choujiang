// pages/my/canyu/canyu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        switch: '进行中',//切换 进行中 和 已结束
        goods: [{  // 进行中显示
                id: 1,
                image: '', //商品图片
                shangjia: '打卡56天领福利', // 右上角红框内字
                time: '9小时41分钟后 自动开奖', // 开奖时间
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
                sp: [{
                    id: 1,
                    title: '奖项一',
                    content: '飞利浦电动牙刷',
                    num: '1'
                }]
            }
        ],
        over:[
            {
                id:1,
                title:'垃圾桶垃圾桶垃圾桶垃圾桶',
                time:'04月01日',
                num:'15时',
                arrow:'../../../image/arrow.png'
            },
            {
                id: 2,
                title: '垃圾桶垃圾桶垃圾桶垃圾桶',
                time: '04月01日',
                num: '15时',
                arrow: '../../../image/arrow.png'
            }
        ]
    },
    changeSwitch(e){
        const id = e.currentTarget.dataset.id
        if(id == 1){
            this.setData({
                switch:'进行中'
            })
        } else{
            this.setData({
                switch: '已结束'
            })
        }
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
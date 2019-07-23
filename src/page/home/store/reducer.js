import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl: "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
],
  articleList: [
    {
      id: 1,
      title: "请客没结账提前走了？“对不起，我已经结过帐了，三个人的",
      test: "请客没结账提前走了？“对不起，我已经结过帐了，三个人的” 很多事情不是钱的问题，谁也不差那几百块钱，但不能把握当冤大头耍。职场酒肉朋友多，付款的...",
      imgUrl: "https://upload-images.jianshu.io/upload_images/13437285-338ef7d953e8ad86.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "请客没结账提前走了？“对不起，我已经结过帐了，三个人的",
      test: "请客没结账提前走了？“对不起，我已经结过帐了，三个人的” 很多事情不是钱的问题，谁也不差那几百块钱，但不能把握当冤大头耍。职场酒肉朋友多，付款的...",
      imgUrl: "https://upload-images.jianshu.io/upload_images/13437285-338ef7d953e8ad86.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "请客没结账提前走了？“对不起，我已经结过帐了，三个人的",
      test: "请客没结账提前走了？“对不起，我已经结过帐了，三个人的” 很多事情不是钱的问题，谁也不差那几百块钱，但不能把握当冤大头耍。职场酒肉朋友多，付款的...",
      imgUrl: "https://upload-images.jianshu.io/upload_images/13437285-338ef7d953e8ad86.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  RememberList: [
    {
      id: 1,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 4,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
<template>
  <div>
    <div id="content" class="home">
      <!--imgs-box-->
      <div id="imgs">
        <div id="bg1" class="bg">bg1</div>
        <div id="bg2" class="bg">bg2</div>
        <div id="bg3" class="bg">bg3</div>
        <div id="bg4" class="bg">bg4</div>
        <div id="bg5" class="bg">bg5</div>
      </div>
      <!--pagination box-->
      <div class="pagination-panel">
        <div class="pagination">
          <li id="dot_0" class="page-dot"></li>
          <li id="dot_1" class="page-dot"></li>
          <li id="dot_2" class="page-dot"></li>
          <li id="dot_3" class="page-dot"></li>
          <li id="dot_4" class="page-dot"></li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class ImageSwiper {
  // minRange: 切换的最小距离
  constructor(imgs, minRange) {
    if (!imgs) {
      throw new Error('轮播初始化失败')
    }
    this.imgBox = imgs
    this.imgs = imgs.children
    this.cur_img = 1 // 起始图片设置为1, 而非0, 将在图片显示方法作-1处理
    this.ready_moved = true // 判断每次滑动开始的标识
    this.imgs_count = this.imgs.length
    this.touchX = null // 触控开始的手指最初落点
    this.minRange = Number(minRange) // 切换的最小距离
    this.bindTouchEvent() // 初始化绑定事件
    this.showPic() // 显示图片方法, 注意其中图片编号的 -1 处理
  }

  // 初始化绑定事件
  bindTouchEvent() {
    this.imgBox.addEventListener('touchstart', this.touchstart.bind(this), false)
    this.imgBox.addEventListener('touchmove', this.touchmove.bind(this), false)
    this.imgBox.addEventListener('touchend', this.touchend.bind(this), false)
  }

  touchstart(e) {
    if (this.ready_moved) {
      const touch = e.touches[0]
      this.touchX = touch.pageX
      this.ready_moved = false
    }
  }

  touchmove(e) {
    e.preventDefault()
    const minRange = this.minRange
    const touchX = this.touchX
    let imgs_count = this.imgs_count

    if (!this.ready_moved) {
      const release = e.changedTouches[0]
      const releaseAt = release.pageX

      // 向左滑动
      if (releaseAt + minRange < touchX) {
        this.ready_moved = true
        console.log('向左滑动')
        if (this.cur_img > (imgs_count - 1)) {
          this.cur_img = 0
        }
        this.cur_img++
          this.showPic()
          // 向右滑动
      } else if (releaseAt - minRange > touchX) {
        console.log('向右滑动')
        if (this.cur_img <= 1) {
          this.cur_img = imgs_count + 1
        }
        this.cur_img--
          this.showPic()
        this.ready_moved = true
      }
    }
  }

  touchend(e) {
    e.preventDefault()
    const minRange = this.minRange
    const touchX = this.touchX
    const imgs_count = this.imgs_count

    if (!this.ready_moved) {
      const release = e.changedTouches[0]
      const releaseAt = release.pageX

      // 向左滑动
      if (releaseAt + minRange < touchX) {
        this.ready_moved = true
        if (this.cur_img > (imgs_count - 1)) {
          this.cur_img = 0
        }
        this.cur_img++
          this.showPic()
          // 向右滑动
      } else if (releaseAt - minRange > touchX) {
        if (this.cur_img <= 1) {
          this.cur_img = imgs_count + 1
        }
        this.cur_img--
          this.showPic()
        this.ready_moved = true
      }

    }
  }

  fadeIn(e) {
    e.classList.add('fadein')
  }

  fadeOut(e) {;
    [].forEach.call(e, e => {
      e.classList.remove('fadein')
    })
  }

  showPic() {
    this.hidePics(this.imgs)

    // 得到图片信息的真实索引值
    const index = this.cur_img - 1

    if (document.querySelector('.active')) {
      const active = document.querySelector('.active')
      active.classList.remove('active')
    }

    console.log(this.cur_img)
    document.querySelector(`#dot_${index}`).classList.add('active')

    this.fadeIn(this.imgs[index])
  }

  hidePics(e = this.imgs) {
    this.fadeOut(e)
  }
}


export default {
    name: 'Swipe',
    serverCacheKey: () => 'swipe',
    data () {
        return {}
    },
    mounted () {
        console.log('mounted')
        const imgs = new ImageSwiper(document.querySelector('#imgs'), 30)
    },
    methods: {

    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100vh;
    overflow: hidden;
}

.bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    transition: opacity .9s linear;
    opacity: 0;
    filter: alpha(opacity=0);
    font-size: 48px;
    text-align: center;
    color: #fff;
    vertical-align: middle;
}

#bg1 {
    background: url(../assets/images/swipe01.jpg) no-repeat;
    background-size: cover;
}

#bg2 {
    background: url(../assets/images/swipe02.jpg) no-repeat;
    background-size: cover;
}

#bg3 {
    background: url(../assets/images/swipe03.jpg) no-repeat;
    background-size: cover;
}

#bg4 {
    background: url(../assets/images/swipe04.jpg) no-repeat;
    background-size: cover;
}

#bg5 {
    background: url(../assets/images/swipe05.jpg) no-repeat;
    background-size: cover;
}

.fadein {
    opacity: 100;
    filter: alpha(opacity=100);
}

.pagination-panel {
    width: 100%;
    position: fixed;
    bottom: 50px;
    z-index: 100;
    height: auto;
}

.pagination {
    width: auto;
    display: table;
    margin: 0 auto;
}

.pagination li {
    border-radius: 15px;
    height: 15px;
    width: 15px;
    background: #fff;
    float: left;
    margin-right: 10px;
    list-style-type: none;
}

.pagination li.active {
    background: #52c6d8;
}

.pagination li:last-child {
    margin-right: 0;
}
</style>

<template>
  <div class="content">
    <header class="header">
      <h1>
        <span class="title">去旅行，去生活。</span>
        <span class="sub-title">预订独一无二的房源，像当地人一样体验城市。
        </span>
      </h1>
      <div class="form">
        <div class="search">
          <input class="search__input" type="text" placeholder="搜索" />
          <i class="search__icon fa fa-search"></i>
        </div>
      </div>
    </header>
    <div class="main">
      <article class="news">
        <div class="news__banner"></div>
        <section class="news__body">
          <h2 class="news__title">入住彭于晏的秘密基地</h2>
          <div class="news__sub-title">够彭友！彭于晏做了房东？在奇屋一夜，你的热情房东就是他。</div>
          <button class="btn primary news__button">查看详情</button>
        </section>

      </article>

      <div class="card">
        <cell-header></cell-header>
        <cell></cell>
      </div>

      <div class="card">
        <cell-header></cell-header>
        <cell></cell>
      </div>

      <div class="card">
        <cell-header></cell-header>
        <cell></cell>
      </div>
    </div>

    <div class="about-me">
      <div class="about-me__container">
        <div class="about-me__row">
          <div class="about-me__column">
            <div class="about-me__content">
              <div class="about-me__icon fa fa-phone"></div>
              <div class="about-me__title">10086100861008610086</div>
              <div class="about-me__sub-title">中国移动将为你提供24小时免费客服电话号码。详情请咨询 10086 热线。</div>
            </div>
          </div>
        </div>

        <div class="about-me__row">
          <div class="about-me__column">
            <div class="about-me__content">
              <div class="about-me__icon fa fa-phone"></div>
              <div class="about-me__title">10086100861008610086</div>
              <div class="about-me__sub-title">中国移动将为你提供24小时免费客服电话号码。详情请咨询 10086 热线。</div>
            </div>
          </div>
        </div>

        <div class="about-me__row">
          <div class="about-me__column">
            <div class="about-me__content">
              <div class="about-me__icon fa fa-phone"></div>
              <div class="about-me__title">10086100861008610086</div>
              <div class="about-me__sub-title">中国移动将为你提供24小时免费客服电话号码。详情请咨询 10086 热线。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <ul class="list-layout">
          <li class="list-layout__item">
            <span class="icp">京ICP备16017121号-3</span>
            <p class="address">京ICP备16017121号-3</p>
          </li>
        </ul>
      </div>
    </footer>

  </div>
</template>

<script>
  import Cell from '../components/cell/cell'
  import CellHeader from '../components/cell/cell_header'
  export default {
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    },
    components: {
      Cell,
      CellHeader
    }
  }
</script>
<style lang="sass" scoped>
  @import "../assets/scss/common.scss";

  .content {
    /* padding: 0 torem(24px); */
    margin: 0 auto;
  }
  .header {
    padding-top: torem(60px);
    padding-left: torem(24px);
    padding-right: torem(24px);
    & > h1 {
      font-weight: 200;
      color: #484848 ;
      text-align: left;
      .title {
        color: #FF5A5F;
        font-weight: 500;
        margin-right: torem(8px);
      }
      .title, .sub-title {
        font-size: torem(25px);
        line-height: torem(30px);
        letter-spacing: torem(-0.6px);
        text-align: left;
      }
      .sub-title {
      }
    }
    & > .form {
      padding-top: torem(24px);
      .search {
        position: relative;
        .search__input {
          width: 100%;
          padding: torem(16px);
          border: 1px solid #ccc;
          border-radius: torem(4px);
          box-shadow: 0 1px 3px 0 #ddd;
          background-color: #fff;
        }
        .search__icon {
          position: absolute;
          top: 50%;
          right: torem(20px);
          transform: translateY(-50%);
        }
      }
    }
  }
  .main {
    padding: torem(30px) 0;
    border-bottom: 1px solid #ddd;
    & > .news {
      .news__banner {
        width: 100%;
        padding-top: 52%;
        background: url(../assets/images/news.jpg) no-repeat;
        background-position: 50% 50%;
        background-size: cover;
      }
      .news__body {
        padding: torem(24px);
      }
      .news__title {
        font-size: torem(25px);
        font-height: torem(30px);
        letter-spacing: torem(-0.6px);
        font-weight: 700;
        color: #484848;
        word-wrap: break-word;
      }
      .news__sub-title {
        padding-top: torem(8px);
        padding-bottom: torem(16px);
      }
      .news__button {
        font-weight: 700;
        font-size: torem(15px);
        // line-height: torem(15px);
        padding: torem(8px) torem(24px);
        border-radius: torem(20px);
        border: 2px solid transparent;
        color: #fff;
        background-color: #00A699;

      }
    }
    & > .card {
      padding-top: torem(30px);
    }
  }
  .about-me {
    border-bottom: 1px solid #dce0e0;
  }
  .about-me__container {
    position: relative;
    width: calc(2/3 * 100%);
    margin: 0 auto;
    text-align: center;
  }
  .about-me__column {
    position: relative;
    padding: torem(40px) torem(30px) torem(55px);
  }
  .about-me__row:not(:last-of-type) {
    .about-me__column {
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 30%;
        border-top: 1px solid #dce0e0;
        margin: 0 auto;
      }
    }
  }
  .about-me__icon {
    margin: 0 auto torem(8px);
    height: torem(36px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-me__title {
    font-weight: bold;
    font-size: torem(15px);
    margin-bottom: torem(8px);
  }
  .about-me__sub-title {
    font-size: torem(14px);
    font-weight: normal;
  }
  .footer {
    padding: torem(24px) 0;
  }
  .list-layout {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: torem(14px);
    font-weight: normal;
    text-align: center;
    line-height: 1;
  }
</style>

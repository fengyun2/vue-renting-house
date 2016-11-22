<template>

  <div class="scrollSide">
    <div class="cell-wrap">

      <div class="cell">

        <ul>
          <li>
            <div class="cell-item">
              <div class="cell-iten__header">
                <div class="cell-item__banner"></div>
              </div>
              <div class="cell-item__body">
                <span class="cell-item__price">2115</span>
                <span class="cell-item__sub-title">租客史上最牛改造房，全世界人都在抢着住他家30天</span>
              </div>
              <div class="cell-item__footer">10条评价</div>
            </div>
          </li>

          <li>
            <div class="cell-item">
              <div class="cell-iten__header">
                <div class="cell-item__banner"></div>
              </div>
              <div class="cell-item__body">
                <span class="cell-item__price">2115</span>
                <span class="cell-item__sub-title">租客史上最牛改造房，全世界人都在抢着住他家30天</span>
              </div>
              <div class="cell-item__footer">10条评价</div>
            </div>
          </li>

          <li>
            <div class="cell-item">
              <div class="cell-iten__header">
                <div class="cell-item__banner"></div>
              </div>
              <div class="cell-item__body">
                <span class="cell-item__price">2115</span>
                <span class="cell-item__sub-title">租客史上最牛改造房，全世界人都在抢着住他家30天</span>
              </div>
              <div class="cell-item__footer">10条评价</div>
            </div>
          </li>
        </ul>

      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/scss/common.scss";

  .scrollSide {
    position: relative;
  }
  .cell-wrap {
    position: relative;
    // padding-top: torem(30px);
    padding-left: torem(24px);
    .cell {
      position: relative;
      overflow-y: hidden;
      overflow-x: auto;
      transition: transform .5s;
      white-space: nowrap;
      color: #484848;
      ul {
        position: relative;
        list-style: none;
        white-space: nowrap;
        margin: 0;
        padding: 0;
        width: 100%;

        li {
          display: inline-block;
          width: 100%;
          text-align: left;
          padding-right: torem(10px);
          &:last-of-type {
            padding-right: 0;
          }
        }
      }
      &::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
      }
    }

    .cell-item__banner {
      width: 100%;
      padding-top: 52%;
      background: url(../../assets/images/banner01.jpg) no-repeat;
      background-position: 50% 50%;
      background-size: cover;
    }
    .cell-item__body {
      padding-top: torem(10px);
      white-space: normal;
      word-wrap: break-word;
      font-size: torem(15px);
      font-weight: bold;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .cell-item__footer {
      padding-top: torem(4px);
      font-size: 14px;
    }
  }
</style>

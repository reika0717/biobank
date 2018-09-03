<template>
  <div class="base-container">
    <TermsOfService />
    <section class="left-area">
      <header>
        <h1>AMED BIOBANK CROSS-SEARCH<span>PROTOTYPE</span></h1>
        <a href="https://www.amed.go.jp" target="_blank" title="AMED 国立研究開発法人日本医療研究開発機構" class="left-area__amed-link">AMED 国立研究開発法人日本医療研究開発機構</a>
      </header>
      <nav class="app-navigation">
        <section class="top-menu">
          <ul>
            <li></li>
            <li><a>本サービスについて</a></li>
            <li><a>お知らせ</a></li>
            <li><a>問い合わせ先</a></li>
            <li ><a>AMED ID でログイン</a></li>
            <li></li>
          </ul>
        </section>
        <section class="search-conditions"></section>
      </nav>
    </section>
    <section class="right-area">
      <div class="papert-view">
        <section class="general-statistics-containers">
          <ol>
            <li class="general-statistics-participants">
              <div>
                <header>
                  <h2>
                    <span>協力者</span>
                  </h2>
                </header>
                <div class="general-statistics-participants__container">
                  <section class="general-statistics-participants__amount">
                    <header>
                      <h3>男女の各総数</h3>
                    </header>
                    <div class="general-statistics-participants__amount-main">
                      
                    </div>
                  </section>
                  <section class="general-statistics-participants__age">
                    <header>
                      <h3>年齢</h3>
                    </header>
                    <div class="general-statistics-participants__age-main">
                      
                    </div>
                  </section>
                  <section class="general-statistics-participants__illness">
                    <header>
                      <h3>既往症・依存症</h3>
                    </header>
                    <div class="general-statistics-participants__illness-main">
                      
                    </div>
                  </section>
                </div>
              </div>
            </li>
            <li class="general-statistics-samples">
              <header>
                <h2>
                  <span>試料</span>
                </h2>
              </header>
            </li>
            <li class="general-statistics-analysis">
              <header>
                <h2>
                  <span>解析情報種類</span>
                </h2>
              </header>
            </li>
          </ol>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import TermsOfService from '~/components/modal/TermsOfService.vue'

  export default {
    components: {
      TermsOfService
    },
    mounted() {
      /** Scenario

      1. ハッシュのチェック
      "#error"が付いていれば、AMEDリダイレクトで認証が通らなかった事になり、アラートを出す
      state: isFailedAuthorization

      2. APIチェック
      HistoryFetch API を叩く
      認証が通れば 3 に進み、
      認証が通らなければ、何もしない（ログイン前トップ画面）
      state: isLogined

      3. 利用規約の同意チェック
      localStrage の terms_confirm が done であれば検索画面へ遷移し、
      否であれば利用規約ビューを表示
      state: isConfirmedTerms

      4. ログインボタン押下
      HistoryFetch API を叩く
      通れば検索画面へ遷移し、
      通らなければ AMED Login に遷移

      */      
      console.log(this.$store) // -> 1
      //store.commit(state.IS_FAILED_AUTHORIZATION);
      console.log(this.$store.getters.isFailedAuthorization);
      console.log(this.$store.getters.isConfirmedTerms);
      console.log(this.$store.getters.isLogined);
      console.log(this.$store.getters[this.$store.state.HISTORY]);

      if (this.$store.getters.isFailedAuthorization) {
        // AMEDリダイレクトで認証が通らなかった
        alert('ログインエラー');
      } else {
        // APIチェック
        const resultApiCheck = this.historyFetch()
          .then(history => {
            console.log('APIが通ったのでログイン済み');
            this.$store.dispatch('history', history.data.search_history_list);
            console.log(this.$store.getters.history)
          })
          .catch((error) => {
            console.log('APIが通らなかったので未ログイン');
            console.log(arguments)
          });
      }
    },
    methods: {
      historyFetch() {
        return axios.get('./json/history_fetch_200.json')
          .then(response => {
            return response;
          })
          .catch(() => {
            console.log('fetch error')
          })
      }
    }
  }
</script>

<style lang="sass">
  @import url("https://use.fontawesome.com/dcd5381ad7.css")

  $COLOR_BLUE1: #5FCBCF
  $COLOR_BLUE2: #1CA1AD
  $COLOR_DARK: #157B85
  $COLOR_GRAY: #90A9AB
  $COLOR_BORDER: rgba(0, 0, 0, .1)
  $Z_INDEX_LEFT_AREA: 100
  $PADDING_SIDE_RIGHT_AREA: 32px

  $CHAR_ENVELOPE_O: "\f003"
  $CHAR_LIST: "\f03a"
  $CHAR_INFO_CIRCLE: "\f05a"
  $CHAR_QUESTION: "\f128"

  @mixin condensed-header
    transform: scaleX(.8)
    transform-origin: 0 50%


  .base-container
    white-space: nowrap
    padding: 20px
    .left-area, .right-area
      display: inline-block
      vertical-align: top

  .left-area
    width: 360px
    margin-right: -20px
    position: relative
    z-index: $Z_INDEX_LEFT_AREA
    header
      height: 92px
      margin-bottom: -2px
      position: relative
      h1
        width: 244px
        height: 80px
        background: url('~/assets/image/logo.svg') no-repeat 0 0
        text-indent: -9999px
        position: relative
        left: 8px
      .left-area__amed-link
        position: absolute
        width: 44px
        height: 44px
        background: url('~/assets/image/logo-amed.png') no-repeat 0 0
        text-indent: -9999px
        background-size: contain
        top: 17px
        right: 27px
    .app-navigation
      .top-menu
        height: 360px
        background-color: $COLOR_BLUE1
        color: #FFF
        box-shadow: 0 8px 30px rgba(0, 0, 0, .2) 
        ul
          li
            height: 60px
            padding: 0 32px
            line-height: 60px
            font-size: 14px
            position: relative
            &:nth-child(2)
              background-color: #52C3C8
            &:nth-child(3)
              background-color: #44BAC1
            &:nth-child(4)
              background-color: #37B2BB
            &:nth-child(5)
              background-color: #29AAB4
            &:nth-child(6)
              background-color: $COLOR_BLUE2
            a
              cursor: pointer
              display: block
              &:before, &:after
                content: ""
                display: block
                position: absolute
                border-top: solid 1px #FFF
                border-right: solid 1px #FFF
                width: 7px
                height: 7px
                top: 25px
                transform: rotate(45deg)
              &:before
                right: 31px
              &:after
                right: 27px

  .right-area
    min-width: 644px
    width: calc(100vw - 376px)
    padding-right: 20px
    .papert-view
      background-color: #FFF
      //min-height: 1000px
      box-shadow: 0 1px 2px rgba(0, 0, 0, .2)
      padding: 24px 0
      overflow-x: auto
      > section
        padding: 0 $PADDING_SIDE_RIGHT_AREA
        header
          h2
            font-size: 18px
            font-stretch: condensed
            line-height: 24px
            color: $COLOR_DARK
      .general-statistics-containers
        ol
          counter-reset: item
          li
            padding: 18px 0
            > header
              padding: 8px 0
              position: relative
              &:before
                content: ""
                display: block
                border-bottom: dotted 2px $COLOR_DARK
                position: absolute
                width: calc(100% + 64px)
                left: -$PADDING_SIDE_RIGHT_AREA
                top: 22px
              h2
                position: relative
                &:before
                  counter-increment: item
                  content: counter(item)
                  display: inline-block
                  width: 30px
                  height: 30px
                  line-height: 30px
                  text-align: center
                  color: #FFF
                  background-color: $COLOR_DARK
                  border-radius: 100%
                  margin-left: -2px
                  font-family: Roboto
                  font-size: 16px
                  font-weight: 300
                  vertical-align: middle
                  position: relative
                  top: -2px
                span
                  display: inline-block
                  background-color: #FFF
                  padding: 0 10px 0 6px
                  +condensed-header
            section
              header
                h3
                  font-size: 14px
                  font-weight: bold
                  color: $COLOR_DARK
      .results-container
        header
          h2
            +condensed-header
            font-size: 21px
            line-height: 1
            display: inline-block
          dl
            display: inline-block
            font-size: 12px
            font-family: Roboto
            dt, dd
              display: inline-block
            dt
              color: $COLOR_GRAY
              &:after
                content: ":"
            dd
              color: $COLOR_DARK
              margin-right: 1.5em
        .results-statistics-items
          padding: 8px 0 24px
          width: 100%
          overflow-x: auto
          .results-statistics-item
            position: relative
            display: inline-block
            .results-statistics-item__heading
              position: absolute
              bottom: -18px
              left: 50%
              transform: translateX(-50%)
              text-align: center
              font-size: 12px
              color: $COLOR_DARK
            .results-statistics-item__container
              width: 130px
              height: 113px
              border: solid 1px $COLOR_BORDER
        .results-filters
          text-align: center
          font-size: 12px
          line-height: 18px
          padding: 8px 0 4px
          > *
            display: inline-block
          h2
            color: $COLOR_GRAY
            &:after
              content: ":"
              margin-right: 4px
          ul
            li
              display: inline-block
              + li
                margin-left: .5em
        .results-list
          width: 100%
          overflow-x: auto
          font-size: 12px
          line-height: 24px
          table
            th, td
              padding: 0 8px 0 4px
            thead
              tr.large-classification
                th
                  color: #FFF
                  font-size: 10px
                  line-height: 14px
                  height: 14px
                th.category__initial
                  background-color: $COLOR_BLUE1
                  + th.category__bio-bank
                    border-left: solid 2px #FFF
                th.category__bio-bank
                  background-color: #3DB6BE
                  + th.category__participant
                    border-left: solid 2px #FFF
                th.category__participant
                  background-color: $COLOR_BLUE2
                  + th.category__sample
                    border-left: solid 2px #FFF
                th.category__sample
                  background-color: #188E99
              tr.small-classification
                th
                  color: $COLOR_DARK
                  border-bottom: solid 1px $COLOR_DARK
            tbody
              tr
                td
                  border-bottom: solid 1px $COLOR_BORDER
                  max-width: 200px
                  overflow: hidden
                  width: 100%
                  text-overflow: ellipsis
                  white-space: nowrap
                  p, ul
                    width: 150px
                    overflow: hidden
                    text-overflow: ellipsis
                    display: inline-block
                  li
                    display: inline-block
                    + li:before
                      content: ", "
</style>

<template lang="pug">
div.base-container
  section.left-area
    header
      h1
        | AMED BIOBANK CROSS-SEARCH
        span PROTOTYPE
      a.left-area__amed-link(href="https://www.amed.go.jp", target="_blank", title="AMED 国立研究開発法人日本医療研究開発機構") AMED 国立研究開発法人日本医療研究開発機構
    nav.app-navigation
      section.top-menu
        ul
          li
          li
            a 本サービスについて
          li
            a お知らせ
          li
            a 問い合わせ先
          li
            a AMED ID でログイン
          li
      section.search-conditions

  section.right-area
    nav.sub-menu
      ul
        li#sub-menu__about このサービスについて
        li#sub-menu__history 検索履歴
        li#sub-menu__announcement お知らせ
        li#sub-menu__inquiry お問い合わせ
        li#sub-menu__account ［名前］
    section.results-container
      header
        h2 検索結果
        dl
          dt Found
          dd --
          dt Page
          dd --
      section.results-statistics-items
        .results-statistics-item#results-statistics-item__kinds-of-sample
          h3.results-statistics-item__heading 試料種類
          .results-statistics-item__container
        .results-statistics-item#results-statistics-sampling-ages
          h3.results-statistics-item__heading 試料採取時年齢
          .results-statistics-item__container
        .results-statistics-item#results-statistics-item__previllness-code
          h3.results-statistics-item__heading 既往症・併存症コード
          .results-statistics-item__container
        .results-statistics-item#results-statistics-item__illness-code
          h3.results-statistics-item__heading 病名コード
          .results-statistics-item__container
        .results-statistics-item#results-statistics-item__sex
          h3.results-statistics-item__heading 性別
          .results-statistics-item__container
        .results-statistics-item#results-statistics-item__kind-of-analysis
          h3.results-statistics-item__heading 解析情報種類
          .results-statistics-item__container
        .results-statistics-item#results-statistics-item__vendor-and-platform
          h3.results-statistics-item__heading ベンダー・プラットフォーム
          .results-statistics-item__container
      section.results-filters
        h2 フィルター
        ul
          li
            label
              input(type="checkbox")
              | ToMMo
          li
            label
              input(type="checkbox")
              | BBJ
          li
            label
              input(type="checkbox")
              | NCBN
          li
            label
              input(type="checkbox")
              | 岡大バイオバンク
      section.results-list
        table
          thead
            tr.large-classification
              th.category__initial(colspan=2)
              th.category__bio-bank
              th.category__participant(colspan=4) 協力者
              th.category__sample(colspan=9) 試料
            tr.small-classification
              th 個票
              th 最終更新日
              th バイオバンク
              th.sortable 協力者
              th.sortable 性別
              th.sortable 既往症・依存症コード
              th.sortable 既往症・依存症
              th.sortable 試料ID
              th.sortable 病名コード
              th.sortable 病名
              th.sortable 試料種類
              th.sortable 年齢
              th.sortable 解析情報ID
              th.sortable 解析情報種類
              th.sortable ベンダー
              th.sortable プラットフォーム
          tbody
            tr
              td.results-list__initial-individual-data
              td.results-list__initial-update-date
                p 2017-03-23
              td.results-list__bio-bank
                p ToMMo
              td.results-list__participant-id
                p TMM0000000001
              td.results-list__participant-sex
                p F
              td.results-list__participant-illness-ids
              td.results-list__participant-illness-names
              td.results-list__sample-ids
              td.results-list__sample-illness-codes
                ul
                  li D05
                  li C50
                  li D05
                  li C50
              td.results-list__sample-illness-names
                ul
                  li 乳房の上皮内癌_TEST
                  li 乳房の悪性新生物_TEST
                  li 乳房の上皮内癌_TEST
                  li 乳房の悪性新生物_TEST
              td.results-list__sample-kinds
                ul
                  li DNA
                  li 血清
              td.results-list__sample-ages
                ul
                  li 58
                  li 58
              td.results-list__analysis-ids
              td.results-list__analysis-kinds
                ul
                  li SNP array
                  li SNP array
              td.results-list__analysis-vendors
                ul
                  li Illumina
                  li Illumina
              td.results-list__analysis-platforms
                ul
                  li Human OmniExpress v1
                  li Human OmniExpress v1
            tr
              td.results-list__initial-individual-data
                div
              td.results-list__initial-update-date
                div
                  p 2017-08-10
              td.results-list__bio-bank
                div
                  p OBB
              td.results-list__participant-id
                div
                  p OBB0000000001
              td.results-list__participant-sex
                div
                  p M
              td.results-list__participant-illness-ids
                div
                  ul
                    li E103
                    li E102
              td.results-list__participant-illness-names
                div
                  ul
                    li １型＜インスリン依存性＞糖尿病＜IDDM＞，眼合併症を伴うもの
                    li １型＜インスリン依存性＞糖尿病＜IDDM＞，腎合併症を伴うもの
              td.results-list__sample-ids
                div
                  ul
                    li 2000000001
              td.results-list__sample-illness-codes
                div
                  ul
                    li E10
              td.results-list__sample-illness-names
                div
                  ul
                    li １型＜インスリン依存性＞糖尿病＜IDDM＞
              td.results-list__sample-kinds
                div
                  ul
                    li 全血
              td.results-list__sample-ages
                div
                  ul
                    li 46
              td.results-list__analysis-ids
                div
              td.results-list__analysis-kinds
                div
                  ul
                    li WGS
              td.results-list__analysis-vendors
                div
                  ul
                    li Illumina
              td.results-list__analysis-platforms
                div
                  ul
                    li HiSeq2500
            tr
              td
              td
                p 最終更新日
              td
                p バイオバンク
              td
                p 協力者
              td
                p 性別
              td
                p 既往症・依存症コード
              td
                p 既往症・依存症
              td
                p 試料ID
              td
                p 病名コード
              td
                p 病名
              td
                p 試料種類
              td
                p 年齢
              td
                p 解析情報ID
              td
                p 解析情報種類
              td
                p ベンダー
              td
                p プラットフォーム
</template>

<script>

</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900")
@import url("http://fonts.googleapis.com/earlyaccess/notosansjp.css")
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
  .sub-menu
    position: relative
    margin: -20px 0 -4px
    ul
      li
        display: inline-block
        color: $COLOR_DARK
        font-size: 12px
        font-weight: bold
        line-height: 48px
        margin-right: 1em
        &:before
          font-family: FontAwesome
          margin-right: 4px
        &#sub-menu__about:before
          content: $CHAR_QUESTION
        &#sub-menu__history:before
          content: $CHAR_LIST
        &#sub-menu__announcement:before
          content: $CHAR_INFO_CIRCLE
        &#sub-menu__inquiry:before
          content: $CHAR_ENVELOPE_O
        &#sub-menu__account
          position: absolute
          top: 0
          right: 0
          margin-right: 0
          &:before
            content: none
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

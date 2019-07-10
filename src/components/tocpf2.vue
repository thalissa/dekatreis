<template lang="pug">
  .content
    h2 Table of Contents
    ul.toc
      li
        h3 Basic Rules
        ul.section
          li.subsection
            h5 Death Saving Throws
            ul.sublist
              router-link(:to="{ path: 'rules', query: { rule: 'deathsave', source: 'pf2' }}" tag="li") Death Saving Throws      

      li.races
        h3 Races
        ul.section
          template(v-for="race in races")
            li.subsection
              template(v-if="race.subraces")
                details
                  summary
                    router-link(:to="{ path: 'races', query: { race: race.name, source: 'pf2' }}" tag="a" ) {{ race.name }}
                      .book {{ race.book }}
                  ul.sublist(v-for="subrace in race.subraces")
                    li {{ subrace.name }}
                      .book {{ subrace.book }}
              template(v-else)
                router-link(:to="{ path: 'races', query: { race: race.name, source: 'pf2' }}" tag="a" ) {{ race.name }}
                  .book {{ race.book }}

      li
        h3 Dekatreis
        ul.section
          li.subsection
            h5 Creator's Prologue
            ul.sublist
              li Dungeons and Dragons and Dekatreis
              li Conception of the Demigods
          li.subsection
            h5 History of Dekatreis
            ul.sublist
              li Races of Dekatreis
              li Creation of the Continents
              li Society Develops
              li Departure of the Demigods
              li The Queen's Years Begin
              li New Order
              li War of the Five Elves
</template>

<style lang="stylus" scoped>
  .toc
    flex-direction row
    flex-grow 1
    padding 10px
    align-items center top
  
  h2
    text-align center
    
  .section
    display flex
    flex-wrap wrap
    border 2px #CDC solid
    padding 10px

  .subsection
    display flex
    flex-wrap wrap
    flex-direction column
    margin 10px
    min-width 150px

  .toc a
    color inherit !important

  .toc li
    list-style-type none
  
  .book
    display inline-block
    font-size 7pt
    margin-left 5px

  .toc li h3
    margin-bottom 4px !important
    margin-top 10px !important
    line-height initial !important
    text-align center
    cursor pointer

  .toc li h5, .toc li a
    margin-bottom 0.5px !important
    margin-top 2px !important
    line-height initial !important
    cursor pointer
    display inline-block
    color #4E2A84 !important
    font-size 13.28px
    font-weight 700
    
  .toc ul
    padding-left: 0.3em;
    line-height: 1.3em;
    list-style-type: none;
    margin-left 10px !important

  .toc>ul>li
    margin-bottom initial !important
  
  ul .sublist
    font-size 10pt
    cursor pointer

  pre
    word-break keep-all
  
  details[closed] summary::-webkit-details-marker
    display inline
    width 0
    height 0
    border-color black
    border-with 10px
  
  details summary
    cursor pointer
</style>

<script>
  export default {
      data: function () {
        return {
          races: ''
        }
      },
      created() {
          var raceJSON = require("../assets/races/pf2/racelist.json")
          this.races = raceJSON["races"]
      },
      methods: {

      }
  }
</script>

<template lang="pug">
  .content
    .displayPage
      template(v-if="featdata")
        .display
          fieldset.displayContent
            legend
              h1 {{ featdata.name }} Feats
            table
              tr
                td Level
                td Traits
                td Prerequisites
                td Details
              template(v-for="row in featdata")
                tr
                  td {{ row.level }}
                  td {{ row.traits.join(", ") }}
                  td {{ row.prerequisites.join(", ") }}
                  td {{ row.body }}
                    
      template(v-else)
        .display
          fieldset.displayContent
            legend
              h2 This entry does not exist!
            | If you've found this page directly linked somewhere, please message Thalissa to fix it!
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/display.styl"
  
  .level
    display inline-flex
    margin-left 5px
  
  table
    width 100%
  
  td
    min-width 200px
    text-align left
</style>

<script>
  export default {
      data: function () {
        return {
          featdata: {}
        }
      },
      beforeCreate() {
        //Find the class to display on the page
        db.collection('feats').find({type: this.$route.params.feat.toLowerCase()}).asArray().then(docs => {
          if(docs.length > 0){
            this.featdata = docs
          } else {
            console.log("No documents found.")
          }
        }).catch(err => {
          console.error(err)
        })
      },
      methods: {

      }
  }
</script>

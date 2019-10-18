<template lang="pug">
  .content
    .displayPage
      .displayList
        fieldset.displayContent
          legend
            h3 Other Classes
          template(v-for="classes in classlist")
            router-link(:to="{ path: '/class/' + classes.name }" tag="a") {{ classes.name }}
        fieldset.displayContent(v-if="dataloaded")
          legend
            h3 Additional Content
          router-link(:to="{ path: '/feats/' + classdata.name }" tag="a") {{ classdata.name }} Feats

      template(v-if="dataloaded")
        .display
          fieldset.displayContent
            legend
              h1 {{ classdata.name }}
              
            .displayText {{ classdata.description }}
            
            details
              summary
                h3.displayHeading Statistics
              h4.displayHeading Key Ability
              .displayText {{ classdata.keyability }}
              h4.displayHeading Hit Points
              .displayText {{ classdata.hitpoints }}
            
            details
              summary
                h3.displayHeading Initial Proficiencies
              template(v-for="proficiency in classdata.proficiencies")
                h4.displayHeading {{ proficiency.name }}
                .displayText {{ proficiency.body }}
            
            details
              summary
                h3.displayHeading {{ classdata.name }} Class Table
              table
                tr
                  td Level
                  td Features
                template(v-for="row in classdata.table")
                  tr
                    td {{ row.level }}
                    td {{ row.body }}
            details
              summary
                h3.displayHeading {{ classdata.name }} Class Features
              template(v-for="feature in classdata.features")
                h4.displayHeading {{ feature.name }}
                  .level [{{ feature.level }}]
                .displayText {{ feature.body }}
                
                  
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
          classdata: {},
          classlist: [],
          dataloaded: false
        }
      },
      created() {
        this.fetchdata()
      },
      methods: {
        fetchdata: function(){
          //Find the class to display on the page
          db.collection('classes').find({name: this.$route.params.class}).asArray().then(docs => {
            if(docs.length > 0){
              this.classdata = docs[0]
              this.dataloaded = true
            } else {
              console.log("No documents found.")
            }
          }).catch(err => {
            console.error(err)
          })
          
          //Find all other classes
          db.collection('classes').find({ }, { projection: { "name": 1 } }).toArray().then(classlist => {
            if(classlist.length > 0){
              this.classlist = classlist
            } else {
              console.log("No documents found.")
            }
          }).catch(err => {
            console.error(err)
          })
        }
      }
  }
</script>

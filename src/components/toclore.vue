<template>
  .content
    .tocHead
      h2 Lore
    
    ul.toc
      template(v-for="lore in loreData")
        <!-- Render lore name -->
        .tocHeader
          h3 {{ lore.name }}
          
          <!-- Render lore body -->
          ul.section
            <!-- Go through each section -->
            template(v-for="section in lore")
              li.subsection
                router-link(:to="{ path: '/lore/' + section.name.replace(/[^a-z0-9]/gi,'') }" tag="a" ) {{ section.name }}
                ul.sublist(v-for="subsection in section.body")
                  li {{ subsection.name }}
</template>

<style lang="stylus" scoped>
  @import "../assets/styling/components/toc.styl"
</style>

<script>
  export default {
    data: function () {
      return {
        loreData: { }
      }
    },
    mounted() {
      this.fetchdata()
    },
    methods: {
      fetchdata: function(){
        // Load JSON file with each lore sections and define it as loreList
        let loreJSON = require("../assets/lore/lorelist.json")
        let loreList = loreJSON["lore"]
        
        // Define loreListings as array for all the data manipulation we'll be doing
        const loreListings = [ ]
        
        // For each section, create a new variable
        loreList.forEach(function(lore){
          let sections = lore.sections
          let sectionNew = [ ]
          
          // Define each new section we're adding
          sectionNew.name = lore.name
          
          sections.forEach(function(section){
            // Define the contents of each new section we're adding
            let subsection = { }
            // These represent the attributes of the subsection
            let sectionID = section.name.replace(/[^a-z0-9]/gi,'').toLowerCase()
            let sectionBody = require("../assets/lore/" + sectionID + ".json")[sectionID][0].sections
            // These insert the data to the subsection's variable
            subsection.name = section.name
            subsection.body = sectionBody
            // Push subsection's variable to the new section being made
            sectionNew.push(subsection)
          })
          // Push section to the loreListings variable so it displays on the page
          loreListings.push(sectionNew)
        })
        
        // Set loreData as our manipulated data
        this.loreData = loreListings
      }
    }
  }
</script>

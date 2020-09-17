<template>
 <div>
    <div class="top-bar">
       <div class="top-bar-data">
           <div class="icon-wrapper">
               <div class="icon-holder" v-on:click="toggleView" v-bind:class="{ active: !displayList }">
                 <box-icon name='grid' class="icon" type='solid' ></box-icon>
               </div>
               <div class="icon-holder" v-on:click="toggleView" v-bind:class="{ active: displayList }">
                    <box-icon class="icon" name='list-ul'></box-icon>
               </div>
           </div>
       </div>
    </div>
    <div class="grid-wrapper data-body" v-if="!displayList">
         <div v-for="item in gridItems" :key="item.key" >
            <div class="grid-item">
                <img v-bind:src=item.url>
            </div>
        </div>
    </div>
    <div class="list-warpper data-body" v-if="displayList">
        <div v-for="item in gridItems" :key="item.key" >
            <div class="list-item">
                <img v-bind:src=item.url>
                <h3>{{item.text}}</h3>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
import {data,dataFetch} from "../services/serverservice";
export default {
  name: 'Grid',
  data:function(){
      return {
      gridItems:'',
      displayList:true
      }
  },
  methods:{
     toggleView :function(){
              this.displayList =  !this.displayList
      }
      
  },
  created : function(){
    dataFetch.then(json=>console.log(json))
    this.gridItems = data
    console.log('grid items', this.gridItems)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-bar{
    height:4rem;
    width:100%;
    background-color: #03409c;
}

.icon{
fill:white
}
.icon-wrapper{
    display: flex;
    padding-top:0.5rem;
    margin-left:1rem;
}
.icon-holder{
    background-color: #0d2985;
    margin:0.25rem;
    padding:0.5rem;
    border-radius:4px;
    cursor: pointer;
}
.grid-wrapper{
    display: grid;
    grid-template-columns: repeat(3,auto);
}
.grid-item{
    margin:1rem;
box-shadow:
  0 0px 2.7px rgba(0, 0, 0, 0.009),
  0 0px 6.9px rgba(0, 0, 0, 0.013),
  0 0px 14.2px rgba(0, 0, 0, 0.017),
  0 0px 29.2px rgba(0, 0, 0, 0.021),
  0 0px 80px rgba(0, 0, 0, 0.03)
;
border-radius: 4px;
}
.grid-item>img{
    width:100%;
}
.list-item{
border-radius: 4px;   
margin:1rem;
padding:1rem;
display: flex;
align-items: center;
box-shadow:
  0 0px 2.7px rgba(0, 0, 0, 0.009),
  0 0px 6.9px rgba(0, 0, 0, 0.013),
  0 0px 14.2px rgba(0, 0, 0, 0.017),
  0 0px 29.2px rgba(0, 0, 0, 0.021),
  0 0px 80px rgba(0, 0, 0, 0.03)
;
}
.list-item>img{
    height:100px;
}
.active{
    background-color: white;
    transition: 0.25s;
 
}
.active>.icon{
   fill:#0d2985
}

</style>

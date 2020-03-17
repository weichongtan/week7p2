<template>
  <div>
    <ul>
        <li v-for="item in itemsList" v-bind:key="item.name" >

            <h2 v-on:click="item.show = !item.show">{{item.name}}</h2>
            <img v-bind:src="item.image" v-show="item.show"/>
            <buttonComponent></buttonComponent>
            <button name="delete" v-bind:id="item.id" v-on:click="deleteItem(index,item)">Delete</button>
            <button onclick = "update">Update</button>    
                
            
        </li>
    </ul>
  </div>
</template>


<script>
import database from '../firebase.js'
import ButtonComponent from './ButtonComponent.vue'

export default {
  data(){
    return{
        itemsList: []
    }
  },
  components:{
    'buttonComponent':ButtonComponent
  },
  methods:{
    fetchItems:function(){
      let item={}
      database.collection('items').get().then((querySnapShot)=>{
        
        querySnapShot.forEach(doc=>{
          item=doc.data()
          item.show=false
          item.id=doc.id
          this.itemsList.push(item)
        }) 
      }) 
    },
    deleteItem: function(index,item){
      database.collection('items').doc(item.id).delete()
      this.itemsList.splice(index,1)
      console.log("Item Deleted Successfully")
    },
  },
    created(){
      this.fetchItems() 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}
h2{
  text-align: center
}
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
img{
  width:100px;
  height:100px;
}
</style>
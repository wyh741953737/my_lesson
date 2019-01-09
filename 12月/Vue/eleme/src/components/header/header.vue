<template>
<div class="header">
    <img :src="seller.avatar" alt="avatar"/>
    <div class="shop-title">{{seller.name}}</div>
     <div class="descripe">{{seller.supports}}</div>
      <div class="youhui">
          <div>
              <ul>
                  <li v-for="(item,index) in seller.surports" :key="index">{{item.type}}</li>
              </ul>
          </div>
          <div>3</div>
      </div>
</div>
</template>
<script>
export default{
    props:{
        seller:{
            type:Object
        }
    },
    data(){
    return{
        detailShow:false
    }
    },
    created(){
        console.log(this.seller)
    }  
}
</script>
<style>
.shop-title{
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid red;
    font-size: 16px;
}
.descripe{
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid red;
    font-size: 10px;
}
.youhui{
    height: 25px;
    line-height: 25px;
    border: 1px solid red;
    font-size: 10px;
    display: flex;
}
</style>


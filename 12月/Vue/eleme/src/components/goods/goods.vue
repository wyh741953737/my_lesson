<template>
  <div>
    <div class="goods">
      <div class="meu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="menu-item">
            <span class="text border-1px"> {{item.name}}   </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
      return{
            goods:[
           
        ]
      }
    }
}
</script>
<style lang="stylus">
  .goods
    display flex
</style>
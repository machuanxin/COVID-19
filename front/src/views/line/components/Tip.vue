<template>
  <div class="class"><p>数据说明：（1）2020年2月12日，针对湖北省疫情特点，将临床诊断病例数纳入确诊病例数
  </p><p style="margin-left:50px;">（2）2020年4月17日，对截止2020年4月16日24时的数据进行了订正，武汉核增确诊325例，出院核减965例，死亡核增1290例</p>
  </div>
</template>

<script>
import resize from '@/utils/resize'
export default {
  name: 'Tip',
  mixins: [resize]
}
</script>

<style scoped>
.class{
  width:80%;
  margin:auto;
  padding:2px 5px 2px 5px;
  background-color: rgb(254, 240, 240);;
  border-radius: 4px;
  border-left:5px solid #F56C6C;
  font-size:10px
}
</style>


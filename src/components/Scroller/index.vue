
<template><!--下拉刷新组件-->
    <div class="wrapper" ref="wrapper">
        <slot><!--父组件在子组件中插入内容-->

        </slot>
    </div>
    
</template>

<script>

//引入better-scroll
import BScroll from "better-scroll";

export default {
    name:'Scroller',
    props:{
        handleToScroll:{
            type:Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted(){
        var scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 1
          });

          this.scroll=scroll;

        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos)
        });
        
        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos)
        });
    },
    methods:{
        toScrollTop(y){//实现定向城市侧边跳转
             this.scroll.scrollTo(0,y)
        }
    }
}
</script>

<style scoped>
    .wrapper {
        height:  100%;
    }
</style>
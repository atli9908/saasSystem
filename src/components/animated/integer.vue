<template>
    <span href="">{{numValue}}</span>
</template>

<script>
export default {
    data (){
        return {
            numValue:0
        }
    },
    props:{
        value:{
            type:Number,
            required:true //是否必须传值
        }
    },
    watch:{
        value(newValue,oldValue){
            this.tween(oldValue,newValue)
        }
    },
    mounted(){
        this.tween(0,this.value)
    },
    methods:{
        tween(startValue, endValue) {
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({ numValue: startValue })
                .to({ numValue: endValue }, 1000)
                .onUpdate(function () {
                vm.numValue = this.numValue.toFixed(2)
                })
                .start()

            animate()
        }
    }
}
</script>
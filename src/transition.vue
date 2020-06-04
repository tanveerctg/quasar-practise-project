<template>
    <div>
        <transition
                appear
                :enter-active-class="animation"
                >
            <slot></slot>
            
        </transition>
    </div>
</template>

<script>
export default {
    props:['animation']
}
</script>

<style lang="scss" scoped>
</style>
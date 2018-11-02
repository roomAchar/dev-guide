<template>
    <div>
        <h3>Home Menu</h3>
        <div class="box">
            <router-view/>
        </div>
       
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style>
    .box{
        width: 800px;
        height: 600px;
        border: 1px black solid;
        margin: 0 auto;
    }
</style>

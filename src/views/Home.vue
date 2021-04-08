<template>
    <div class="Home-box">
        <div class="sidebar">
123
        </div>
        <div class="container">
            123
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style>

    .sidebar {
        width: 300px;
        height: 100vh;
        background: salmon;
        font-size: 2rem;
        text-align: center;
    }
    .container{
        height: 100vh;
        background: aqua;
        flex-grow: 1;
    }
    .Home-box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
</style>
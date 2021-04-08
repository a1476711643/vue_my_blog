<template>
    <div class="Home-box">
        <div class="sidebar">
            <div class="pic">
                <img src="../assets/Chain.png" alt="" />
            </div>
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
body {

}
    .sidebar {
        width: 300px;
        height: 100vh;
        text-align: center;
    }
    .pic {
        margin-top: 40px;
    }
    .pic img{
        width: 200px;
        height: 200px;
        border: 1px solid #000;
        border-radius: 250px;
    }
    .container{
        height: 100vh;
        background: aqua;
        flex-grow: 1;
    }
    .Home-box {
        margin: 0 auto;
        height: 100%;
        width: 65%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
</style>
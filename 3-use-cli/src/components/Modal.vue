<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a dolores placeat reprehenderit nihil culpa illum, porro odit quis, omnis unde non, deserunt libero repudiandae veritatis maxime! Quia, labore similique?</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.modal h1 {
    color: rgb(44, 210, 210);
    border: none;
    padding: 0;
}
.modal p {
    font-style: normal;
}
</style>
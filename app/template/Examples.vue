<template>
    <p>Hello,{{name}}</p>
</template>

<script>
    export default {
        name: 'Examples',
        data: function() {
            return {
                name: 'jackwang'
            }
        }
    };
</script>

<style>
    p {
        color: red;
        font-size: 20px;
        background: url('../images/test.png');
    }
</style>
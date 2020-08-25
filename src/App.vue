<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
html,body,#app{
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 18px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
::-webkit-scrollbar{
  width: 0;
}
</style>
<template>
    <div class="home-index">
        <slot name="header"></slot>
        <slot name="main"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<style>
     .home-index {
        height: 100%;
        width: 100%;
    }
</style>
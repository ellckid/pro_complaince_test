<template>
    <div id="app" class="main">
        <router-view />
    </div>
</template>
<style>
.main {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

* {
    padding: 0px;
    margin: 0px;
    border: none;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

h1,
span {
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    user-select: text;
}

a,
a:link,
a:visited {
    text-decoration: none;
}

input::-ms-clear {
    display: none;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

label {
    cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
    outline: none;
}
</style>



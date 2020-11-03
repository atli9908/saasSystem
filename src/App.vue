<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
}
p,h3,h2,h4,h5,h6,a{
  padding: 0;
  margin: 0;
}
h6{
  font-weight:500;
  font-size: 14px;
  color: #333;
}
p,a,span,li{
  font-size: 12px !important;
  text-decoration:none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: rgb(252, 252, 252);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* 文字超出显示省略号 */
.my-ellipsis{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

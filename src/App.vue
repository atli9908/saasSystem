<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view />
  </div>
</template>

<style>
html,body,p,h3,h2,h4,h5,h6,a{
  padding: 0;
  margin: 0;
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

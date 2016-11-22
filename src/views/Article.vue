<template lang="html">
<div class="content">
  <header class="header">
    <h1>Article</h1>
    <nav class="nav">
      <li class="nav-item">item1</li>
      <li class="nav-item">item2</li>
      <li class="nav-item">item3</li>
      <li class="nav-item">item4</li>
      <li class="nav-item">item5</li>
    </nav>
  </header>
  <div class="main">
    <div class="form">
      <button class="btn danger">删除</button>
      <a href="javascript:void(0);" class="btn">
        <span class="primaryColor">提交</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
:root {
  --mainColor: red;
  --danger-theme: {
    color: white;
    background-color: red;
  };
  --navColor: lightblue;
  --fontSize: 1rem;
}
h1 {
  color: var(--mainColor);
  font-size: calc(var(--fontSize) * 2);
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
li {
  list-style: none;
  flex: 1 0 auto;
  line-height: 44px;
  padding-right: 10px;
  background-color: var(--navColor);
  background-clip: content-box;
}
li:last-of-type {
  padding-right: 0;
}
.danger {
  @apply --danger-theme;
}

/* media */

@custom-media --small-viewport (max-width: 30em){

}
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px) {

}
@media (--small-viewport) {
  h1 {
    background-color: #ddd;
  }
}
@media (--only-medium-screen) {
  h1 {
    color: yellow;
  }
}

/* 定制选择器 */
@custom-selector :--button button, .button;
@custom-selector :--enter :hover, :focus;

:--button {
  background-color: lightgrey;
}
:--button:--enter {
  background-color: lightgreen;
}
.btn {
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
}
/* 嵌套 */
a {
  background-color: #ddd;
  text-decoration: none;
  color: color(red alpha(-10%));
  &:hover {
    background-color: color(red blackness(80%));
  }
  & span {
    color: lightcyan;
  }

  @media (min-width: 30em) {
    color: yellow;
  }
}
</style>

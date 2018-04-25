<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let {data} = await axios.get('/api')
    console.log(data.data)
    return data.data
  },
  head () {
    return {
      title: 'Nuxt + Koa'
    }
  }
}
</script>

<style>
h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}

.container {
  margin: auto;
}
</style>

<template>
  <section class="section">
    <div class="container">
      <b-field type="is-dark" label="Banco de Dados">
            <b-select placeholder="Selecione"  rounded>
                <option value="flint">MySQL</option>
                <option value="silver">PostgreSQL</option>
            </b-select>
        </b-field>
        <b-field
        type="is-dark"
         label="Host">
            <b-input rounded value=""></b-input>
        </b-field>
        <b-field label="Username"
            type="is-dark"
            message="This username is available">
            <b-input rounded value="admin" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-dark"
            :message="['Password must have at least 8 characters']">
            <b-input rounded value="" type="password" maxlength="30"></b-input>
        </b-field>


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
      title: 'Setup'
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

.control {
    font-size: 1rem;
    position: relative;
    text-align: center;
    margin: 0;
}

@media screen and (min-width: 1024px) {
  .container {
      max-width: 25%;
      width: 960px;
  }
}

</style>

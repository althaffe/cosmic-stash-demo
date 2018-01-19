<template>
  <main>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1 title">
            A Curated Collection of JavaScript Awesomeness
          </h1>
        </div>
      </div>
    </section>
    <section class="section category-list">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="category in categories" :key="category._id">
            <router-link :to="{ name: 'Single', params: {slug: category.slug} }" class="box is-fullheight">
              <p class="title">
                {{category.title}}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import cosmic from '@/resources/cosmic'
export default {
  data () {
    return {
      categories: ''
    }
  },
  created () {
    const params = {
      type_slug: 'categories'
    }
    cosmic.getObjectsByType(params).then(data => {
      this.categories = data.objects
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
img {
  // width: 120px;
  border: 3px solid #333;
}
.box {
  min-height: 250px;
}
</style>

<template>
  <main>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-1 title has-underline">
            <router-link to="/" class="underline">Stash</router-link> / {{ title }}
          </h1>
        </div>
      </div>
    </section>
    <section class="section resource-list">
      <div class="container">
          <div class="box resource-single" v-for="resource in resources" :key="resource._id">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128 resource-image">
                  <a :href="resource.metadata.link">
                    <img :src="resource.metadata.image.imgix_url + '?w=300'" alt="Image">
                  </a>
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <a class="is-size-4 has-text-weight-bold resource-title has-text-dark" :href="resource.metadata.link">
                          {{ resource.title }}
                        </a>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <a class="button is-warning is-small" :href="resource.metadata.link">
                          <span>&#128279; Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p v-html="resource.content"></p>
                </div>
              </div>
            </article>
          </div>
        <!-- </div> -->
      </div>
    </section>
  </main>
</template>

<script>
import cosmic from '@/resources/cosmic'
export default {
  data () {
    return {
      title: '',
      resources: [],
      count: ''
    }
  },
  created () {
    const params = {
      slug: this.$route.params.slug
    }
    cosmic.getObject(params).then(data => {
      this.title = data.object.title
      const searchParams = {
        type_slug: 'resources',
        metafield_key: 'category',
        metafield_value: data.object._id
      }
      cosmic.searchObjectType(searchParams).then(data => {
        this.resources = data.objects
        this.count = data.total
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.resource-list .container {
  max-width: 760px;
}
.resource-single .media {
  align-items: center;
}
.resource-title {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0;
}
.resource-image {
  display: flex;
  align-items: center;
}
.resource-image a {
  height: 100%;
  margin: 0 auto;
}
.resource-image img {
  width: auto;
  max-height: 100%;
}
.underline {
  text-decoration: underline;
}
</style>

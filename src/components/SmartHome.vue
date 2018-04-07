<template>
  <div class="container">

    <div class="row">

      <div class="col-sm content-view">
        <router-view/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'SmartHome'
};
</script>

<style lang="scss">
.content-view {
    @media only screen and (min-width: 480px) {
        padding: 0.5rem 1rem;
    }
    .row {
        margin-bottom: 10px;
    }
}
</style>

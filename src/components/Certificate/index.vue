<template>
  <div class="certificate">
    <div class="certificate__input">
      <el-input placeholder="Type your name" v-model="name"></el-input>
      <el-button :disabled="!name.length" type="success" @click="createCertificate()" round>Create Certificate</el-button>
    </div>
    <certificate-file class="certificate__img" :name="name" />
    <canvas ref="canvas" class="certificate__canvas" />
  </div>
</template>

<script>
import CertificateFile from './File'

export default {
  name: 'CertificatePage',
  data: () => ({
    name: ''
  }),

  components: {
    CertificateFile
  },

  methods: {
    createCertificate() {
      const name = this.name
      const canvas = this.$refs.canvas
      const element = document.getElementById('fileCertificate')
      const downloadAnchorNode = document.createElement('a')
      const domURL = self.URL || self.webkitURL || self
      const img = new Image()

      canvas.width = 768
      canvas.height = 630

      const ctx = canvas.getContext('2d')
      const svg = new Blob([element.outerHTML], { type: 'image/svg+xml;charset=utf-8' })
      const url = domURL.createObjectURL(svg)

      img.onload = function () {
        ctx.drawImage(this, 0, 0)
        domURL.revokeObjectURL(url)

        downloadAnchorNode.setAttribute('href', canvas.toDataURL())
        downloadAnchorNode.setAttribute('download', `JS Basics Certificate ${name}.png`)
        downloadAnchorNode.click()
        downloadAnchorNode.remove()
      }

      img.src = url
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles'

.certificate
  &__input
    padding 40px 21px
    display flex
    flex-direction column
    align-items center
    justify-content center

    .el-input
      max-width 300px

    input
      text-align center

    button
      margin-top 20px

  &__canvas
    position absolute
    top -1000%
    opacity 0
    z-index -1
</style>

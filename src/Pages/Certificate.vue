<template>
  <div>
    <certificate-page />
  </div>
</template>

<script>
import CertificatePage from '@/components/Certificate'

export default {
  name: 'Certificate',
  components: {
    CertificatePage
  },

  beforeMount() {
    this.answers = JSON.parse(localStorage.getItem('testAnswers')) || []

    if (!this.answers.length) this.$router.push({ path: '/' })
  }
}
</script>

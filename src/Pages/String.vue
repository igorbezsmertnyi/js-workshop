<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6.1 String</h1>
    </div>

    <div class="tutorial__body">
      <p>
        <mark>Strings</mark> are sequences of symbols in Unicode. String create by enclosing the text that 
        needs to be placed in them, into a double ("") or single ('') quotes. As already mentioned when we 
        working with the string we can rely on the appropriate object wrapper in the prototype of which there 
        are many useful methods, among them - <mark>substring()</mark>, <mark>indexOf()</mark>,
        <mark>concat()</mark>.
      </p>
      <p>
        String, like other primitive value, is immutable. For example <code>concat()</code> does not modify an 
        existing line but creates a new one.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/dbdb4260a81d707a149e1424ae26a7d4
      </VEmbed>

      <h3>Enclosing quotation marks</h3>
      <p>
        Let’s say you’re trying to use quotation marks inside a string. You’ll need to use opposite quotation marks 
        inside and outside. That means strings containing single quotes need to use double quotes and strings containing 
        double quotes need to use single quotes.
      </p>
      
      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/b1b8986a8d18644fb55a9cccca01da59
      </VEmbed>

      <p>
        Alternatively, you can use a backslash \ to escape the quotation marks. This lets JavaScript know in advance that 
        you want to use a special character. Here’s what that looks like reusing the examples above:
      </p>

      <VEmbed class="tutorial__gist" :id="gists[2]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/f6595c6a86fa62413ccf901a731c1161
      </VEmbed>

      <h3>Properties and methods</h3>

      <p>
        Strings have their own built-in variables and functions, also known as <mark>properties</mark> and <mark>methods</mark>. 
        Here are some of the most common ones.
      </p>

      <p>
        <mark>length</mark><br/>
        A string’s length property keeps track of how many characters it has.
      </p>
      
      <VEmbed class="tutorial__gist" :id="gists[3]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/e54b97da367a3e1fa4dca630f0a71290
      </VEmbed>

      <p>
        <mark>toLowerCase</mark><br/>
        A string’s toLowerCase method returns a copy of the string with its letters converted to lowercase. Numbers, symbols, 
        and other characters are not affected.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[4]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/f78f37bef350fe42047255fae016839c
      </VEmbed>

      <p>
        <mark>toUpperCase</mark><br/>
        A string’s toUpperCase method returns a copy of the string with its letters converted to capitals. Numbers, symbols, 
        and other characters are not affected.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[5]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/fc1ba493640f982fadf94497a859e32f
      </VEmbed>

      <p>
        <mark>trim</mark><br/>
        A string’s trim method returns a copy of the string with beginning and ending whitespace characters removed.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[6]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/bc35799a01ed7a4c49cdac87cc81c1f2
      </VEmbed>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'StringPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'dbdb4260a81d707a149e1424ae26a7d4',
      'b1b8986a8d18644fb55a9cccca01da59',
      'f6595c6a86fa62413ccf901a731c1161',
      'e54b97da367a3e1fa4dca630f0a71290',
      'f78f37bef350fe42047255fae016839c',
      'fc1ba493640f982fadf94497a859e32f',
      'bc35799a01ed7a4c49cdac87cc81c1f2'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>

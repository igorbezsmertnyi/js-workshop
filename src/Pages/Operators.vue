<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>9. Operators</h1>
    </div>

    <div class="tutorial__body">
      <p>
        JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.
      </p>

      <h3>Arithmetic operators are used to perform arithmetic on numbers:</h3>
      <table class="w3-table-all notranslate">
        <thead class="tutorial__table__2">
          <tr>
            <th>Operator</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+</td>
            <td>Addition</td>
          </tr>
          <tr>
            <td>-</td>
            <td>Subtraction</td>
          </tr>
          <tr>
            <td>*</td>
            <td>Multiplication</td>
          </tr>
          <tr>
            <td>&</td>
            <td>Modulus (Division Remainder)</td>
          </tr>
          <tr>
            <td>++</td>
            <td>Increment</td>
          </tr>
          <tr>
            <td>--</td>
            <td>Decrement</td>
          </tr>
        </tbody>
      </table>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/d51ee20f7499da7e01ec875edca6632b
      </VEmbed>

      <h3>JavaScript Assignment Operators</h3>
      <table class="w3-table-all notranslate">
        <thead class="tutorial__table__3">
          <tr>
            <th>Operator</th>
            <th>Example</th>
            <th>Same As</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>=</td>
            <td>x = y</td>
            <td>x = y</td>
          </tr>
          <tr>
            <td>+=</td>
            <td>x += y</td>
            <td>x = x + y</td>
          </tr>
          <tr>
            <td>-=</td>
            <td>x -= y</td>
            <td>x = x - y</td>
          </tr>
          <tr>
            <td>*=</td>
            <td>x *= y</td>
            <td>x = x * y</td>
          </tr>
          <tr>
            <td>/=</td>
            <td>x /= y</td>
            <td>x = x / y</td>
          </tr>
          <tr>
            <td>%=</td>
            <td>x %= y</td>
            <td>x = x % y</td>
          </tr>
        </tbody>
      </table>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/fbd599e61c25c9a71f82e3d36404d6c4
      </VEmbed>

      <br/>

      <h3>JavaScript String Operators</h3>
      <p>
        The + operator, and the += operator can also be used to concatenate (add) strings.
        Given that str1 = "Good ", str2 = "Morning", and str3 = "", the table below explains the operators:
      </p>

      <VEmbed class="tutorial__gist" :id="gists[2]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/b6c3473a1bdf59eb447be319f527b491
      </VEmbed>

      <br/>

      <h3>Comparison Operators</h3>
      <p>
        Comparison operators are used in logical statements to determine equality or difference between variables or values.
        Given that x = 5, the table below explains the comparison operators:
      </p>
      <table class="w3-table-all notranslate">
        <thead class="tutorial__table__3">
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Comparing</th>
            <th>Returns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>==</td>
            <td>equal to</td>
            <td>x == 8</td>
            <td>false</td>
          </tr>
          <tr>
            <td>===</td>
            <td>equal value and equal type</td>
            <td>x === "5"</td>
            <td>false</td>
          </tr>
          <tr>
            <td>!=</td>
            <td>not equal</td>
            <td>x != 8</td>
            <td>true</td>
          </tr>
          <tr>
            <td>!==</td>
            <td>not equal value or not equal type</td>
            <td>x !== "5"</td>
            <td>true</td>
          </tr>
          <tr>
            <td>></td>
            <td>greater than</td>
            <td>x > 8</td>
            <td>false</td>
          </tr>
          <tr>
            <td>&lt;</td>
            <td>less than</td>
            <td>x &lt; 8</td>
            <td>true</td>
          </tr>
          <tr>
            <td>>=</td>
            <td>greater than or equal to</td>
            <td>x >= 8</td>
            <td>false</td>
          </tr>
          <tr>
            <td>&lt;=</td>
            <td>less than or equal to</td>
            <td>x &lt;= 8</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <br/>

      <h3>Conditional (Ternary) Operator</h3>
      <p>The conditional operator assigns a value to a variable based on a condition.</p>
      
      <VEmbed class="tutorial__gist" :id="gists[3]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/fe1da6903296b2049ad20812eec7aaf8
      </VEmbed>

      <br/>

      <h3>Logical Operators</h3>
      <p>
        Logical operators are used to determine the logic between variables or values.
        Given that x = 6 and y = 3, the table below explains the logical operators:
      </p>

      <table class="w3-table-all notranslate">
        <thead class="tutorial__table__3">
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&&</td>
            <td>add</td>
            <td>(x < 10 && y > 1) is true</td>
          </tr>
          <tr>
            <td>||</td>
            <td>or</td>
            <td>(x === 5 || y === 5) is false</td>
          </tr>
          <tr>
            <td>!</td>
            <td>not</td>
            <td>!(x === y) is true</td>
          </tr>
        </tbody>
      </table>

      <h3>JavaScript Bitwise Operators</h3>
      <p>
        Bit operators work on 32 bits numbers. Any numeric operand in the operation 
        is converted into a 32 bit number. The result is converted back to a JavaScript number.
      </p>
      <table class="w3-table-all notranslate">
        <thead class="tutorial__table__6">
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
            <th>Same as</th>
            <th>Result</th>
            <th>Decimal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&</td>
            <td>AND</td>
            <td>x = 5 & 1</td>
            <td>0101 & 0001</td>
            <td>0001</td>
            <td>1</td>
          </tr>
          <tr>
            <td>|</td>
            <td>OR</td>
            <td>x = 5 | 1</td>
            <td>0101 | 0001</td>
            <td>0101</td>
            <td>5</td>
          </tr>
          <tr>
            <td>~</td>
            <td>NOT</td>
            <td>x = ~ 5</td>
            <td>~0101</td>
            <td>1010</td>
            <td>10</td>
          </tr>
          <tr>
            <td>^</td>
            <td>XOR</td>
            <td>x = 5 ^ 1</td>
            <td>x = 0101 ^ 0001</td>
            <td>0100</td>
            <td>4</td>
          </tr>
          <tr>
            <td><<</td>
            <td>Left shift</td>
            <td>x = 5 << 1</td>
            <td>0101 << 1</td>
            <td>1010</td>
            <td>10</td>
          </tr>
          <tr>
            <td>>></td>
            <td>Right shift</td>
            <td>x = 5 >> 1</td>
            <td>0101 >> 1</td>
            <td>0010</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      <br/>

      <h3>The typeof Operator</h3>
      <p>
        The <mark>typeof</mark> operator returns the type of a variable, object, function or expression:
      </p>

      <VEmbed class="tutorial__gist" :id="gists[5]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ed99bae2e7ecdf38ecdc8b062b37e49c
      </VEmbed>

      <h3>The in Operator</h3>
      <p>The in operator returns true if the specified property is in the specified object, otherwise false:</p>

      <VEmbed class="tutorial__gist" :id="gists[6]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/c618a88ddf0f50905e18c900a7ec2051
      </VEmbed>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'OperatorsPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'd51ee20f7499da7e01ec875edca6632b',
      'fbd599e61c25c9a71f82e3d36404d6c4',
      'b6c3473a1bdf59eb447be319f527b491',
      'fe1da6903296b2049ad20812eec7aaf8',
      'ed99bae2e7ecdf38ecdc8b062b37e49c',
      'c618a88ddf0f50905e18c900a7ec2051'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>


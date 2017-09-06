<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Welcome to the Landing Page</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <blockquote>
        We are building a basic application with authentication and a realtime databased hosted on Google Servers
      </blockquote>
    </v-flex>

    <v-flex class="text-xs-center" mt-5>
      <v-btn primary to="/signup">Sign Up</v-btn>
      <v-btn to="/signin">Sign In</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>

<template>
  <div>
    <h1>Contributors</h1>
    <p>Total Contributors: {{ totalContributors }}</p>
    <ul>
      <li v-for="contributor in contributors" :key="contributor.author">
        <h2>{{ contributor.author }}</h2>
        <p>Total Contributions: {{ contributor.total_contributions }}</p>
        <p>
          Clans Contributed To:
          <ul>
            <li v-for="(clan, index) in contributor.clans_contributed_to" :key="index">
              {{ clan }}
            </li>
          </ul>
        </p>
        <p>
          Contribution Range:
          {{ formatDate(contributor.contribution_range.start) }} -
          {{ formatDate(contributor.contribution_range.end) }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { contributors } from '../data/contributor';

export default {
  data() {
    return {
      contributors: [],
    };
  },
  computed: {
    totalContributors() {
      return this.contributors.length;
    },
  },
  mounted() {
    // Simulating fetching data from an API
    // Replace this with your actual data-fetching logic
    this.fetchContributors();
  },
  methods: {
    fetchContributors() {
      // Assuming the data is fetched from a local file
      // Replace this with your actual fetch logic
      this.contributors = contributors.items;
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-GB'); // Format as DD-MM-YYYY
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<template>
  <div class="main-container">
    <h1>Contributors</h1>
    <p>Total Contributors: {{ totalContributors }}</p>
    <ul class="contributors-list">
      <li v-for="contributor in contributors" :key="contributor.author" class="contributor-item">
        <div class="column author">
          <h2>{{ contributor.author }}</h2>
        </div>
        <div class="column total-contributions">
          <p>Total Contributions: {{ contributor.total_contributions }}</p>
        </div>
        <div class="column contribution-range">
          <p>
            Contribution Range:
            {{ formatDate(contributor.contribution_range.start) }} -
            {{ formatDate(contributor.contribution_range.end) }}
          </p>
        </div>
        <div class="column clans-contributed-to">
          <p>Clans Contributed To:</p>
          <ul>
            <li v-for="(clan, index) in contributor.clans_contributed_to" :key="index">{{ clan }}</li>
          </ul>
        </div>
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
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.main-container {
  text-align: center;
  width: 80%; /* Adjust the width as needed */
  margin-left: auto;
  margin-right: auto;
}

.contributors-list {
  list-style: none;
  padding: 0;
}

.contributor-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  width: 100%; /* Adjust as needed */
  margin-left: auto;
  margin-right: auto;
}

.column {
  flex: 1;
  padding: 0 10px;
  text-align: center;
}

.column h2 {
  margin: 0;
}

.column ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 600px) {
  .contributor-item {
    flex-direction: column;
  }
}
</style>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <!-- Search bar header -->
          <th class="stickyHeader">
            <v-text-field
              class="mt-5"
              v-model="search"
              solo
              :label="searchLabel"
              dense
              clearable
              :append-icon="marker ? 'mdi-alpha-e' : 'mdi-alpha-f'"
              @click:append="toggleMarker"
            ></v-text-field>
          </th>
          <!-- Countries header  -->
          <th class="stickyHeader" id="stickyHeader" v-for="filter in filters" v-bind:key="filter._id">
            <span>{{ filter[language] }}</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <!-- Questions under the search bar -->
        <tr v-for="question in filteredQuestions" v-bind:key="question._id">
          <th class="questionBody" style="text-align: left">
            {{ question.labels[language] }}
          </th>
          <!-- Scores -->
          <td v-for="item in filters" v-bind:key="item._id">
            <v-chip label :color="getColor(question._id, item._id)">
              {{ getScore(question._id, item._id) }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import filters from "../assets/filters.json";
import questions from "../assets/questions.json";
import scores from "../assets/scores.json";
import Vue from "vue";
import stickybits from 'stickybits'
const stickyheader = stickybits(".stickyHeader", { useStickyClasses: true });
console.log("stickyHeader ", stickyheader)

export default Vue.extend({
  name: "HTMLOnly",
  data() {
    return {
      search: "",
      marker: true,
      languages: [
        { text: "en", value: "en" },
        { text: "fr", value: "fr" },
      ],
      filters: [] as any,
      scores:  [] as any,
      questions:  [] as any,
    };
  },
  created: function(){
    this.filters = filters;
    this.questions = questions;
    this.scores = scores;
    
  },
  computed: {
    // Filter questions based on input from the search bar
    filteredQuestions: function (): Record<string, any> {
      return this.questions.filter((quesition: any) => {
        console.log(quesition.labels[this.language], this.search);
        return (
          !this.search ||
          quesition.labels[this.language]
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
    // change language based on marker in the search bar
    language: function () {
      if (this.marker) {
        return "en";
      } else {
        return "fr";
      }
    },
    // Change search hint based on language/ marker in the search bar
    searchLabel: function () {
      if (this.marker) {
        return "Search...";
      } else {
        return "Rechercher...";
      }
    },
  },
  methods: {
    // Toggle Marker in the search bar
    toggleMarker() {
      this.marker = !this.marker;
    },
    // Gets the color based on the score
    getColor(question_id: string, filter_id: string) {
      var value = this.getScore(question_id, filter_id);

      if (value < 10) {
        return "score_0_light";
      } else if (value < 20) {
        return "score_1_light";
      } else if (value < 30) {
        return "score_2_light";
      } else if (value < 40) {
        return "score_3_light";
      } else if (value < 50) {
        return "score_4_light";
      } else if (value < 60) {
        return "score_5_light";
      } else if (value < 70) {
        return "score_6_light";
      } else if (value < 80) {
        return "score_7_light";
      } else if (value < 90) {
        return "score_8_light";
      } else if (value < 100) {
        return "score_9_light";
      } else {
        return "score_10_light";
      }
    },
    // Get the score value based on the question_id and filter_id
    getScore(question_id: string, filter_id: string) {
      var qresults = this.scores.filter(
        (item: any) => item.question_id == question_id
      );
      //   console.log("qresults", question_id, filter_id, qresults);
      try {
        var value = qresults[0].scores[0].filter(
          (item: any) => item.filter_id == filter_id
        );
        // console.log("value: ", value[0].value);

        // Reduce number to 2 (rounded) Digits to make values similar to preview
        return new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 2,
        }).format(value[0].value);
      } catch {
        //   return -1 incase no value was found based on question and filter id -> e.g. incomplete data
        return -1;
      }
      //   console.log("qresults", qresults);
    },
  },
});
</script>
<style >
/* Limit table size and set overflow to be (diagonally) scrollable (and smooth)*/
.table {
  width: 1000px;
  max-width: 1000px;
  max-height: 800px;
  overflow: scroll;
}
/* Make table prettier */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}
/* Make Countries be sticky at the top */
thead th {
  position: -webkit-sticky;
  top: 0;
  position: sticky;
  z-index: 1;
}

.stickyHeader.js-is-sticky {
  background-color: red !important
}

/* Have questions be sticky on the left */
tbody th {
  position: sticky;
  position: -webkit-sticky;
  left: 0;
}

/* Make the Search bar be on top of everything, questions and countries are hidden behind it */
thead th:first-child {
  left: 0;
  z-index: 2;
  min-width: 400px;
}
tbody th:first-child {
  left: 0;
  z-index: 1;
  min-width: 400px;
  background: rgb(255, 255, 255);
}

thead th {
  background: rgb(252, 252, 252);
  color: rgb(22, 22, 22);
  height: 70px !important;
}

/* tbody th {
  background: rgb(145, 39, 39);
  border-right: 1px solid #ddd;
} */

/* make table prettier */
th,
td {
  padding: 8px 16px;
  border: 1px solid #e7e6e6;
  text-align: center;
  font-family: arial, sans-serif;
  font-weight: 100;
}

/* Make every second entry slighty darker */
tbody tr:nth-child(even) th {
  background-color: #f3f3f3 !important;
}
tr:nth-child(even) {
  background-color: #f3f3f3;
}
</style>
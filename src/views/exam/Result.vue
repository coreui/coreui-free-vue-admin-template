<template>
    <div>
      <h2>Exam Results</h2>
      <CTable v-if="examResults.length > 0" striped hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Subject</CTableHeaderCell>
            <CTableHeaderCell>Result</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="exam in examResults" :key="exam.id">
            <CTableDataCell>{{ exam.subject }}</CTableDataCell>
            <CTableDataCell :class="getResultClass(exam.result)">{{ exam.result }}</CTableDataCell>
            <CTableDataCell>
              <CButton v-if="exam.result === 'Failed'" color="primary" @click="handleRetake(exam)">Retake Exam</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      <div v-else>
        <p>Loading exam results...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { get } from 'aws-amplify/api';
  import axios from 'axios';
  import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton } from '@coreui/vue';
  
  export default {
    name: 'ExamResults',
    components: {
      CTable,
      CTableBody,
      CTableDataCell,
      CTableHead,
      CTableHeaderCell,
      CTableRow,
      CButton
    },
    data() {
      return {
        examResults: []
      };
    },
    mounted() {
      this.fetchExamResults();
    },
    methods: {
      async fetchExamResults() {
        try {
          const userId = 1;
          const restOperation = get({
            apiName: 'ab3examapi',
            path: `/exam/${userId}`
          });
          const { body } = await restOperation.response;
          this.examResults = await body.json();
        } catch (error) {
          console.error('Error fetching exam results:', error);
        }
      },
      getResultClass(result) {
        if (result === 'Passed') {
          return 'text-success';
        } else {
          return 'text-danger';
        }
      },
      async handleRetake(exam) {
        try {
            const response = await axios.post(
            'https://svmb6a6rch.execute-api.ap-southeast-1.amazonaws.com/default/ab3-sns',
            {
                subject: exam.subject
            },
            {
                headers: {
                'Content-Type': 'application/json'
                }
            }
            );

            console.log('Exam retake request submitted successfully:', response.data);
            } catch (error) {
                console.error('Error submitting exam retake request:', error);
            }
        }
    }
  };
  </script>
  
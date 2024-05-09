<template>
    <div>
        <h2>Exam Data Entry</h2>
        <form @submit.prevent="postExaminationsResult">
            <div class="form-group">
            <label for="class">Class:</label>
            <CFormSelect id="class" v-model="exam.class" :options="['', ...classOptions]" @change="updateNameOptions" required></CFormSelect>
            </div>
            <div class="form-group">
            <label for="name">Name:</label>
            <CFormSelect id="name" v-model="exam.name" :options="['', ...nameOptions]" required></CFormSelect>
            </div>
            <div class="form-group">
            <label for="subject">Subject:</label>
            <CFormSelect id="subject" v-model="exam.subject" :options="['', ...subjects]" required></CFormSelect>
            </div>
            <div class="form-group">
            <label for="result">Result:</label>
            <CFormSelect id="result" v-model="exam.result" :options="['', 'Passed', 'Failed']" required></CFormSelect>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  </template>
  
  <script>
  import { CFormSelect } from '@coreui/vue';
  import { students } from './students.js';
  import { post } from 'aws-amplify/api';
  
  export default {
    name: 'ExamDataEntry',
    components: {
      CFormSelect
    },
    data() {
      return {
        exam: {
          id: '',
          class: '',
          name: '',
          subject: '',
          result: ''
        },
        students,
        classOptions: ['Class A', 'Class B', 'Class C'],
        nameOptions: [],
        subjects: ['Math', 'English', 'Science', 'History'],
        toasts: []
      }
    },
    mounted() {
      this.updateNameOptions(this.exam.class);
    },
    methods: {
      async postExaminationsResult() {
        if (this.exam.class === '' || this.exam.name === '' || this.exam.subject === '' || this.exam.result === '') return;
        this.exam.id = this.students.find(student => student.name === this.exam.name).id;
        try {
          const restOperation = post({
            apiName: 'ab3examapi',
            path: '/exam',
            options: {
              body: {
                id: this.exam.id,
                name: this.exam.name,
                class: this.exam.class,
                subject: this.exam.subject,
                result: this.exam.result
              }
            }
          });
  
          const { body } = await restOperation.response;
          const response = await body.json();
  
          console.log('POST call succeeded');
          console.log(response);
  
          // Reset the form
          this.exam = {
            id: '',
            class: '',
            name: '',
            subject: '',
            result: ''
          };
        } catch (e) {
          console.log('POST call failed: ', JSON.parse(e.response.body));
        }
      },
      updateNameOptions(selectedClass) {
        this.nameOptions = this.students.filter(student => student.class === selectedClass).map(student => student.name);
      }
    },
    watch: {
      'exam.class'(newClass) {
        this.updateNameOptions(newClass);
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  </style>
  
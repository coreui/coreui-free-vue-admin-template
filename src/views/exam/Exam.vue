<template>
    <div>
      <div class="mb-3">
        <input type="text" v-model="classFilter" placeholder="Filter by class..." class="form-control" />
        <input type="text" v-model="subjectFilter" placeholder="Filter by subject..." class="form-control" />
      </div>
      <CTable striped :columns="columns" :items="filteredExams" />
    </div>
</template>
  
<script>
import { get } from 'aws-amplify/api';
  
export default {
    name: 'Exam',
    data() {
        return {
            exams: [], // define the exams property in the data
            classFilter: '',
            subjectFilter: '',
            columns: [
                {
                key: 'id',
                _props: { scope: 'col' },
                },
                {
                key: 'name',
                _props: { scope: 'col' },
                },
                {
                key: 'class',
                _props: { scope: 'col' },
                },
                {
                key: 'subject',
                _props: { scope: 'col' },
                },
                {
                key: 'result',
                _props: { scope: 'col' },
                },
            ],
        };
    },
    computed: {
        filteredExams() {
            return this.exams.filter((exam) => {
                const classMatch = this.classFilter
                ? exam.class.toLowerCase().includes(this.classFilter.toLowerCase())
                : true;
                const subjectMatch = this.subjectFilter
                ? exam.subject.toLowerCase().includes(this.subjectFilter.toLowerCase())
                : true;
                return classMatch && subjectMatch;
            });
        },
    },
    mounted() {
        this.getExaminationsResult();
    },
    methods: {
            async getExaminationsResult() {
            try {
                const restOperation = get({
                apiName: 'ab3examapi',
                path: '/exam',
                });
                const { body } = await restOperation.response;
                const json = await body.json();
                // Sort the fetched data by id
                this.exams = json.sort((a, b) => a.id - b.id);
                
                console.log('GET call succeeded: ', restOperation.response);
                console.log('response: ', json);
            } catch (e) {
                console.log('GET call failed: ', JSON.parse(e.response.body));
            }
        },
    },
};
</script>
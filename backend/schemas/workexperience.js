export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'jobtitle',
            title: 'Job Title',
            type: 'string'
        },
        {
            name: 'jobtitle2',
            title: 'Job Title 2',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'string',
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'string',
        },
        {
            name: 'startDate2',
            title: 'Start Date 2',
            type: 'string',
        },
        {
            name: 'endDate2',
            title: 'End Date 2',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type:'skills'}]
        }
    ]
};
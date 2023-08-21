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
            name: 'company',
            title: 'Company',
            type: 'string'
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
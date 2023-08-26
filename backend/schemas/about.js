export default{
    name:'about',
    title:'About Me',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'school',
            title: 'School',
            type: 'string'
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string'
        },
        {
            name: 'degreeDescription',
            title: 'Degree Description',
            type: 'string'
        },
        {
            name: 'degreeTime',
            title: 'Degree Time Period',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        }
    ]
}
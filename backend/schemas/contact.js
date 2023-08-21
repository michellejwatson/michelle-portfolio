export default{
    name:'contact',
    title:'Contact',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true
            }
        }
    ]
}
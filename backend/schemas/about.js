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
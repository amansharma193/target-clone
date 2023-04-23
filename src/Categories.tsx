import React from 'react'

const data = [
    {
        media_url:"https://target.scene7.com/is/image/Target/GUEST_acf1fbcd-3068-49c9-bd1c-f8cbf75ef8dc?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Mother's Day"
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_5719a5b0-bb27-4d06-8fa9-55faf1abf5eb?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Woman's"
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_d413f446-b133-4e60-bf1d-683497f94f19?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Men's"
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_39b8aef8-6299-4c71-95f0-848feea03b21?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Kids'"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Baby-210913-1631564062108?wid=315&hei=315&qlt=60&fmt=webp",
        title:"baby"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Furniture-210913-1631566212856?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Home"
    },{
        media_url:"https://target.scene7.com/is/image/Target/5xto8-storageorg-QUIVER-190331-1554085362525?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Storage & Organization"
    },{
        media_url:"https://target.scene7.com/is/image/Target/PatioGarden-210913-1631564082284?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Patio & Garden"
    },{
        media_url:"https://target.scene7.com/is/image/Target/KitchenDining-210913-1631564122569?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Kitchen & Dining"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Beauty181103-190722_1563828945271?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Beauty"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Sept_Wk5-0930-Video_Games-Nintendo-CB-Consoles143381-180910_1536591280324?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Video Games"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Toys219475-200305_1583423532760?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Toys"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Sports_Outdoors219475-200305_1583425943604?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Sports & Outdoors"
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_e3b11a2a-a085-4693-853f-c19e52073c94?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Apple"
    },{
        media_url:"//target.scene7.com/is/image/Target/Grocery219475-200305_1583423555572?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Grocery"
    },{
        media_url:"https://target.scene7.com/is/image/Target/HouseholdEssentials_Tide-200519-1589915606672?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Household Essentials"
    },{
        media_url:"https://target.scene7.com/is/image/Target/Pets219475-200305_1583423545822?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Pets"
    },{
        media_url:"https://target.scene7.com/is/image/Target/clearance97188-171020_1508525411214?wid=315&hei=315&qlt=60&fmt=webp",
        title:"Clearance"
    },
]

const Category = (props: any) =>{
    return (
        <span className='category' key={props.data.media_url}>
            <span className='categoryImage'>
                <img src={props.data.media_url} alt={props.data.media_url} />
            </span>
            <span className='categoryTitle'>{props.data.title}</span>
        </span>
    );
}

const Categories = () => {
  return (
    <div>
        <div className='categoryHeader'>Featured Categories</div>
        <span className='allCategory'>Shop all</span>
        <div className='categoryContainer'>
            {
                data.map((ct:any)=><Category data={ct} />)
            }
        </div>
    </div>
  )
}

export default Categories
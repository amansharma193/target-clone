import React from 'react'

const SmartSolution = (props: any) =>{
    return (
        <span className="smartSolution" key={props.data.title}>
            <span className='smartSolutionImage'>
                <img src={props.data.media_url} alt={props.data.title} />
            </span>
            <h3 className='smartSolutionTitle'>{props.data.title}</h3>
            <span className='smartSolutionDescription'>{props.data.description}</span>
        </span>
    )
}

const data=[
    {
        media_url:"https://target.scene7.com/is/image/Target/GUEST_d68c3afc-ca85-4dbc-9732-4b828d46c4f3?wid=526&qlt=80&fmt=webp",
        title:"Car Seat Trade-in Event",
        description:"Get a 20% off coupon for a new car seat,stroller & more when you trade in your old car seat with @circle"
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_c4544461-aaf7-4f1f-ae54-4d6626700d6f?wid=526&qlt=80&fmt=webp",
        title:"Target Zero",
        description:"Join Target and the brands you love on a journey to zero waste."
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_587d45d4-2de1-40b7-864b-9a397e111a0f?wid=526&qlt=80&fmt=webp",
        title:"Target Clean",
        description:"An easy way to identify products formulated without specific ingredients you may not want."
    },{
        media_url:"https://target.scene7.com/is/image/Target/GUEST_d875522a-fe9b-4483-828f-7bee94464574?wid=526&qlt=80&fmt=webp",
        title:"Responsibe Style",
        description:"Explore styles that are responsibly sourced or made."
    }
]

const SmartSolutions = () => {
  return (
    <div>
        <div id="SmartSolutionHeader">Smart Solutions</div>
        <span className='smartSolutionContainer'>
        {
            data.map((ss:any)=><SmartSolution data={ss} /> )
        }
        </span>
    </div>
  )
}

export default SmartSolutions
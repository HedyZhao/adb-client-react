import React,{useState} from 'react'
import './ImpactAssessment.css'
import { Radio,Drawer,Button } from 'antd'

export default function ImpactAssessment() {
  const [open, setOpen] = useState(false);
  const guideData=[
    {
        type:'Tier 1',
        content:[
            {
                title:'',
                content: ['Use of SPS 2009 and WB definition to gauge significance']
            },
            {
                title: 'Environment',
                content: ['Category A – Potential environmental impacts are likely to be significant if they are irreversible, diverse, or unprecedented and may affect an area larger than the sites or facilities subject to physical works.', 'Category B – Potential environmental impacts are less adverse than those of category A and are site-specific, few if any of them are irreversible, and in most cases, mitigation measures can be designed more readily.','Category C – Potential environmental impacts are likely to have minimal or no adverse environmental impacts.'
            ]
            },
            {
                title: 'Involuntary Resettlement',
                content: ['Degree of impacts shall be determined by (i) the scope of physical and economic displacement, and (ii) the vulnerability of the affected persons. ADB-supported project is considered significant if 200 or more persons will experience major impacts, which are defined as (i) being physically displaced from housing, or (ii) losing 10% or more of their productive assets (income generating). The level of detail and comprehensiveness of the resettlement plan are commensurate with the significance of the potential impacts and risks.']
            },
            {
                title: 'Indigenous Peoples',
                content: ['Significance of impacts of an ADB-supported project is determined by assessing (i) the magnitude of impact in terms of (a) customary rights of use and access to land and natural resources; (b) socioeconomic status; (c) cultural and communal integrity; (d) health, education, livelihood, and social security status; and (e) the recognition of indigenous knowledge; and (ii) the level of vulnerability of the affected Indigenous Peoples community.']
            },
        ]
    },
    {
        type: 'Tier 2',
        content: [
            {
                title: 'Potential impact is significant if it is likely to have significant adverse impacts that are irreversible, diverse, or unprecedented. These impacts may affect an area larger than the sites or facilities subject to physical works.',
                content: ['If the response to scoping questions is YES, equivalent to 75% or more, then High.', 'If the response to scoping questions is YES, equivalent to greater than 50% but less than 75%, then Medium.','3) If the response to scoping questions is YES, equivalent to below 50%, then Low.']
            },
        ]
    },

  ]

  const handleOpenDrawer=(e)=>{
    e.preventDefault();
    setOpen(true);
  }
  const handleCloseDrawer=()=>{
    setOpen(false);
  }
  return (
    <div className='impactAssessment-box'>
        <div className='project-section-title'>
            Questions to Guide Significance of Impacts
            <a className='reference' onClick={handleOpenDrawer}>(Reference Criteria)</a>
        </div>
        <div className='question-box'>
            <div className='question-title'>
                1. Will there be a large change in environmental conditions ?
            </div>
            <div className='question-answer'>
                <Radio.Group defaultValue="" buttonStyle="solid">
                    <Radio.Button value="1">Yes</Radio.Button>
                    <Radio.Button value="0">No</Radio.Button>
                </Radio.Group>
            </div>
        </div>
        <div className='project-btn'>
                    <Button  style={{marginRight:"5px",background:'green',color:'white',border:"none"}}>Back</Button>
                    <Button type="primary" style={{marginRight:"5px"}}>Continue</Button>
                    <Button>Reset</Button>
        </div> 
        <Drawer title="Reference Criteria" placement="right" onClose={handleCloseDrawer} open={open} width={500}>
            <div class="content-box mb-5" >
                {
                    guideData.map((item,index)=>{
                        return  <div>
                                        <div className="item-type" key={index}>
                                            {item.type}
                                        </div>
                                        {
                                            item.content.map(i=>{
                                                return <div className="item-content" >
                                                            <div className="content-title">
                                                                {i.title}
                                                            </div>
                                                            {
                                                                i.content.map(item=>{
                                                                    return <div>{item}</div>
                                                                })
                                                            }
                                                        </div>
                                            })
                                        }
                                 </div>
                        
                    })
                }
            </div>
        </Drawer>
    </div>
  )
}

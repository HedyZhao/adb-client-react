import { Button,Collapse,Radio  } from 'antd';
import React from 'react'
import './FirstConditions.css'
const {Panel}=Collapse;
export default function FirstConditions() {
  return (
            <div className='first-conditions-box'>
                <div className='project-section-title'>
                        Establishing the Baseline Condition
                </div>
                <div className='project-question-box'>
                    <Collapse accordion>
                        <Panel header="1. Are there features of the local environment on or around the Project location which could be affected by the Project?" key="1">
                            <div className='question-box'>
                                <div className='question-num'>
                                    1.1
                                </div>
                                <div className='question-title'>
                                    Areas which are protected under international or national or local legislation for their ecological, landscape, cultural or other value, which could be affected by the project?
                                </div>
                                <div className='question-answer'>
                                    <Radio.Group defaultValue="" buttonStyle="solid">
                                        <Radio.Button value="1">Yes</Radio.Button>
                                        <Radio.Button value="0">No</Radio.Button>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className='question-box'>
                                <div className='question-num'>
                                    1.2
                                </div>
                                <div className='question-title'>
                                    Areas which are protected under international or national or local legislation for their ecological, landscape, cultural or other value, which could be affected by the project?
                                </div>
                                <div className='question-answer'>
                                    <Radio.Group defaultValue="" buttonStyle="solid">
                                        <Radio.Button value="1">Yes</Radio.Button>
                                        <Radio.Button value="0">No</Radio.Button>
                                    </Radio.Group>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
                <div className='project-btn'>
                    <Button  style={{marginRight:"5px",background:'green',color:'white',border:"none"}}>Back</Button>
                    <Button type="primary" style={{marginRight:"5px"}}>Continue</Button>
                    <Button>Reset</Button>
                </div>            
            </div>
  )
}

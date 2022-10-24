import {Button,Form,Input} from 'antd'
import React,{useState} from 'react'
import './FirstCharacteristics.css'
export default function Characteristics() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
  };
  return (
        <div className='first-characteristics-box'>
            <div className='project-section-title'>
                    1. Is the Project likely to affect the physical condition of any environmental media?
            </div>
            <div className='project-box'>
               <Form
                  labelCol={{
                      span: 14,
                  }}
                  wrapperCol={{
                      span: 14,
                  }}
                  layout="vertical"
                  initialValues={{
                      size: componentSize,
                  }}
                  onValuesChange={onFormLayoutChange}
                  size={componentSize}
              >
                  <Form.Item name={['user', 'introduction']} label="1.1 The atmospheric environment including microclimate and local and larger scale climatic conditions?">
                      <Input.TextArea />
                  </Form.Item>
              </Form>
            </div>
            <div className='project-btn'>
                <Button  style={{marginRight:"5px",background:'green',color:'white',border:"none"}}>Back</Button>
                <Button type="primary" style={{marginRight:"5px"}}>Continue</Button>
                <Button>Reset</Button>
            </div>            
        </div>
  )
}

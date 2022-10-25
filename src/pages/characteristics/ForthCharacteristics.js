import {Button,Form,Input} from 'antd'
import React,{useState} from 'react'
import './ForthCharacteristics.css'
export default function ForthCharacteristics() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
  };
  return (
        <div className='forth-characteristics-box'>
            <div className='project-section-title'>
                    4. Is the Project likely to affect human or community health or welfare?
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
                  <Form.Item name={['user', 'introduction']} label="4.1 The atmospheric environment including microclimate and local and larger scale climatic conditions?">
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

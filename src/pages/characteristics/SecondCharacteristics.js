import { Checkbox,Form,Button } from 'antd';
import React,{useState} from 'react'

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];

export default function SecondCharacteristics() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
  };
  return (
        <div className='first-characteristics-box'>
            <div className='project-section-title'>
                    2. Are releases from the Project likely to have effects on the quality of any environmental media?
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
                <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
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

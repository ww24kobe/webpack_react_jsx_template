import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import React from 'react';

export default class ManyBtn extends React.Component {
    
  render() {
    return (
      <div>
        <Button type="primary" >
          Loading
        </Button>
        <hr/>
        <Button type="primary" size="small" >
          Loading
        </Button>
        <hr/>
        <Button type="primary" icon={<PoweroffOutlined />}  />
        </div>
    );
  }
}
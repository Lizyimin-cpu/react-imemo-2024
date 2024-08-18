import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = (values)=>{
      console.log(values);
      
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish}  validateTrigger="onBlur">
          <Form.Item
          name= "mobile"
          rules={[
            {
              required:true,
              message:'Please input your phone number!',
            },
            {
              pattern:/^04\d{8}$/,
              message:'Please enter the correct phone number (+04)'
            }
          ]}>
            <Input size="large" placeholder="Please enter your phone number" />
          </Form.Item>
          <Form.Item
          name= "code"
          rules={[
            {
              required:true,
              message:'Please input your  verification code!',
            }
          ]}>
            <Input size="large" placeholder="Please enter the verification code" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
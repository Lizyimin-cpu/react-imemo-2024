import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const onFinish = async (values)=>{
      console.log(values);
     //Trigger asynchronous action login
    await dispatch(fetchLogin(values))
    navigate('/')
    message.success('login sucessfully')
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
              pattern:/^1[3-9]\d{9}$/,
              message:'Please enter the correct phone number (+86)'
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
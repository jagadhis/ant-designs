import logo from './logo.svg';
import './App.css';
import {Form,Button,Checkbox,DatePicker,Input,Select,Switch} from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form autoComplete="off" labelCol={{span:10}} wrapperCol={{span:14}}>
          <Form.Item name="Name" label="Name" rules={[{required:true,
          message:"please Enter your Name"},{whitespace:true},{min:3}]}hasFeedback>
            <Input placeholder="Enter Your Name"/>
          </Form.Item>
          <Form.Item name="DOB" label="DOB">
            <DatePicker style={{width:"100%"}} picker="date" placeholder="DD/MM/YYYY"/>
          </Form.Item>
          <Form.Item name="Email" label="Email" rules={[{required:true,
          message:"please Enter your Email"},{type:'email',message:"please enter a valid email"},]}hasFeedback>
            <Input placeholder="Enter Your Email"/>
          </Form.Item>
          <Form.Item name="Gender" label="Gender">
            <Select placeholder="Select Your Gender">
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="Password" label="Password" rules={[{required:true,
          message:"password is required"},
          ]}hasFeedback>
            <Input.Password placeholder="Enter Password"/>
          </Form.Item>
          <Form.Item name="Confirm Password" label="Confirm Password" dependencies={["Password"]} rules={[{required:true,
          message:"password is required"},({getFieldValue})=>({validator(_,value){
            if(!value || getFieldValue('Password')===value){
              return Promise.resolve();
            }
            return Promise.reject("Passwords does not match");
          }})]}hasFeedback>
            <Input.Password placeholder="Re-enter Password"/>
          </Form.Item>
          <Form.Item name="Website" label="Link To Website">
            <Input placeholder="Add Website URL"/>
          </Form.Item>
          <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
          <Form.Item name="AgreeMent" wrapperCol={{span:24}} >
            <Checkbox >Agree To our <a href='#'> Terms And Conditions</a></Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{span:24}}>
            <Button block type='primary' htmlType="submit">
              Register
            </Button>
          </Form.Item>

        </Form>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Form,Button,Checkbox,DatePicker,Input,Select,Switch} from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form labelCol={{span:10}} wrapperCol={{span:12}}>
          <Form.Item name="Name" label="Name">
            <Input placeholder="Enter Your Name"/>
          </Form.Item>
          <Form.Item name="DOB" label="DOB">
            <DatePicker picker="date" placeholder="DD/MM/YYYY"/>
          </Form.Item>
          <Form.Item name="Email" label="Email">
            <Input placeholder="Enter Your Email"/>
          </Form.Item>
          <Form.Item name="Gender" label="Gender">
            <Select placeholder="Select Your Gender">
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="Password" label="Password">
            <Input.Password placeholder="Enter Password"/>
          </Form.Item>
          <Form.Item name="Confirm Password" label="Confirm Password">
            <Input.Password placeholder="Re-enter Password"/>
          </Form.Item>
          <Form.Item name="Website" label="Link To Website">
            <Input placeholder="Add Website URL"/>
          </Form.Item>
          <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
          <Form.Item name="AgreeMent" >
            <Checkbox >Agree To our <a href='#'> Terms And Conditions</a></Checkbox>
          </Form.Item>
          <Form.Item >
            <Button type='primary' htmlType="submit">
              Register
            </Button>
          </Form.Item>

        </Form>
      </header>
    </div>
  );
}

export default App;

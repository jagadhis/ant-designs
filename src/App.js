import logo from './logo.svg';
import './App.css';
import {Form,Button,Checkbox,DatePicker,Input,Select} from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Item name="Name" label="Name">
            <Input placeholder="Enter Your Name"/>
          </Form.Item>
          <Form.Item name="DOB" label="DOB">
            <Input placeholder="DD/MM/YYYY"/>
          </Form.Item>
          <Form.Item name="Email" label="Email">
            <Input placeholder="Enter Your Email"/>
          </Form.Item>
          <Form.Item name="Gender" label="Gender">
            <Select placeholder="Select Your Gender">
            <Select.Option>Male</Select.Option>
            <Select.Option>Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="Password" label="Password">
            <Input.Password placeholder="Enter Password"/>
          </Form.Item>
          <Form.Item name="Confirm Password" label="Confirm Password">
            <Input.Password placeholder="Re-enter Password"/>
          </Form.Item>

        </Form>
      </header>
    </div>
  );
}

export default App;

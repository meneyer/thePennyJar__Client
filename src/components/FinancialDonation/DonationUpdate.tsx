import React, {Component, MouseEvent} from 'react';
import APIURL from "../../helpers/environment"
// import DonationTableAndDelete from "./DonationTableAndDelete"
import {Modal, Form, Input, Button, Radio, InputNumber } from "antd"

const { TextArea } = Input;

export interface DonationDataState{
    choice: string,
    amount: number,
    taxReceipt: boolean,
    messageToRecipient: string,
    isModalVisible:boolean
}

type PropsItems ={
    SessionToken:string
    fetchDonationInfo: () => void,
    donations: number
}

class DonationUpdate extends Component <PropsItems, DonationDataState> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            choice: '',
            amount: 0,
            taxReceipt: false,
            messageToRecipient: '',
            isModalVisible: false,
        }
    }

    // showModal = (isModalVisible: boolean) => {
    //     this.setState=({
    //         isModalVisible: true,
    //     });
    // };
    
    // handleOk = (e: MouseEvent)  => {
    //     this.setState=({
    //     isModalVisible: false
    //     });
    // };
    
    // handleCancel = (e: MouseEvent)  => {
    //     this.setState=({
    //     isModalVisible: false
    //     });
    // };
    

    updateDonation = () => {            
        fetch(`${APIURL}/giveapenny/update/${this.props.donations}`, {
            method: "PUT",
            body: JSON.stringify({
                financialdonation:{ 
                    choice:this.state.choice, 
                    amount: this.state.amount, 
                    taxReceipt: this.state.taxReceipt, 
                    messageToRecipient: this.state.messageToRecipient
            },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.SessionToken,
            }),
            }).then((res) => {
                this.props.fetchDonationInfo()
            });
            }
    

    render(){
        return (
            <div>
                <Button type="primary" 
                onClick={this.updateDonation}
                >Update</Button>   

                {/* <Button type="primary" onClick={this.showModal}> Open Modal  </Button>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>

                <Form 
                onFinish={this.handleSubmit}
                > 

                    <Form.Item label="What would you like to do?" name="choice" rules={[{required: true, message: 'Please input a password'}]}>
                        <Input onChange={(event) =>(this.setState({choice: event.target.value}))} placeholder='Fill Request # ____; Give to the Operations Fund;  Give to the "Need A Penny" Fund'/>
                    </Form.Item>

                    <Form.Item label="Amount">
                    <Form.Item name="Amount" noStyle rules={[{required: true, message: 'Please input an amount'}]}>                     
                        <InputNumber onChange={(event) =>(this.setState({amount: event}))} min={0} />                    
                    </Form.Item>
                    </Form.Item>

                    <Form.Item name="taxReceipt" label="Would you like a tax receipt?" >
                    <Radio.Group onChange={(event) =>(this.setState({taxReceipt: event.target.value}))}>
                        <Radio.Button value="yes">Yes</Radio.Button>
                        <Radio.Button value="no">No</Radio.Button>
                    </Radio.Group>                
                    </Form.Item>

                    <Form.Item label="Message" name="messageToReceipient">
                    <TextArea rows={10}
                    placeholder="Please enter a message to the recipient, if desired, 2000 character maximum" onChange={(event) =>(this.setState({messageToRecipient: event.target.value}))} />
                    </Form.Item>

                    <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>

                    </Form> */}
                {/* </Modal> */}
            </div>    
        );
    }
}
export default DonationUpdate;



import React, {Component} from 'react';
// import UserInfoCreate from './UserInfoCreate';
import UserInfoTable from './UserInfoTable'
import APIURL from '../../helpers/environment'
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image1 from '../assets/michael-longmire-lhltMGdohc8-unsplash.jpg'


export interface UserInfoData{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zipcode: number,
    logData: []
}

type PropsItems ={
    SessionToken:string
}

class UserInfo extends Component <PropsItems, UserInfoData> {
    constructor(props: PropsItems){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            logData: []
        }
    }

        fetchProfileInfo = () => {
        fetch(`${APIURL}/profile/`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            Authorization: this.props.SessionToken,
            }),
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log (logData);
            this.setState({
                logData: logData
            })
        });
    }

    componentDidMount() {
        this.fetchProfileInfo();
    };

    render(){
        return (
            <div>
                <div>
                {this.props.SessionToken === localStorage.getItem('token') && (localStorage.getItem('role') ==="admin" ) ? 
                        <div>                             
                            <UserInfoTable 
                            SessionToken={this.props.SessionToken} 
                            fetchProfileInfo={this.fetchProfileInfo}
                            logData={this.state.logData}
                            />
                            {/* <UserInfoCreate 
                            SessionToken={this.props.SessionToken} 
                            fetchProfileInfo={this.fetchProfileInfo}/> */}
                        </div> 
                        : <div className="boxbg">
                        <Layout>
                            <Content>                                
                                <Row justify="space-around" align="middle">
                                    <div>
                                    <Col span={8}>  
                                    <img id="pennyJarImage2" width={500}  src={Image1} alt=""></img> 
                                    </Col>
                                    </div>
                                    <Col span={12}>  
                                    <br />
                                    <h1 className='title'>The Penny Jar</h1>
                                        <hr />                   
                                        <h1 className='title'>Admin Only</h1>                                   
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>  
                        </div>}
                </div>
            </div>    
        );
    }
}

export default UserInfo;
import React, {Component} from 'react';

// export interface UserInfoData{
//     firstName: string,
//     lastName: string,
//     email: string,
//     phone: string,
//     address: string,
//     city: string,
//     state: string,
//     zipcode: number
// }

// type PropsItems ={

// }

class UserInfoUpdate extends Component <{}, {}> {
    constructor(props: any){
        super(props);
        this.state = {
            // firstName: '',
            // lastName: '',
            // email: '',
            // phone: '',
            // address: '',
            // city: '',
            // state: '',
            // zipcode: 0
        }
    }
    render(){
        return (
            <div>
                Hello from UserInfoUpdate
            </div>    
        );
    }
}

export default UserInfoUpdate;
import * as React from "react";
import { Table } from 'antd';
import { Link } from 'react-router-dom';

export class ListTableView extends React.PureComponent{
    public render() {
        const dataSource = [{
                id: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street'
            }, {
                id: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }];

        const columns = [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text:string, record:any) =>
                    <Link to={`/list/${record.id}`}>{text}</Link>,
            }, {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            }];

        return (
            <Table dataSource={dataSource} columns={columns}/>
        )
    }
}
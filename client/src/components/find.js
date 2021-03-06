import React from 'react';
import { Grid, Store } from 'react-redux-grid';
import { Provider } from 'react-redux';
import { Reducers } from 'react-redux-grid';
const bg = {backgroundColor : '#ABAB25',
width: '90%',
borderStyle: 'inset',
color:'white',
textAlign: 'center'


};
// import {connect} from 'react-redux';
// import * as actions from '../../actions';
/*

"name": "one",
"fType": "two",
"expDate": "2011-10-10",
"note": "this is some note",
"zip": 78681,

*/
export default class Find extends React.Component {

    render(){
         const datasource = 'http://localhost:3090/find';
         const stateKey = 'st';
         const columns = [
             {
                 name: 'Name',
                 width: '15%',
                 className: 'additional-class',
                 dataIndex: 'name',
                 HANDLE_CLICK: () => { console.log('Header Click'); }
             }, {
                 name: 'Food Type',
                 width: '15%',
                 className: 'additional-class',
                 dataIndex: 'fType',
                 HANDLE_CLICK: () => { console.log('Header Click'); }
             },{
                 name: 'Expiration Date',
                 width: '15%',
                 className: 'additional-class',
                 dataIndex: 'expDate',
                 HANDLE_CLICK: () => { console.log('Header Click'); }
             },{
                 name: 'Zip',
                 width: '15%',
                 className: 'additional-class',
                 dataIndex: 'zip',
                 HANDLE_CLICK: () => { console.log('Header Click'); }
             },{
                               name: 'Note',
                               width: '40%',
                               className: 'additional-class',
                               dataIndex: 'note',
                               HANDLE_CLICK: () => { console.log('Header Click'); }
                           }
             ]
             const plugins = {COLUMN_MANAGER: {
                                      resizable: true,
                                      moveable: true,
                                      sortable: {
                                          enabled: true,
                                          method: 'local'
                                      }
                                  }}
             //console.log(store)
             const divStyle = {paddingTop: "30px"}
      return (
          <div >
        <div style={bg} ><h1 style={{ textDecorationLine: 'underline' }}>Available Donations </h1></div>
 <Provider store={ Store }>
 <div style={divStyle}>
       <Grid
               dataSource={datasource}
               stateKey={stateKey}
               columns={columns}
               plugins={plugins}

           />
       </div>
           </Provider>
           </div>
      );
    }
}

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
export default class Notify extends React.Component {

    render(){
         const datasource = 'http://localhost:3090/messages';
         const stateKey = 'st';
         const columns = [
             {
                 name: 'emailFrom',
                 width: '15%',
                 className: 'additional-class',
                 dataIndex: 'emailFrom',
                 HANDLE_CLICK: () => { console.log('Header Click'); }
             }, {
                 name: 'message',
                 width: '15%',
                 className: 'additional-class',
                 dataIndex: 'message',
                 HANDLE_CLICK: () => { console.log('Header Click'); }
             },
             {
                name: 'emailTo',
                width: '15%',
                className: 'additional-class',
                dataIndex: 'emailTo',
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
        <div style={bg} ><h3 style={{ textDecorationLine: 'underline' }}>Recieved Messages</h3></div>
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

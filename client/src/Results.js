import React, { Component } from 'react';
import ReactTable from "react-table";
// import { dummyData } from './data';
import "react-table/react-table.css";



class Results extends Component {
	constructor(props){
    	super(props);
  	}
  
  render() {
    const data = [{
      gene: 'Roy Agasthyan',
      nucleoChange: 26,
      protienChange: 'asdf',
      alias: 'asdf',
      region: 'asdkf',
      repClass: 'aslkdf',
      lastEval: 'sldkf',
      lastUpdated: 'lskdjf',
      url: 'http://www.karlaortiz.xyz/'
    },{
      gene: 'Roy Agasthyan',
      nucleoChange: 26,
      protienChange: 'asdf',
      alias: 'asdf',
      region: 'asdkf',
      repClass: 'aslkdf',
      lastEval: 'sldkf',
      lastUpdated: 'lskdjf',
      url: 'this is a url'
    },{
      gene: 'Roy Agasthyan',
      nucleoChange: 26,
      protienChange: 'asdf',
      alias: 'asdf',
      region: 'asdkf',
      repClass: 'aslkdf',
      lastEval: 'sldkf',
      lastUpdated: 'lskdjf',
      url: 'this is a url'
    },{
      gene: 'Roy Agasthyan',
      nucleoChange: 26,
      protienChange: 'asdf',
      alias: 'asdf',
      region: 'asdkf',
      repClass: 'aslkdf',
      lastEval: 'sldkf',
      lastUpdated: 'lskdjf',
      url: 'this is a url'
    },{
      gene: 'Roy Agasthyan',
      nucleoChange: 26,
      protienChange: 'asdf',
      alias: 'asdf',
      region: 'asdkf',
      repClass: 'aslkdf',
      lastEval: 'sldkf',
      lastUpdated: 'lskdjf',
      url: 'this is a url'
    },{
      gene: 'Roy Agasthyan',
      nucleoChange: 26,
      protienChange: 'asdf',
      alias: 'asdf',
      region: 'asdkf',
      repClass: 'aslkdf',
      lastEval: 'sldkf',
      lastUpdated: 'lskdjf',
      url: 'this is a urlssssdddjdjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfj'
    }]

    const columns = [{
      Header: 'Gene',
      accessor: 'gene'
    },{
      Header: 'Nucleotide Change',
      accessor: 'nucleoChange'
    },{
      Header: 'Protien Change',
      accessor: 'protienChange'
    },{
      Header: 'Alias',
      accessor: 'alias'
    },{
      Header: 'Region',
      accessor: 'region'
    },{
      Header: 'Reported Classification',
      accessor: 'repClass'
    },{
      Header: 'Last Evaluated',
      accessor: 'lastEval'
    },{
      Header: 'Last Updated',
      accessor: 'lastUpdated'
    },{
      Header: 'More Information',
      accessor: 'url',
      Cell: e =><a target="_blank" href={e.value}> {e.value} </a>
    }]

    return (
          <div className="table">
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {3}
                pageSizeOptions = {[5, 10, 50, 100]}
              />
          </div>      
    )

  }

}

export default Results;

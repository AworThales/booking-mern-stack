import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import axios from "axios";

const Datatable = ({columns}) => {
  // const [data, setData] = useState(userRows);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const {data, loading, error} = useFetch(`/${path}`);

  useEffect(()=>{
    setList(data);
  },[data])
  
  // delete row
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      // taking our data and filter it as myItem then take myItm id and compare with our params id
      setList(list.filter(myItem=>myItem._id !==id));
    } catch (err) {}
  };

  const actionColumn = [
    { 
    field: "action",
    headerName: "Action", 
    width: "200",
    renderCell: (params)=>{
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration: "none"}}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</div>
        </div>
      )
    }
  }
];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New 
        </Link>
      </div>
      <DataGrid 
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />
    </div>
  )
};

export default Datatable;
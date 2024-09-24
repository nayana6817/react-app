import { Table } from "react-bootstrap";
import { Studentdata } from "../Interface/Student";

interface Data{
    newStudent:Studentdata[];
}


const Student:React.FC<Data>=({newStudent})=>(
<Table striped bordered hover variant="primary" className="text-center">
    <thead>
        <tr>
            <td>Sl.No.</td>
            <td>Name</td>
            <td>Address</td>
            <td>Age</td>
            <td>MobileNumber</td>
        </tr>
    </thead>
    <tbody>
        {newStudent.map((std,index)=>(

        <tr key={index}>
            <td>{++index}</td>
            <td>{std.Name}</td>
            <td>{std.Address}</td>
            <td>{std.Age}</td>
            <td>{std.MobileNumber}</td>
        </tr>
        ))}
    </tbody>
</Table>
)
export default Student;
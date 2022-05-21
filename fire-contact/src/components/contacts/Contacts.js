import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteUser, useFetch } from "../../utils/functions";

const Contacts = ({editHandler}) => {
  const { isLoading, contactList } = useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : contactList?.length ? (
                contactList?.map((item, index) => 
                    <TableRow>
                    <TableCell align="center"> {item.username.toUpperCase()} </TableCell>
                    <TableCell align="center"> {item.phoneNumber} </TableCell>
                    <TableCell align="center"> {item.gender} </TableCell>
                    <TableCell align="center" onClick={()=> deleteUser(item.id)}>
                      <DeleteIcon sx={{cursor:"pointer"}}/>
                    </TableCell>
                    <TableCell align="center" onClick={()=> editHandler(item.id, item.username, item.phoneNumber, item.gender)}>
                      <EditIcon sx={{cursor:"pointer"}}/>
                    </TableCell>
                  </TableRow>
                )

            ) : (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Ekrana yazacak veri bulunamadı
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;

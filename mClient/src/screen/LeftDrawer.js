import React from "react"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ButtonBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// const a = {
//   b : 4,
//   c: 5,
//   d : () => {   }
// }
export const LeftDrawer = ({isOpen, handleToggle}) => {
  let history = useHistory();
const Category1 = ["TV", "PC", "Sound", "Other"]

const z = [
  { a: 1, b: 2}, 
  {c: 3, d: 4}, 
{ e: 5, f: 6}
] 

const x = z.map(item =>{
 delete item.b
  return item
})
console.log(x)

    return (
    <Drawer
      ModalProps = {{onBackdropClick: () => {
        handleToggle()
      }}}
      open={isOpen}
    >
    <List>
    {Category1.map((item)=> {
      return <ListItem 
      button
      component={Link} to={item}
      onClick={()=>{
        handleToggle()
      }}
    >{item}</ListItem>
    })}
    </List>
      <Divider/>
      <List>
      <ListItem 
          button
          component={Link} to="/ABOUT"
          onClick={()=>{
            handleToggle()
          }}     
        >ABOUT</ListItem>
        <ListItem 
          button
          component={Link} to="/LOGOUT"
          onClick={()=>{
            handleToggle()
          }}     
        >LOGOUT</ListItem>
      </List>
    </Drawer>
    )
}

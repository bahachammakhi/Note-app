import React from 'react';
import Modal from '@material-ui/core/Modal';
import NoteForm from "./NoteForm"
import { throwStatement } from '@babel/types';
class SimpleModal extends React.Component {
  constructor(props){
    super(props)
 this.state ={
   open : false,
   
 }
  }
  
  componentWillReceiveProps(nextProps) {
   // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.open !== this.state.open) {
      this.setState({ open : nextProps.open });
    }
}
handleClose=() =>{
  this.setState({
    open: false
  })
}
render(){
  return (
     <div> 
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.props.handleClose}
      >
      
          <div className="modall card">
   <div className="modal-header"> 
   <div class="modal-header">
        <h5 className="modal-title">Add note</h5>
        <button type="button" className="close" onClick={this.handleClose} >
          <span >&times;</span>
        </button>
      </div>
   </div>
   
          <NoteForm  addNote={this.props.addNote} />
        </div>
       
        

   
        
      </Modal>
    </div>
    
  );
 }
  
}

export default SimpleModal;

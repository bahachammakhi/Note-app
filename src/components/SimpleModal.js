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

render(){
  return (
     <div> 
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.props.handleClose}
      >
      
          <div className="card  border-danger modall ">
   
   <div class="modal-header">
        <h5 className="modal-title">Add note</h5>
        <button type="button" className="close" onClick={this.props.handleCloseNoteform} >
          <span >&times;</span>
        </button>
      </div>
   
          <NoteForm  addNote={this.props.addNote} />
        </div>
       
        

   
        
      </Modal>
    </div>
    
  );
 }
  
}

export default SimpleModal;

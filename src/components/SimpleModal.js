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
      
          <div className="card modall ">
   
   <div class="">
        <button type="button" className="close mt-3 mr-3 mb-3" onClick={this.props.handleCloseNoteform} >
          <span >&times;</span>
        </button>
      </div>
       <div className="d-flex justify-content-center mb-3">
          <NoteForm  addNote={this.props.addNote} />
       </div>
         
        </div>
      </Modal>
    </div>
    
  );
 }
  
}

export default SimpleModal;

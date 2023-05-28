import { Modal, Header } from "semantic-ui-react";
import RegisterForm from "../forms/register/Register.form";
import { useState } from "react";

import '../../pages/styles/forms-inner.css';
import '../../pages/styles/forms.css';

export default function RegisterModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={'small'}
      trigger={<button className='add-user'>Agregar Usuario</button>}>
        <Header>
          Registrar usuario
        </Header>
        <Modal.Content>
          <>
            <div className="form-container registro">
              <RegisterForm />
            </div>
          </>
        </Modal.Content>
    </Modal>
  )
}

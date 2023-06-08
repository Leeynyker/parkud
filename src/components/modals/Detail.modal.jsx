import { Modal, ModalContent, ModalHeader, Button } from "semantic-ui-react";

export default function Detail({ horario, tarifa, setModalOpen, modalOpen }) {

  let total = ''
  if (horario) {
    const temp = horario.split('/')[1].split('-')
    let horaEntrada = temp[0]
    let horaSalida = temp[1]
    horaEntrada = new Date('2000-01-01 ' + horaEntrada).getTime()
    horaSalida = new Date('2000-01-01 ' + horaSalida).getTime()
    total = (horaSalida - horaEntrada) * (tarifa / (60 * 60 * 1000));
  }

  <Modal open={modalOpen} onClose={() => setModalOpen(false)} style={{ width: '400px' }}>
    <Modal.Header>
      Total a pagar
    </Modal.Header>
    <Modal.Content>
      <>
        <h3>Total:</h3>
        <h4>{total}</h4>
      </>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setModalOpen(false)}>Cerrar</Button>
      {/* Agrega el botón de reserva aquí */}
    </Modal.Actions>
  </Modal>
}
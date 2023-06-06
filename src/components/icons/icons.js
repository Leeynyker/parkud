import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan, faBookOpenReader } from "@fortawesome/free-solid-svg-icons"

const icons = {
  editar: <FontAwesomeIcon icon={faPenToSquare} />,
  eliminar: <FontAwesomeIcon icon={faTrashCan} />,
  verReservas: <FontAwesomeIcon icon={faBookOpenReader} />
}

export { icons }
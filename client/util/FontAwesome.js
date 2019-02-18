import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckSquare, faCoffee, faPlane, faEdit, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const addIconToLibrary = () => {
  library.add(faCheckSquare, faCoffee, faPlane, faEdit, faTrashAlt)
}

export default addIconToLibrary

import Swal from 'sweetalert2'

export function sweetAlert(type: 'error' | 'success', message: string) {
  Swal.fire({
    position: 'top-end',
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  })
}

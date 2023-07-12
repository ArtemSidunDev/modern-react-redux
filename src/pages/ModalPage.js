import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

function ModalPage() {
  const [isOpen, setOpen] = useState(false)
  const handelClick = () => {
    setOpen((isOpen) => !isOpen)
  }
  const handelClose = () => {
    setOpen(false)
  }

  const actionBar = <div><Button primary onClick={handelClose}>Action</Button></div>
  const modal = (
    <Modal onClose={handelClose} actionBar={actionBar}>
      <p>Some content here </p>
    </Modal>
  )

  return (
    <div>
      <Button onClick={handelClick} success rounded>Open modal</Button>
      {isOpen && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet hendrerit velit, et pharetra neque tempor sit amet. Sed fringilla neque nec nibh malesuada, id volutpat massa varius. Donec suscipit et neque sit amet interdum. Donec porta leo finibus massa ornare elementum. Proin sed leo non nunc sagittis viverra. Phasellus tempus mauris commodo enim feugiat molestie. Nulla facilisi. Cras lacinia justo eros, at lacinia lacus rutrum at. Proin commodo nec lorem sed tincidunt. Nullam metus elit, malesuada ac est et, tincidunt iaculis eros. Sed sit amet lectus velit. Vestibulum rhoncus nulla ut nibh ornare bibendum. Phasellus congue tellus nec mauris mollis maximus.
      </p>
    </div>
  )
}

export default ModalPage
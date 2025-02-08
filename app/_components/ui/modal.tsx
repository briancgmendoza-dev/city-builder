import React from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import AddHouse from "@/app/_components/form/add-house"

import { TModalProps } from "@/app/_components/ui/types"

const Modal = React.forwardRef<HTMLDivElement, TModalProps>(({ isOpen, closeModal, modalPropsCityName }, ref) => {
  const handleStopPropagate = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }
  return (
    <section
      className={`
        fixed
        inset-0
        bg-gray-900
        bg-opacity-50
        transition-opacity
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      ref={ref}
      onClick={closeModal}
    >
      <Container
        className={`
          fixed
          inset-0
          flex
          justify-center
          items-center
          transition-all
          ${isOpen ? "scale-100" : "scale-95 opacity-0"}
        `}
      >
        <div className="bg-white rounded-lg w-full sm:w-96 p-6 shadow-lg transition-all" onClick={handleStopPropagate}>
          <Container className="flex justify-between items-center mb-4">
            <Typography type="h1" text="Building your dream house..." className="text-lg font-bold" />
          </Container>
          <AddHouse cb={closeModal} city={modalPropsCityName} />
        </div>
      </Container>
    </section>
  )
})

Modal.displayName = "Modal"
export default Modal

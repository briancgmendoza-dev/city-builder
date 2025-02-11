'use client'

import React, { useState } from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Button from "@/app/_components/ui/button"
import GearIcon from "@/app/_components/icons/gear"
import Modal from "@/app/_components/ui/modal"
import Settings from "@/app/_components/container/settings"

const HeroMessage: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Container className="w-[100%] bg-slate-200 p-4 flex items-center justify-between">
      <Typography type="h1" text="City Builder" className="text-red-700 font-bold text-xl md:text-2xl" />
      <Button type="button" icon={<GearIcon />} cb={() => setShowModal(!showModal)} className="p-2 bg-white" />
      {showModal && (
        <Modal
          isOpen={showModal}
          closeModal={() => setShowModal(!showModal)}
          modalContent={<Settings closeModal={() => setShowModal(!showModal)} />}
        />
      )}
    </Container>
  )
}

export default HeroMessage

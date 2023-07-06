import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import axios from "axios";
export function DeleteAddress({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, getUserData } = useContext(CartContext);
  const toast = useToast();
  const deleteContact = async (id) => {
    const updatedAddress = user.addresses.filter((el) => {
      if (el.id !== id) {
        return el;
      }
    });

    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`, {
        addresses: updatedAddress,
      });
      toast({
        title: "Address deleted successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      getUserData(user.id);
    } catch (err) {
      toast({
        title: "Could not delete the address",

        status: "error",
        duration: 4000,
        isClosable: true,
      });
      onClose();
    }
  };
  return (
    <>
      <button onClick={onOpen} className="bg-red-500 p-2 rounded-sm">
        Delete
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="font-bold">
              <p>You want to delete this Address for Sure? </p>
              <div className="flex justify-around mt-8">
                <button
                  onClick={() => {
                    deleteContact(id);
                  }}
                  className="bg-red-700 text-white rounded-md px-4 py-2"
                >
                  Delete
                </button>
                <button
                  onClick={onClose}
                  className="bg-green-400 text-white rounded-md px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

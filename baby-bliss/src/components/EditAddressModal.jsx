import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  Textarea,
  Select,
  useToast,
} from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import { states } from "country-cities";
import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "@/Context/CartContext";
export function EditAddressModal({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUserData, user } = useContext(CartContext);
  const state = states.getByCountry("IN");
  const toast = useToast();
  const [address, setAddress] = React.useState({
    name: data?.name,
    phone: data?.phone,
    pincode: data?.pincode,
    locality: data?.locality,
    fullAddress: data?.fullAddress,
    state: data?.state,
    alternatePhone: data?.alternatePhone,
    id: data?.id,
  });

  const editAddress = async () => {
    const updatedAddress = user.addresses.map((el) => {
      if (el.id === address.id) {
        el = address;
      }
      return el;
    });

    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`, {
        addresses: updatedAddress,
      });
      toast({
        title: "Address updated successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      getUserData(user.id);
    } catch (err) {
      toast({
        title: "Could not update the address",

        status: "error",
        duration: 4000,
        isClosable: true,
      });
      onClose();
    }
  };
  return (
    <>
      <button onClick={onOpen} className="bg-green-500 p-2 rounded-sm">
        Edit
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              placeholder="Name"
              value={address?.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
            <Input
              type="number"
              placeholder="10 digit mobile number"
              value={address.phone}
              onChange={(e) =>
                setAddress({ ...address, phone: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Pincode"
              value={address.pincode}
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Locality"
              value={address.locality}
              onChange={(e) =>
                setAddress({ ...address, locality: e.target.value })
              }
            />
            <Textarea
              type="text"
              placeholder="Address(Area and Street)"
              value={address.fullAddress}
              onChange={(e) =>
                setAddress({ ...address, fullAddress: e.target.value })
              }
            />
            <Select
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            >
              <option>Select your state</option>
              {state.map((el) => (
                <option value={el.name}>{el.name}</option>
              ))}
            </Select>
            <Input
              type="number"
              placeholder="Alternate Phone (Optional)"
              value={address.alternatePhone}
              onChange={(e) =>
                setAddress({ ...address, alternatePhone: e.target.value })
              }
            />
            <Button
              isDisabled={
                address?.name == "" ||
                address?.phone?.length !== 10 ||
                address?.fullAddress == "" ||
                address?.state == "" ||
                address?.pincode.length !== 6
              }
              onClick={editAddress}
              m="auto"
              color={"green"}
              bg="green"
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

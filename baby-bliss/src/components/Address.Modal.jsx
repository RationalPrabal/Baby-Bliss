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
import uniqid from "uniqid";
import { BsPlusCircle } from "react-icons/bs";
import { states } from "country-cities";
import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "@/Context/CartContext";
export function AddressModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUserData, user } = useContext(CartContext);
  const state = states.getByCountry("IN");
  const toast = useToast();
  const [address, setAddress] = React.useState({
    name: "",
    phone: "",
    pincode: "",
    locality: "",
    fullAddress: "",
    state: "",
    alternatePhone: "",
  });

  const addAddress = async () => {
    let newAddress = { ...address, id: uniqid() };
    user?.addresses.push(newAddress);
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_baseURL}/user/${user.id}`, {
        addresses: user.addresses,
      });
      toast({
        title: "Address added successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      getUserData(user.id);
    } catch (err) {
      toast({
        title: "Could not add the address",

        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div
        onClick={onOpen}
        className="mt-4 flex font-bold cursor-pointer items-center text-green-600"
      >
        <p>Add New Address</p>
        <BsPlusCircle className="ml-6  font-bold  text-xl" />
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
            />
            <Input
              type="number"
              placeholder="10 digit mobile number"
              onChange={(e) =>
                setAddress({ ...address, phone: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Pincode"
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Locality"
              onChange={(e) =>
                setAddress({ ...address, locality: e.target.value })
              }
            />
            <Textarea
              type="text"
              placeholder="Address(Area and Street)"
              onChange={(e) =>
                setAddress({ ...address, fullAddress: e.target.value })
              }
            />
            <Select
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
              onChange={(e) =>
                setAddress({ ...address, alternatePhone: e.target.value })
              }
            />
            <Button
              isDisabled={
                address.name == "" ||
                address.phone.length !== 10 ||
                address.fullAddress == "" ||
                address.state == "" ||
                address.pincode.length !== 6
              }
              onClick={() => {
                addAddress(), onClose();
              }}
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

"use client"
import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, Image, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import Notification from './Notification';

const ProductsModal = ({ isOpen, onClose, title, description, price, id, image }) => {
  const [user, setUser] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const getUser = () => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUser(user);
    }
  };

  const addToCart = async () => {
    try {
      const getData = await fetch(`/api/v1/cart/add?user=${user && user._id}&item=${id}`);
      const data = await getData.json();
      if (data) {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000); // Hide notification after 3 seconds
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Modal backdrop="blur" size="5xl" placement="center" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <h2 className="text-2xl font-bold">{title}</h2>
          </ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image src={image} alt={title} className="w-full h-auto object-cover" />
              <div>
                <p className="text-gray-600">{description}</p>
                <p className="text-lg font-bold mt-2">${price}</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="shadow" onPress={onClose}>
              Close
            </Button>
            {user ? (
              <Button color="primary" onClick={addToCart}>
                Add to cart
              </Button>
            ) : (
              <Button color="primary" href="/auth/login">
                Login
              </Button>
            )}
          </ModalFooter>
          {showNotification && <Notification type="green" message="Item added to cart" />}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductsModal;

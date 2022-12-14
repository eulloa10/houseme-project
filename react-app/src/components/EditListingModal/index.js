// import EditListingModal from "./EditListingModal"

// export default EditListingModal;
import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditListingForm from './EditListingModal';
import { Link }  from 'react-router-dom';
import EditLogo from '../../assets/edit.png';
// import './CreateListingModal.css';

function EditListingModal({listing}) {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const listings = useSelector(state => state.listings);


  useEffect(() => {
    return () => {
      setShowModal(false)
    };
  }, []);

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  }


  const closeModal= () => {
    setShowModal(false);
    // history.push('/me/listings')
  }


  return (
    <>
      <NavLink to={`/me/listings/${listing.id}/edit`} onClick={openModal} className="edit-listing listing-option-btn">
                  <img className="listing-options-img" src={EditLogo} alt="edit"/>
                  <span>Edit</span>
      </NavLink>
      {showModal && (
        <>
          <Modal onClose={closeModal}>
            <EditListingForm listing={listing} onClose={closeModal}  />
          </Modal>
        </>
      )}
    </>
  );
}

export default EditListingModal;

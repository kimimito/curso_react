import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './panel.scss';


const Panel = ({ label, name, value, className, onChange }) => {

    const [modalShow, setModalShow] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value
        onChange(name, value);
    };

    function SelectModal(props) {
        let infoPage = ''
        if(name === 'nPag'){
            infoPage = value + ' paginas';
        } else {
            infoPage = value + ' idiomas';
        }
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              <p className="text-center mt-3">
                Su sitio web tendra {infoPage}
              </p>
            </Modal.Body>
            
          </Modal>
        );
      }

    return (
        <div>
            <label htmlFor={name} className="me-2">{label}</label>
            <input 
                type="number" 
                min="1" 
                max="999" 
                className={className} 
                name={name} 
                value={value} 
                onChange={handleChange} 
            />
            <Button variant="outline-info" className="botonInfo" onClick={() => setModalShow(true)}><i>i</i></Button>
            <SelectModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );

}

export {Panel};
// tslint:disable: jsx-no-lambda
import {
IonButton,
IonModal,
IonLabel,
IonItem,
IonInput,
IonTextarea
} from '@ionic/react';
import React, { useState } from 'react';
import './SimpleModal.css';

interface SimpleModalProps {
    toggleModal: any;
    isOpen: boolean;
    addToList: any;
    handleClose: any;
}

const SimpleModal: React.FC<SimpleModalProps> = (props: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors]: any = useState({});

    const save = () => {

        if (name.length < 4) {
            setErrors({message: 'Name must be at least 4 characters.'});
          } else if(description.length < 4){
            setErrors({message: 'Description must be at least 4 characters.'})
          } else {
    
            const newItem = {
              name,
              description
            };
    
            props.addToList(newItem);
            
    
            setName('');
            setDescription('');
            props.handleClose();
            setErrors({});
          }
    };

    return (
        <IonModal isOpen={props.isOpen}>
        <form>
            <div className="alert-message">{errors && errors.message}</div>
            <IonItem>
            <IonLabel position="floating">name</IonLabel>
            <IonInput
                id="name"
                name="name"
                value={name}
                onIonChange={(e: any) => setName(e.target.value)}
            />
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea
                id="description"
                name="description"
                value={description}
                onIonChange={(e: any) => setDescription(e.target.value)}
            />
            </IonItem>
            <IonItem>
                <IonButton onClick={() => save()} color="primary">Save</IonButton>
                <IonButton onClick={() => props.toggleModal(false)}>Cancel</IonButton>
            </IonItem>
        </form>
      </IonModal>
    );
};

export default SimpleModal;
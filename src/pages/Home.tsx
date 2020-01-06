// tslint:disable: jsx-no-multiline-js
// tslint:disable: jsx-no-lambda

import { 
  IonContent, 
  IonPage, 
  IonList, 
  IonItem,
  IonText,
  IonLabel, 
  IonItemSliding, 
  IonItemOption, 
  IonItemOptions ,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';

import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';
import SimpleModal from '../components/SimpleModal';
import { DummyData } from '../data/dummy-data';
import uuidv4 from 'uuid/v4';

const Home: React.FC = () => {
  const [itemsArray, setItemsArray] : any = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  useEffect(() => {
    setItemsArray(DummyData);
  }, []);

  const addToList = (item: any) => {

    const tmpList = [...itemsArray];

    const newIndex = uuidv4();
    item.id = newIndex;

    tmpList.push(item);

    setItemsArray(tmpList);
  };

  const editFromList = (item: any) => {
    
    const tmpList = [...itemsArray];

    const itemIndex = itemsArray.findIndex((elem: any) => (elem.id === item.id));

    tmpList[itemIndex] = {...item};

    setItemsArray(tmpList);
    setItemToEdit({});
    setIsEditing(false);

    handleClose(); 
  };

  const getItemToEdit = (id: any) => {
    
    const itemIndex = itemsArray.findIndex((elem: any) => (elem.id === id));
    const tmpItem = {...itemsArray[itemIndex]};

    setItemToEdit(tmpItem);
    setIsEditing(true);

    handleOpen();
  };

  const removeFromList = (key: number) => {
 
    const tmpList = [...itemsArray];

    const itemIndex = itemsArray.findIndex((item: any) => (item.id === key));
    tmpList.splice(itemIndex,1);

    setItemsArray(tmpList);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <IonPage>
      <MyHeader/>
      <IonContent className="ion-padding">
        <IonList>
        {itemsArray.map( (item: any) => { 
          return ( 
          <IonItemSliding key={item.id}>
            <IonItem>
              <IonLabel>
              <IonText color="primary">
                <h3>{item.name}</h3>
              </IonText>
              <p>{item.description}</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
            <IonItemOption onClick={() => getItemToEdit(item.id)}>Edit</IonItemOption>
            <IonItemOption onClick={() => removeFromList(item.id)} color="secondary">Delete</IonItemOption>     
            </IonItemOptions>
          </IonItemSliding>
          ); 
        })}
        </IonList>
      </IonContent>
      <SimpleModal 
        addToList={addToList}
        editFromList={editFromList}
        toggleModal={setOpenModal}
        isOpen={openModal}
        handleClose={handleClose}
        isEditing={isEditing}
        itemToEdit={itemToEdit}
      />
      <IonFab onClick={() => handleOpen()} vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={add}/>
        </IonFabButton>
      </IonFab>
      <MyFooter/>
    </IonPage>
  );
};

export default Home;

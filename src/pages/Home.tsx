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
import { notesDataApi } from '../data/notes-data-api';
import uuidv4 from 'uuid/v4';

const Home: React.FC = () => {
  const [itemsArray, setItemsArray] : any = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  useEffect(() => {
    notesDataApi.getTasks()
    .then((res) => res.json())
    .then((items) => {
      const allItems = items.map((item: any) => ({id: item.id, name: item.title, description: item.body}));
      setItemsArray(allItems);
      });
  }, []);

  const addToList = (item: any) => {

    const tmpList = [...itemsArray];

    const newIndex = uuidv4();
    item.id = newIndex;

    notesDataApi.createTask(item)
        .then(res => res.json())
        .then(
          () => {
            tmpList.push(item);

            setItemsArray(tmpList);
          }
        );
  };

  const editFromList = (item: any) => {
    
    const tmpList = [...itemsArray];

    const itemIndex = itemsArray.findIndex((elem: any) => (elem.id === item.id));

    notesDataApi.putTask(item)
          .then(res => res.json())
          .then(
            () => {
              tmpList[itemIndex] = {...item};

              setItemsArray(tmpList);
              setItemToEdit({});
              setIsEditing(false);

              handleClose();
            }
          );
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

    notesDataApi.deleteTask(key)
        .then(res => res.json())
        .then(
          () => {
            tmpList.splice(itemIndex,1);

            setItemsArray(tmpList);
          }
        );
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

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
  IonButton,
  IonModal
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';

import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';
import { DummyData } from '../data/dummy-data';
import uuidv4 from 'uuid/v4';

const Home: React.FC = () => {
  const [itemsArray, setItemsArray] : any = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setItemsArray(DummyData);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addToList = (item: any) => {

    const tmpList = [...itemsArray];

    const newIndex = uuidv4();
    item.id = newIndex;

    tmpList.push(item);

    setItemsArray(tmpList);
  };

  const removeFromList = (key: number) => {
 
    const tmpList = [...itemsArray];

    const itemIndex = itemsArray.findIndex((item: any) => (item.id === key));
    tmpList.splice(itemIndex,1);

    setItemsArray(tmpList);
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
            <IonItemOption>Edit</IonItemOption>
            <IonItemOption onClick={() => removeFromList(item.id)} color="secondary">Delete</IonItemOption>     
            </IonItemOptions>
          </IonItemSliding>
          ); 
        })}
        </IonList>
      </IonContent>
      <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonFab onClick={() => setShowModal(true)} vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={add}/>
        </IonFabButton>
      </IonFab>
      <MyFooter/>
    </IonPage>
  );
};

export default Home;

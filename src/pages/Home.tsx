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
  IonItemOptions 
} from '@ionic/react';
import React, { useState, useEffect } from 'react';

import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';
import { DummyData } from '../data/dummy-data';

const Home: React.FC = () => {
  const [itemsArray, setItemsArray] : any = useState([]);

  useEffect(() => {
    setItemsArray(DummyData);
  }, []);

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
      <MyFooter/>
    </IonPage>
  );
};

export default Home;

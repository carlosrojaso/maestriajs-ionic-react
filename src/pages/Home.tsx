import { 
  IonContent, 
  IonPage, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonItemSliding, 
  IonItemOption, 
  IonItemOptions 
} from '@ionic/react';
import React from 'react';

import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent className="ion-padding">
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>Edit</IonItemOption>
              <IonItemOption color="secondary">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>Edit</IonItemOption>
              <IonItemOption color="secondary">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>Edit</IonItemOption>
              <IonItemOption color="secondary">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>Edit</IonItemOption>
              <IonItemOption color="secondary">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption>Edit</IonItemOption>
              <IonItemOption color="secondary">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
      <MyFooter/>
    </IonPage>
  );
};

export default Home;

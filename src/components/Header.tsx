import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React from 'react';

const MyHeader: React.FC = () => {
  return (
      <IonHeader>
        <IonToolbar>
          <IonTitle>ionic-react</IonTitle>
          <IonButtons slot="end">
            <IonButton href={'/home'}>Home</IonButton>
            <IonButton href={'/about'}>About</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
  );
};

export default MyHeader;

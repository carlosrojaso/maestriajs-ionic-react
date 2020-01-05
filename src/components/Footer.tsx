import React from 'react';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/react';

const MyFooter: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle>ionic</IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default MyFooter;
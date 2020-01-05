import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const MyHeader: React.FC = () => {
  return (
      <IonHeader>
        <IonToolbar>
          <IonTitle>ionic-react</IonTitle>
        </IonToolbar>
      </IonHeader>
  );
};

export default MyHeader;

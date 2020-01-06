import { IonPage, IonContent } from '@ionic/react';
import React from 'react';

import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';

const About = () => {
    return (
     <IonPage>
      <MyHeader/>
      <IonContent className="ion-padding">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ante eget urna vulputate lacinia. Suspendisse augue elit, tempor ac quam sed, condimentum gravida sapien. Integer accumsan a nisl at porttitor. Sed ac malesuada tortor. Vestibulum dictum in massa eget lacinia. Nulla rhoncus tortor lorem, eu ultricies sem malesuada eget. Vestibulum suscipit eros nec felis dapibus finibus. Pellentesque molestie justo ex, in mattis felis tincidunt non. Quisque et diam a mi vulputate malesuada.
      </IonContent>
      <MyFooter/>
    </IonPage>
    );

};
export default About;
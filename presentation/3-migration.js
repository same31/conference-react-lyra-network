import React from 'react'
import {Slide, Heading, Text, Appear, CodePane, List, ListItem, Image} from 'spectacle'

export default [
  <Slide key='3-0'>
    <Heading textColor='secondary' fit caps>
      Migrer vers du React
    </Heading>
  </Slide>,
  <Slide key='3-1-0' notes={`Etant une librairie qui n'a pas besoin de grand chose, ca peut être utilisé de manière progressive`}>
    <Text textColor='tertiary'>
      React ce n'est qu'une librairie
    </Text>
  </Slide>,
  <Slide key='3-1-1' notes={`Exemple d'utilisation dans un framework`}>
    <Text textAlign='left' textColor='tertiary'>
      ngReact
    </Text>
    <Text textAlign='left' textColor='tertiary'>
      Backbone.React.Component
    </Text>
  </Slide>,
  <Slide key='3-1-3' notes={`Exemple d'utilisation au milieu de nul part. Par contre, gérer votre état de manière globale sera important.`}>
    <Text textColor='tertiary' textAlign='left'>
      ReactDOM.render(<br />&nbsp;&nbsp;{'<Element />'},<br />&nbsp;&nbsp;document.querySelector('.selector')<br />)
    </Text>
  </Slide>,
  <Slide key='3-1-4' notes={`Si des bouts sont liés`}>
    <Text textColor='tertiary' lineHeight={2}>
      Quand l'utiliser ?
    </Text>
    <List textColor='tertiary'>
      <Appear>
        <ListItem>
          Beaucoup d'interactions
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Des données qui changent dans le temps
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Des vues qui dépendent des données
        </ListItem>
      </Appear>
    </List>
  </Slide>,
  <Slide key='3-2-0' notes={`Exemple appli cartographie => Gain notamment sur la mise à jour des options disponibles. Y compris par rapport au niveau de zoom`}>
    <Text textColor='tertiary'>Migration de l'UI d'une cartographie</Text>
    <Text textColor='tertiary'><br />Schema</Text>
  </Slide>,
  <Slide key='3-2-1' notes={`Exemple appli cartographie`}>
    <Text textColor='tertiary'>Migration progressive</Text>
    <List textColor='tertiary'>
      <Appear><ListItem>Tooltips</ListItem></Appear>
      <Appear><ListItem>Données à afficher</ListItem></Appear>
      <Appear><ListItem>Choix de l'imagerie</ListItem></Appear>
    </List>
  </Slide>,
  <Slide key='3-2-2' notes={`Pas besoin donc on ne va pas trop loin`}>
    <Text textColor='tertiary'>L'application finale n'est pas un seul composant React</Text>
  </Slide>,
  <Slide key='3-3-0' notes={`Quelques bonnes pratiques`}>
    <Heading textColor='secondary' fit caps>Quelques bonnes pratiques</Heading>
  </Slide>,
  <Slide key='3-3-1' notes={`Quelques bonnes pratiques`}>
    <Text textColor='tertiary' textSize='2em'>Préferez trop découper que pas assez</Text>
    <Appear>
      <Text textColor='quartenary'><br />pas de if, pas de boucle, pas de variables</Text>
    </Appear>
  </Slide>,
  <Slide key='3-3-3' notes={`Attention, ca ne veut pas dire stateful vs stateless.<br />En plus ca permet de ne pas être trop couplé à React => Controllers`}>
    <Text textColor='tertiary' textSize='2em'>Séparer l'UI du métier</Text>
    <Appear>
      <Text textColor='quartenary'><br />Component vs Container</Text>
    </Appear>
  </Slide>,
  <Slide key='3-3-2' notes={`Préparer RN.<br /> En plus ca permettrait de changer de lib de vue. Chercher virtual DOM`}>
    <Text textColor='tertiary' textSize='2em'>Balises HTML le plus tard possible</Text>
    <Appear>
      <Text textColor='quartenary'><br />Force à se poser des questions sur la réutilisabilité de l'UI</Text>
    </Appear>
    <Appear>
      <Text textColor='quartenary'>Permet de préparer le multi-plateforme</Text>
    </Appear>
  </Slide>,
  <Slide key='3-3-3' notes={`Développez vos composants de manière isolée`}>
    <Text textColor='tertiary' textSize='2em'>Un composant doit fonctionner seul</Text>
    <Appear>
      <Text textColor='quartenary'><br />React-Storybook</Text>
    </Appear>
    <Appear>
      <Image
        src='https://github.com/kadirahq/react-storybook/raw/master/docs/demo.gif'
        display='block'
        width='80%'
        margin='1em auto 0'
      />
    </Appear>
  </Slide>
]

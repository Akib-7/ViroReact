import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroAmbientLight,
  ViroText,
} from '@viro-community/react-viro';
import {Viro3DObject} from '@viro-community/react-viro';
import {useState} from 'react';

var modelPath = require('../assets/models/bugatti.obj');
var modelMaterial = require('../assets/models/bugatti.mtl');

const initialScene = () => {
  const [rotation, setRotation] = useState([-45, 50, 10]);
  const [position, setPosition] = useState([0, 0, -5]);
  const [modelScale, setModelScale] = useState([0.9, 0.9, 0.9]);

  // MOVE OBJECT FUNCTION
  const moveObject = newPosition => {
    setPosition(newPosition);
  };
  //ROTATE OBJECT FUNCTION
  const rotateObject = (rotateState, rotationFactor, source) => {
    if (rotateState == 3) {
      let newRotation = [
        rotation[0] - rotationFactor,
        rotation[1] - rotationFactor,
        rotation[2] - rotationFactor,
      ];
      //set to current rotation - rotationFactor.
      setRotation(newRotation);
    }
    //update rotation using setNativeProps
  };

  const scaleObject = (pinchState, scaleFactor, source) => {
    if (pinchState == 3) {
      let currentScale = modelScale[0];
      let newScale = currentScale * scaleFactor;
      let newScaleArray = [newScale, newScale, newScale];
      // update scale of obj by multiplying by scaleFactor when pinch ends.

      setModelScale(newScaleArray);
    }
  };
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      {modelPath ? (
        <Viro3DObject
          source={modelPath}
          //
          position={position}
          scale={modelScale}
          rotation={rotation}
          type="OBJ"
          //For changing the position
          onDrag={moveObject}
          //For rotating object
          onRotate={rotateObject}
          //For zoom in/zoom out
          onPinch={scaleObject}
        />
      ) : (
        <ViroText
          text="Sorry! Model Format is not valid"
          color="#ff0000"
          style={{
            fontFamily: 'Arial',
            fontSize: 20,
            fontStyle: 'italic',
            color: '#0000FF',
          }}
          position={[0, 0, -5]}
        />
      )}
    </ViroARScene>
  );
};
const ARView = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ViroARSceneNavigator
        initialScene={{
          scene: initialScene,
        }}
        style={{flex: 1}}
      />
    </View>
  );
};
export default ARView;

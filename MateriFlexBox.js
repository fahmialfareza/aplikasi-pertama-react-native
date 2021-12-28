import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class MateriFlexBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('Component did update!');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   render() {
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'grey',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//           }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{uri: 'https://placeimg.com/640/480/animals'}}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 12}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
//               Fahmi Alfareza
//             </Text>
//             <Text style={{color: 'white'}}>
//               {this.state.subscriber}k followers
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const MateriFlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);

  useEffect(() => {
    console.log('did mount');
  }, []);

  useEffect(() => {
    console.log('did update');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
  }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/animals'}}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 12}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Fahmi Alfareza
          </Text>
          <Text style={{color: 'white'}}>{subscriber}k followers</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriFlexBox;

import React,{Component} from 'react';
import { AppRegistry, View, TextInput,Text } from 'react-native';


export default class flexDirectionBasics extends  Component {

constructor(props){
  super(props);
  this.state={text: ' '};
}

  render() {
    return (
      /*
      // Try setting  flexDirection to column .

      <View style={{ flex:1, flexDirection: 'column'}}>
        <View style={{ width: 50, height: 50, backgroundColor:'powderblue'}} />
        <View style={{ width: 50, height: 50, backgroundColor:'skyblue'}} />
        <View style={{ width: 50, height: 50, backgroundColor:'steelblue'}} />
      </View>
      */




//try setting justifyContent to center
//try setting flexDirection to row
//elejemplo fue de justifyContent

/*empieza  <View style={{
  flex:1,
 flexDirection: 'column',
   justifyContent: 'space-around',
 }}>
<View style={{ width: 50, height: 50, backgroundColor:'powderblue'}} />
 <View style={{ width: 50, height: 50, backgroundColor:'skyblue'}} />
   <View style={{ width: 50, height: 50, backgroundColor:'steelblue'}} />
 termina </View>
 */



//este ejemplo fue de alignItems

/*
<View style={{
  flex:1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
<View style={{ width: 50, height: 50, backgroundColor:'powderblue'}} />
 <View style={{ width: 50, height: 50, backgroundColor:'skyblue'}} />
   <View style={{ width: 50, height: 50, backgroundColor:'steelblue'}} />
</View>
*/


//para alineacion en 3 arriba, en medio , al final.
/*
<View style={{
  flex:1,
  flexDirection: 'column',  //para que vallan en forma de columna
  alignItems: 'center',  //para que vallan en medio
  justifyContent: 'space-between', //space-between para el espacio

}}>
<View style={{ width: 200, height: 200, backgroundColor:'red'}} />
<View style={{ width: 200, height: 200, backgroundColor:'skyblue'}} />
<View style={{ width: 200, height: 200, backgroundColor:'green'}} />

</View>
*/

<View style={{padding:10}}>
<TextInput
style={{height:100, borderColor:'red', borderWidth: 1}}
placeholder="Type here to traslate!"  //texto invisible
onChangeText={(text)=> this.setState({text})}
/>
<Text style={{padding:10,fontSize: 42}}>
{this.state.text.split(' ').map((word)=>word && '☻').join( ' ')}

</Text>
</View>
    );
}
}

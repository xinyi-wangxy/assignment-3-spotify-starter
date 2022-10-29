import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  
  export default function SongItem({ index, albumimage, title, artist, album, duration }) {
    return (
      <View style={styles.item}>
        <View style={styles.indexSection}>
            <Text style={styles.atext}> {index} </Text>
        </View>

        <View style={styles.imageSection}>
        <Image 
            source={{uri:albumimage}}
            style={styles.albumimage}
            resizeMode={'contain'}
        />
        </View>
        
        <View style={styles.titleSection}>
            <Text style={styles.text} numberOfLines={1}> {title} </Text>
            <Text style={styles.atext} > {artist} </Text>
        </View>

        <View style={styles.albumSection}>
            <Text style={styles.text} numberOfLines={1}> {album} </Text>
        </View>

        <View style={styles.durationSection}>
            <Text style={styles.text} numberOfLines={1}> {duration} </Text>
        </View>        

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'black',
      padding: 16,
      flex: 1,
      flexDirection: 'row',
    },
    indexSection: {
      width: '10%',
      justifyContent: "center",
      alignItems: "center",
    },
    imageSection: {
        width: '20%',
        justifyContent: "center",
        alignItems: "center"
    },
    titleSection:{
        width: '35%',
        flexDirection: 'column',
        alignContent:'center',
        justifyContent: 'space-around'
    },
    albumSection:{
        width: '20%',
        justifyContent: "center",
        alignItems: "center"
    },
    durationSection:{
        width: '15%',
        justifyContent: "center",
        alignItems: "center",

    },
    text:{

        color: 'white',
        fontSize: 15
    },
    atext:{

        color: 'gray',
        fontSize: 15
    },
    albumimage: {
      width: 50,
      height: 50,
    }
  });
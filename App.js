import { FlatList, StyleSheet, SafeAreaView, Text, Pressable, Image, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SongItem from "./Songitem";
import millisToMinutesAndSeconds from "./utils/millisToMinutesAndSeconds";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  const renderSongItem = ({item}) => (
    <SongItem 
    index={item.track_number}
    albumimage={item.album.images[0].url}
    title={item.name}
    artist={item.artists[0].name}
    album={item.album.name}
    duration={millisToMinutesAndSeconds(item.duration_ms)}

    />
    
  );
  if (token) {
    return (
      <View style={styles.container2}>
        <View style={styles.header}>
            <Image 
                source={require('./assets/spotify-logo.png')}
                style={styles.logo}
                resizeMode={'contain'}
            />
            <Text style={styles.headertext}>
              MY TOP TRACKS
            </Text>
        </View>
        <FlatList 
          data={tracks}
          renderItem={(item) => renderSongItem(item)}
          keyExtractor={(item) => item.id}

        />
    </View>
    );
      
  } else{
    return (
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.button} onPress={ getSpotifyAuth}>
          <Image 
            source={require('./assets/spotify-logo.png')}
            style={styles.logo}
            resizeMode={'contain'}
            />
          
          <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container2: {
    backgroundColor: Themes.colors.background,
    flex: 1,
  },
  button: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 99999,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    
  },
  text: {
    color: Themes.colors. white,
    fontWeight: "bold",
    fontSize: 17
  },
  logo:{
    height: 20,
    width:20,
    alignItems: 'center',
    marginRight: 8
  },
  header: {
    backgroundColor: Themes.colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal:10,
    marginBottom: 10
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }

});

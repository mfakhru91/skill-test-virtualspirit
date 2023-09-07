import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import {useState} from 'react'
import {Button} from './src/components/atoms'

interface PostData {
  id:number
  image:string
  like:number
}

export default function App() {

  const [postData, setPostData] = useState<PostData[]>([
    {
      id:1,
      image:'https://source.unsplash.com/random/?city',
      like:0
    },
    {
      id:2,
      image:'https://source.unsplash.com/random/?forest',
      like:0
    },
    {
      id:3,
      image:'https://source.unsplash.com/random/?landscape',
      like:0
    },
  ])

  const onLikeAction = (isLike:boolean,id?:number) => {
    if (id !== undefined) {
      const updatePost:PostData[] = postData.map(post => {
        if (post.id === id) {
          return {...post, like: isLike?post.like + 1:post.like > 0 ? post.like - 1:0}
        }
        return post
      })
      setPostData(updatePost)
    }else{
      const updatePost:PostData[] = postData.map(post => {
          return {...post, like: isLike?post.like + 1:post.like > 0 ? post.like - 1:0}        
      })
      setPostData(updatePost)
    }
  }  

  const onResetAll = () => { 
    const resetPostData = postData.map(post=> (
      {...post, like:0}
    ))
    setPostData(resetPostData)
  }

  const renderItem = ({item}:{item:PostData}) => { 
    return (
      <View        
        style={styles.cardContainer}>
          <Image 
            style={styles.imageContent}
            source={{uri:item.image}} />
          <View style={styles.cardFooterContainer}>
            <View style={{flex:1, alignItems:'flex-start'}}>
              <Button
                color='#FFFFFF'
                textColor='#707070'>
                {`${item.like} Like`}
              </Button>
            </View>
              <Button onPress={()=>onLikeAction(true,item.id)}>Like</Button>
              <Button
                onPress={()=>onLikeAction(false,item.id)}
                color="#DB2C2C">
                  Dislike
              </Button>
          </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button
          onPress={()=>onLikeAction(true)}
          style={styles.headerBtn}
          >Lile All</Button>
        <Button
          onPress={onResetAll}
          style={styles.headerBtn}
          color='#FFFFFF' 
          textColor='#5F5F5F'>Reset All</Button>
        <Button
          onPress={()=>onLikeAction(false)}
          color='#DB2C2C'
          style={styles.headerBtn}
          >Dislike All</Button>
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={postData}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginTop:25   , 
  },
  header:{
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  headerBtn:{
    flex:1,    
  },
  contentContainerStyle:{
    paddingBottom:20
  },
  cardContainer:{
    marginHorizontal:12,
    marginTop:15,
    borderRadius:10,
    overflow:'hidden',
    shadowColor: "#000",
    backgroundColor:"#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContent:{
    height:198,
  },
  cardFooterContainer:{
    flexDirection:'row',
    paddingVertical:10,
  }
});

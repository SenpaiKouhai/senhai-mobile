import React, { useCallback, useEffect, useState } from 'react'
import { View, RefreshControl, Animated } from 'react-native'
import Introduction from './Introduction'
import Container from './Container'
import axios from 'axios'
import { currentVersion } from '../settings/version'
import { useDispatch } from 'react-redux'
import { isUpdated } from '../redux/action'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

function Home( ) {
  // checks if a new version is release to notify the user
  const dispatch = useDispatch()
  useEffect( () => {
    const c = axios.CancelToken.source();
    axios.get('https://simplesenhaibookmark.herokuapp.com/api/download')
      .then( res => {
          currentVersion.version != res.data.v ? dispatch(isUpdated(false)) : null
      })
    return () => c.cancel("cancel fetch")
  }, [])

  const [refreshing, setRefreshing] = useState(false);
  const [y, setY] = useState( new Animated.Value(1) )
  const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(900).then(() => setRefreshing(false));

      return () => console.log('home unmounted')
  }, []);

  return (
      <Animated.ScrollView
          refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
              />
          }
          bounces={true}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: y} }
              }
            ],
            {
              useNativeDriver: true 
            }
          )}
      >
          <View style={{ paddingLeft: 5 }} >
              <Introduction />
              <Container title={'Recently Added'} subtitle={'Newest Anime Episode'} component={'recentlyadded'} isRefresh={refreshing} />
              <Container title={'This Season'}    subtitle={'Ongoing Anime'}        component={'ongoing'}       isRefresh={refreshing} />
              <Container title={'Trending Anime'} subtitle={'Most Watched Anime'}   component={'popular'}       isRefresh={refreshing} />
          </View>
      </Animated.ScrollView>
  )
}

export default Home
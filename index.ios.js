// Index.ios.js - เขียน code ในนี้สำหรับสร้างระบบ IOS!
 
// Import a library เพื่อใช้สำหรับสร้าง Component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
 
// สร้าง Component
const App = () => (
	<View>
	  <Header headerText={'Albums'} />
	  <AlbumList />
	</View>
)
   
// Render บนอุปกรณ์ IOS

AppRegistry.registerComponent('ReactNativeForminit', () => App)
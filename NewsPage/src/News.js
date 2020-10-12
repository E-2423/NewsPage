import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';

const myArray = Array.from(Array(50).keys());
const News = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style ={{flex:1}}>
                { 
                myArray.map(u => <Text style={{fontsize:50}}>{u}</Text>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default News;

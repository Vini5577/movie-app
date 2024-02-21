import React from 'react'
import { Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel-v4'

interface trending {
    data: any,
}

export const TrendingMovies: React.FC<trending> = ({ data }) => {
    return (
        <View className='mb-8'>
            <Text className='text-white text-xl mx-4 mb-5'>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={600}
                itemWidth={400}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    )
}

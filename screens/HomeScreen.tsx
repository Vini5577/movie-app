import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from "../theme";
import { TrendingMovies } from "../components/trendingMovies";
import { useState } from "react";

const ios = Platform.OS === 'ios';
export default function HomeScreen() {
    const [trending, setTrendig] = useState([1, 2, 3])

    return (
        <View className="flex-1 bg-neutral-800">
            {/* search bar and logo */}
            <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
                <StatusBar style="light"></StatusBar>
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                {/* Trending movies caroules */}
                <TrendingMovies data={trending} />

            </ScrollView>
        </View>
    )
}
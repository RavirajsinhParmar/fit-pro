import React from "react";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar/src/StatusBar";
import { LinearGradient } from "expo-linear-gradient";

export default function index() {
	return (
		<View className="flex-1 flex justify-end">
			<Image
				className="h-full w-full absolute"
				source={require("../assets/images/welcome.png")}
			/>
			<LinearGradient
				colors={["transparent", "#18181b"]}
				style={{ width: wp(100), height: hp(100) }}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 0.8 }}
				className="flex justify-end pb-12 space-y-8"
			>
				<Animated.View
					entering={FadeInDown.delay(100).springify()}
					className="flex items-center"
				>
					<Text
						style={{ fontSize: hp(5) }}
						className="text-white font-bold tracking-wide"
					>
						Best <Text className="text-rose-500">Workouts</Text>
					</Text>
					<Text
						style={{ fontSize: hp(5) }}
						className="text-white font-bold tracking-wide"
					>
						For you
					</Text>
				</Animated.View>
				<Animated.View entering={FadeInDown.delay(200).springify()}>
					<TouchableOpacity
						onPress={() => {
							router.push("home");
						}}
						style={{ height: hp(7), width: wp(80) }}
						className="bg-rose-500 flex items-center justify-center mx-auto rounded-full"
					>
						<Text
							style={{ fontSize: hp(3) }}
							className="text-white font-bold tracking-wide"
						>
							Get Started
						</Text>
					</TouchableOpacity>
				</Animated.View>
			</LinearGradient>
			<StatusBar style="light" />
		</View>
	);
}

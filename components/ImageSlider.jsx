import { View, Text } from "react-native";
import React from "react";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousal, { ParallaxImage } from "react-native-snap-carousel";
import { sliderImages } from "../constants";
export default function ImageSlider() {
	return (
		<Carousal
			data={sliderImages}
			loop={true}
			autoplay={true}
			renderItem={ItemCard}
			hasParallaxImages={true}
			sliderWidth={wp(100)}
			firstItem={1}
			autoplayInterval={4000}
			itemWidth={wp(100) - 70}
			slideStyle={{ display: "flex", alignItems: "center" }}
		/>
	);
}

const ItemCard = ({ item, index }, parallaxProps) => {
	return (
		<View style={{ width: wp(100) - 70, height: hp(25) }}>
			<ParallaxImage
				source={item}
				containerStyle={{ flex: 1, borderRadius: 30 }}
				style={{ resizeMode: "contain" }}
				parallaxFactor={1}
				{...parallaxProps}
			/>
		</View>
	);
};

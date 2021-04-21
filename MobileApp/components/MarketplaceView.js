import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

import PostItem from "./PostItem";

const MarketplaceView = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.marketplaceHeader}>
          <Text style={styles.marketplaceText}>Marketplace</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/tradeU-logo2.png")}
          />
        </View>

        <View alignItems="center">
          <PostItem
            description="this my guy"
            title="Flowers"
            price="$1"
            imageUri="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg"
          />
          <PostItem
            description="we was slatt"
            title="Bouquet"
            price="$2"
            imageUri="https://cdn.britannica.com/88/194588-050-967E8D17/flowers.jpg"
          />
          <PostItem
            description="on him"
            title="Pain"
            price="$3"
            imageUri="https://numeralpaint.com/wp-content/uploads/2020/08/sad-man-sunset-silhouette-adult-paint-by-numbers.jpg"
          />
          <PostItem
            description="sad"
            title="Suffering"
            price="$4"
            imageUri="https://www.cohenmedical.com/wp-content/uploads/2020/01/sad-seasonal-depression-1.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  marketplaceText: {
    fontSize: 33,
  },
  marketplaceHeader: {
    marginVertical: 20,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  tinyLogo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default MarketplaceView;

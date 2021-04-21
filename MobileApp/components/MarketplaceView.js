import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ColorPropType,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

import PostItem from "./PostItem";

const MarketplaceView = (props) => {
  const [isDisplayContactMode, setIsDisplayContactMode] = useState(false);

  const displayContactInfoScreenHandler = () => {
    setIsDisplayContactMode(true);
  };

  const cancelContactInfoScreenHandler = () => {
    setIsDisplayContactMode(false);
  };

  return (
    <View style={{ marginBottom: 10 }}>
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
            visibility={isDisplayContactMode}
            onTrade={displayContactInfoScreenHandler}
            onHide={cancelContactInfoScreenHandler}
            imageUri="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475.jpg"
          />
          <PostItem
            description="we was slatt"
            title="Bouquet"
            price="$2"
            visibility={isDisplayContactMode}
            onTrade={displayContactInfoScreenHandler}
            onHide={cancelContactInfoScreenHandler}
            imageUri="https://cdn.britannica.com/88/194588-050-967E8D17/flowers.jpg"
          />
          <PostItem
            description="on him"
            title="Pain"
            price="$3"
            visibility={isDisplayContactMode}
            onTrade={displayContactInfoScreenHandler}
            onHide={cancelContactInfoScreenHandler}
            imageUri="https://numeralpaint.com/wp-content/uploads/2020/08/sad-man-sunset-silhouette-adult-paint-by-numbers.jpg"
          />
          <PostItem
            description="sad"
            title="Suffering"
            price="$4"
            visibility={isDisplayContactMode}
            onTrade={displayContactInfoScreenHandler}
            onHide={cancelContactInfoScreenHandler}
            imageUri="https://www.cohenmedical.com/wp-content/uploads/2020/01/sad-seasonal-depression-1.jpg"
          />
          <Text style={{ fontSize: 20 }}>©TradeU 2021</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  marketplaceText: {
    fontSize: 33,
    color: "white",
  },
  marketplaceHeader: {
    marginTop: 30,
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

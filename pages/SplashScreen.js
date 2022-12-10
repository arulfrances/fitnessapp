import React, { useState, useEffect } from React;
import {
    SafeAreaView,
    ActivityIndicator,
    Text,
    View,
    StyleSheet,
    Image,
} from "react-native";

import auth from "@react-native-firebase/auth";

const SplashScreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);

            //Check if CurrentUser is logged in, else route them to Login Screen

            navigation.replace(
                auth().currentUser ? "HomeScreen" : "Auth"
            );
        }, 5000);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#307ecc" }}>
            <View style={styles.container}>
                <Image source={require("../Image/ticket.png")}
                    style={{
                        width: "90%",
                        resizeMode: "contain",
                        margin: 30,
                    }}
                />
                <ActivityIndicator
                    animating={animating}
                    color="#FFFFFF"
                    size="large"
                    style={styles.activityIndicator}
                />
            </View>
            <Text
                style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "white",
                }}
            >Fitness App</Text>
            <Text
                style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "white",
                }}
            >Stay Fit! Make every moment count</Text>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    activityIndicator: {
        alignItems: "center",
        height: 80,
    },
});
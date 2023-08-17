import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, useRouter, useSearchParams } from 'expo-router';

const profile = () => {
  const router = useRouter();
  const params = useSearchParams();
  //   console.log(params.name);
  return (
    <View className="flex-1 items-center justify-centerflex-1 items-center justify-center bg-white">
      <Text className="text-red-500 text-2xl font-bold">
        Hello {params.name} {params.surname}
      </Text>
      {/* <Link href="/">Go to homepage</Link> */}
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default profile;

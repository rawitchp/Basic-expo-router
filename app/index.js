import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Page() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => console.log(res.json))
        .then((res) => res.json());
      setUsers(data);
    };
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        {/* <Link href="/profile?name=Rawitch&surname=Payakkawan" className="mt-2"> */}
        {/* ได้เหมือนกันแต่แบบล่าง code จะมีระเยียบและอ่านได้ง่ายกว่า */}
        {/* <Link
          href={{
            pathname: '/mixrw',
            params: { name: 'Rawitch', surname: 'Payakkawan' },
          }}
          className="mt-2"
        >
          <Text className="text-blue-500 text-3xl font-bold">
            Go to Profile
          </Text>
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});

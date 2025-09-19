import { Avatar, Center, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import Service from '../../utils/http';
export default function Profile() {
  const obj = new Service();
  const [api, setApi] = useState({});
  const getData = async () => {
    try {
      let data = await obj.get('user/me');
      setApi(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Center style={{ display: 'flex', flexDirection: 'column' }}>
        <Avatar size={120} src="goku4k.jpg" alt="it's me" />
        <Text color="black" size="lg" my={15} fw={600}>
          {' '}
          <h1>{api.name} </h1>
        </Text>
        <Text data-order="1" size={'lg'} mt={5} mb={8} color="dimmed">
          {api.email}
        </Text>

        <Text my={8}>
          {' '}
          <strong>User ID: </strong>
          {api._id}{' '}
        </Text>
        <Text my={8}>
          {' '}
          <strong>Account Created: </strong>
          {Date(api.createdAt)}{' '}
        </Text>
        {/* <Avatar radius="xl" /> */}
      </Center>
    </div>
  );
}

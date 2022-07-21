import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg';
  
  export default function HairCareCards() {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'220px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          border='1px'
          borderColor='gray.400'          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'130px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={500}>
            MyGlamm SUPERFOODS Onion...
            </Heading>
            <Text color={'gray.600'} fontWeight={500} fontSize={'10px'} textTransform={'uppercase'}>
            For Hairfall control
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={700} fontSize={'xl'}>
                $57
              </Text>
              <span textDecoration='line-through' color={'gray.600'}>
                $199
              </span>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
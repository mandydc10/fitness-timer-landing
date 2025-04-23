import {
    Box,
    Heading,
    Text,
    Button,
    Container,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ThankYou() {
    return (
        <Container maxW={'7xl'} py={20}>
            <VStack spacing={8} textAlign="center">
                <Box
                    w={16}
                    h={16}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg={'brand.400'}
                    color="white"
                    fontSize="3xl"
                >
                    <FiCheck />
                </Box>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'brand.400',
                            zIndex: -1,
                        }}
                    >
                        Thank You!
                    </Text>
                </Heading>
                <Text color={'gray.500'} fontSize={'xl'} maxW={'3xl'}>
                    You're now on the waitlist for FitTimer. We'll notify you as soon as we launch.
                    Get ready to transform your workout experience!
                </Text>
                <Button
                    as={Link}
                    to="/"
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'brand'}
                    bg={'brand.400'}
                    _hover={{
                        bg: 'brand.500',
                        color: 'white',
                        transform: 'scale(1.05)',
                        transition: 'all 0.2s ease-in-out'
                    }}
                >
                    Back to Home
                </Button>
            </VStack>
        </Container>
    )
} 
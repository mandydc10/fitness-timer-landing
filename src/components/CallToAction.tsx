import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconProps,
    useColorModeValue,
    Input,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { FiUserPlus } from 'react-icons/fi'

export default function CallToAction() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
                            Be First in Line
                        </Text>
                        <br />
                        <Text as={'span'} color={'brand.400'}>
                            Launch Coming Soon
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Join our exclusive waitlist and be among the first to experience FitTimer.
                        Get early access, special launch offers, and shape the future of workout timing.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}
                    >
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'brand'}
                            bg={'brand.400'}
                            _hover={{ bg: 'brand.500' }}
                            leftIcon={<Icon as={FiUserPlus} h={5} w={5} />}
                            onClick={onOpen}
                        >
                            Join the Waitlist
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}
                >
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('blue.50', 'blue.400')}
                    />
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'App Screenshot'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                'https://images.unsplash.com/photo-1574680096145-d05b474e2155'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>

            {/* Waitlist Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Join the Waitlist</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form
                            action="https://formsubmit.co/9cbd80d6cabd97a9392bf66804ed2353"
                            method="POST"
                        >
                            <Stack spacing={4}>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    bg="white"
                                    color="black"
                                />
                                <input
                                    type="hidden"
                                    name="_next"
                                    value="http://localhost:5173/thank-you"
                                />
                                <input
                                    type="hidden"
                                    name="_captcha"
                                    value="false"
                                />
                                <Button
                                    type="submit"
                                    colorScheme="brand"
                                    w="full"
                                >
                                    Join the Waitlist
                                </Button>
                            </Stack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    )
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    )
} 
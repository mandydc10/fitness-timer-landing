import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import { FiDownload, FiSettings, FiPlay, FiMail } from 'react-icons/fi'

interface FeatureProps {
    text: string
    icon: React.ElementType
    iconBg: string
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}
            >
                <Icon color={'white'} w={5} h={5} as={icon} />
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    )
}

export default function HowItWorks() {
    return (
        <Container maxW={'7xl'} py={12} id="how-it-works">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    order={{ base: 2, md: 1 }}
                >
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&h=1000&q=80'
                        }
                        objectFit={'cover'}
                        w={'full'}
                        h={'500px'}
                        shadow={'2xl'}
                    />
                </Flex>
                <Stack spacing={4} order={{ base: 1, md: 2 }}>
                    <Text
                        textTransform={'uppercase'}
                        color={'brand.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('brand.50', 'brand.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        How It Works
                    </Text>
                    <Heading>Start Your Fitness Journey in Minutes</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Getting started with FitTimer is quick and easy. Follow these simple steps
                        to enhance your workout experience.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }
                    >
                        <Feature
                            icon={FiDownload}
                            iconBg={'brand.400'}
                            text={'Download the app from the App Store'}
                        />
                        <Feature
                            icon={FiSettings}
                            iconBg={'brand.300'}
                            text={'Set up your custom workout timers'}
                        />
                        <Feature
                            icon={FiPlay}
                            iconBg={'brand.500'}
                            text={'Start your workout and stay focused'}
                        />
                        <Feature
                            icon={FiMail}
                            iconBg={'brand.400'}
                            text={'Join our waitlist for exclusive early access'}
                        />
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
} 
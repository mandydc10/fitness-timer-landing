import {
    Container,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    Heading,
} from '@chakra-ui/react'
import { FiClock, FiSettings, FiActivity, FiBell } from 'react-icons/fi'

interface FeatureProps {
    title: string
    text: string
    icon: React.ElementType
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'brand.400'}
                mb={1}
            >
                <Icon as={icon} w={10} h={10} />
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    )
}

export default function Features() {
    return (
        <Container p={4} maxW={'7xl'} id="features">
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} py={10}>
                <Heading fontSize={'3xl'}>Upcoming Features You'll Love</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    We're crafting the perfect toolkit to revolutionize your workout experience
                </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} py={10}>
                <Feature
                    icon={FiClock}
                    title={'Smart Timer Presets'}
                    text={
                        'Design your perfect workout flow with customizable timer presets. Set intervals, rest periods, and rounds exactly how you want them.'
                    }
                />
                <Feature
                    icon={FiSettings}
                    title={'Personalized Experience'}
                    text={
                        'Choose your preferred audio cues, vibration patterns, and visual alerts. Including dark mode for those late-night training sessions.'
                    }
                />
                <Feature
                    icon={FiActivity}
                    title={'Progress Insights'}
                    text={
                        'Track your journey with comprehensive workout statistics. Set goals, monitor improvements, and celebrate achievements.'
                    }
                />
                <Feature
                    icon={FiBell}
                    title={'Hands-Free Control'}
                    text={
                        'Stay in the zone with clear audio guidance and voice announcements. No more checking your screen during intense workouts.'
                    }
                />
            </SimpleGrid>
        </Container>
    )
} 
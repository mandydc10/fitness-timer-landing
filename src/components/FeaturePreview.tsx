import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    VStack,
    Box,
    Text,
    SimpleGrid,
    Icon,
    Flex,
} from '@chakra-ui/react'
import { FiClock, FiSettings, FiActivity, FiBell, FiPlay, FiBookmark } from 'react-icons/fi'
import { IconType } from 'react-icons'
import WaitlistForm from './WaitlistForm'
import { createIcon } from '@chakra-ui/react'

interface FeaturePreviewProps {
    isButton?: boolean;
    buttonProps?: any;
}

interface PreviewFeatureProps {
    icon: IconType;
    title: string;
    description: string;
}

const PreviewFeature = ({ icon, title, description }: PreviewFeatureProps) => (
    <Box p={5} shadow={'md'} borderWidth="1px" borderRadius="lg">
        <Flex align="center" mb={2}>
            <Icon as={icon} mr={2} color="brand.400" w={5} h={5} />
            <Text fontWeight="bold">{title}</Text>
        </Flex>
        <Text color="gray.600">{description}</Text>
    </Box>
);

// Add the PlayIcon definition since we're using it in this component
const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

export default function FeaturePreview({ isButton = true, buttonProps = {} }: FeaturePreviewProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const features = [
        {
            icon: FiPlay,
            title: 'Video Integration',
            description: 'Embed your favorite YouTube workout videos and playlists directly into your timer sessions for real-time guidance'
        },
        {
            icon: FiClock,
            title: 'Custom Intervals',
            description: 'Create personalized interval timers for any workout routine'
        },
        {
            icon: FiActivity,
            title: 'Workout Library',
            description: 'Save and organize your favorite workout videos alongside your custom timers for quick access'
        },
        {
            icon: FiBell,
            title: 'Smart Notifications',
            description: 'Clear audio and visual cues sync perfectly with your workout videos'
        },
        {
            icon: FiSettings,
            title: 'Easy Setup',
            description: 'Intuitive interface to configure timers and add workout videos in seconds'
        },
        {
            icon: FiBookmark,
            title: 'Quick Reference',
            description: 'Access your saved exercise videos instantly during workouts for proper form guidance'
        }
    ]

    const trigger = isButton ? (
        <Button
            onClick={onOpen}
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
            variant={'outline'}
            _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
            }}
            {...buttonProps}
        >
            Preview Features
        </Button>
    ) : null

    return (
        <>
            {trigger}
            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text
                            bgGradient="linear(to-r, brand.400, brand.600)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="bold"
                        >
                            FitTimer Features
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                            {features.map((feature, index) => (
                                <PreviewFeature key={index} {...feature} />
                            ))}
                        </SimpleGrid>
                        <VStack mt={8} spacing={4}>
                            <Text color="gray.600" textAlign="center" fontSize="lg">
                                Ready to transform your workouts with integrated video guidance?
                            </Text>
                            <WaitlistForm
                                buttonText="Join Waitlist Now"
                                buttonProps={{
                                    size: 'md',
                                    width: 'auto'
                                }}
                            />
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
} 
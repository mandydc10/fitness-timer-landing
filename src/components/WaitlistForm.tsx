import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Stack,
    useDisclosure,
    VStack,
    Text,
    Box,
    Icon,
} from '@chakra-ui/react'
import { FiUserPlus, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

interface WaitlistFormProps {
    buttonText?: string
    buttonProps?: any
}

export default function WaitlistForm({ buttonText = "Join Waitlist", buttonProps = {} }: WaitlistFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            await fetch(form.action, {
                method: 'POST',
                body: formData,
            })
            setIsSubmitted(true)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    const handleClose = () => {
        onClose()
        // Reset the submitted state after modal is closed
        setTimeout(() => {
            setIsSubmitted(false)
        }, 200) // Small delay to prevent flashing of content
    }

    return (
        <>
            <Button
                onClick={onOpen}
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'brand'}
                bg={'brand.400'}
                color={'white'}
                _hover={{
                    bg: 'brand.500',
                    color: 'white',
                    transform: 'scale(1.05)',
                    transition: 'all 0.2s ease-in-out'
                }}
                leftIcon={<FiUserPlus />}
                {...buttonProps}
            >
                {buttonText}
            </Button>

            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    {!isSubmitted ? (
                        <>
                            <ModalHeader>Join the Waitlist</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <form
                                    action="https://formsubmit.co/9cbd80d6cabd97a9392bf66804ed2353"
                                    method="POST"
                                    onSubmit={handleSubmit}
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
                        </>
                    ) : (
                        <>
                            <ModalCloseButton />
                            <ModalBody py={10}>
                                <VStack spacing={6} align="center">
                                    <Box
                                        w={16}
                                        h={16}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        rounded="full"
                                        bg="brand.400"
                                        color="white"
                                        fontSize="3xl"
                                    >
                                        <Icon as={FiCheck} />
                                    </Box>
                                    <VStack spacing={3}>
                                        <Text
                                            fontSize="2xl"
                                            fontWeight="bold"
                                            textAlign="center"
                                        >
                                            Thank You!
                                        </Text>
                                        <Text
                                            color="gray.500"
                                            textAlign="center"
                                        >
                                            You're now on the waitlist for FitTimer. We'll notify you as soon as we launch.
                                            Get ready to transform your workout experience!
                                        </Text>
                                    </VStack>
                                    <Button
                                        onClick={handleClose}
                                        colorScheme="brand"
                                        rounded="full"
                                        px={8}
                                    >
                                        Close
                                    </Button>
                                </VStack>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
} 
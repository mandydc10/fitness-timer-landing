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
} from '@chakra-ui/react'
import { FiUserPlus } from 'react-icons/fi'

interface WaitlistFormProps {
    buttonText?: string
    buttonProps?: any
}

export default function WaitlistForm({ buttonText = "Join Waitlist", buttonProps = {} }: WaitlistFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                                    value={`${window.location.origin}/thank-you`}
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
        </>
    )
} 
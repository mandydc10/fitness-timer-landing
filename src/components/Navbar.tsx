import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import Logo from './Logo'
import WaitlistForm from './WaitlistForm'

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                position="fixed"
                width="100%"
                zIndex={1000}
            >
                <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }} align="center">
                    <Logo />
                    <Text
                        ml={3}
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        fontWeight="bold"
                        fontSize="xl"
                    >
                        FitTimer
                    </Text>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                    display={{ base: 'none', md: 'flex' }}
                >
                    <NavLink to="features">Features</NavLink>
                    <NavLink to="how-it-works">How It Works</NavLink>
                    <WaitlistForm
                        buttonText="Stay Updated"
                        buttonProps={{
                            fontSize: 'sm',
                            size: 'md',
                            display: { base: 'none', md: 'inline-flex' }
                        }}
                    />
                </Stack>

                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
    <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
    >
        <Button
            as="a"
            fontSize={'sm'}
            fontWeight={400}
            variant="ghost"
            cursor="pointer"
        >
            {children}
        </Button>
    </Link>
)

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
            position="fixed"
            width="100%"
            zIndex={999}
        >
            <Stack spacing={4}>
                <Box py={2}>
                    <NavLink to="features">Features</NavLink>
                </Box>
                <Box py={2}>
                    <NavLink to="how-it-works">How It Works</NavLink>
                </Box>
                <WaitlistForm
                    buttonText="Stay Updated"
                    buttonProps={{
                        w: 'full',
                        fontSize: 'sm',
                        size: 'md'
                    }}
                />
            </Stack>
        </Stack>
    )
} 
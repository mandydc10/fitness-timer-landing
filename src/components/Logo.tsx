import { motion } from 'framer-motion'
import { Icon, IconProps } from '@chakra-ui/react'

const LogoIcon = (props: IconProps) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M12 5C7.48 5 3 9.48 3 15s4.48 10 10 10 10-4.48 10-10S16.52 5 12 5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
        <path
            fill="currentColor"
            d="M12.5 10v5.27l4.15 2.44.5-.87-3.65-2.15V10z"
        />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
        <rect x="7" y="1" width="7" height="2" fill="currentColor" />
        <circle cx="12" cy="0.8" r="1.2" fill="currentColor" />
        <circle cx="7.5" cy="0.8" r="0.9" fill="currentColor" />
    </Icon>
)

export const Logo = () => {
    const containerVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren"
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3
            }
        }
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{ display: 'inline-block' }}
        >
            <motion.div
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            >
                <LogoIcon
                    w={8}
                    h={8}
                    color="brand.400"
                />
            </motion.div>
        </motion.div>
    )
}

export default Logo 
import {forwardRef} from 'react'
import {Box, Spinner} from '@chakra-ui/react'

export const DogSpinner = () => (
    <Spinner
        size="xl"
        position="relative"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

//eslint-disable-next-line react/display-name
export const DogContainer = forwardRef(({ children }, ref) => (
    <Box
      ref={ref}
      className="voxel-dog"
      mt={['8px']}
      mb={['8px']}
      w={[200, 275, 350]}
      h={[200, 275, 350]}
      position="relative"
    >
      {children}
    </Box>
  ))
  
const Loader = () => {
    return (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    )
}
  
  export default Loader
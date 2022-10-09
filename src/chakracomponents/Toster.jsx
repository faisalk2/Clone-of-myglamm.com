import { Button, useToast } from "@chakra-ui/react"

 export function Toster() {
    const toast = useToast()
    return (
      <Button
      bgColor={"black"}
        onClick={() =>
          toast({
            title: '',
            description: "Added to Bag",
            position:"top",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Add to bag
      </Button>
    )
  }
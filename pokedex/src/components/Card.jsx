import { Image, Card, CardHeader, CardBody, HStack, VStack, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import male from '../assets/male.png';
import female from '../assets/female.png';
import stars from '../assets/stars.png';

const MotionImage = motion(Image);

const PkCard = (props) => {
    const [loadedImages, setLoadedImages] = useState({
        front: false,
        back: false,
        shinyFront: false,
        shinyBack: false
    });

    // Manejadores de carga de imagen
    const handleImageLoad = (key) => {
        setLoadedImages((prev) => ({ ...prev, [key]: true }));
    };

    // Crea una función que devuelva el `key` único para cada imagen
    const getImageKey = (src) => src;

    return (
        <Card variant='unstyled' bg="#F3F3F7" p={[1, 2]}>
            <CardHeader>
                <HStack
                    alignItems="center"
                    justifyContent="center"
                    spacing={[4, 8]}
                    px={[2, 4]}
                >
                    <Image boxSize={["30px", "40px"]} src={props.sex === 'm' ? male : female} />
                    <Image boxSize={["30px", "40px"]} src={stars} />
                </HStack>
            </CardHeader>
            <CardBody>
                <HStack
                    spacing={[2, 4]}
                    flexDirection={["column", "row"]}
                    alignItems="center"
                >
                    <VStack spacing={[4, 8]}>
                        <Skeleton boxSize={["100px", "100px"]} isLoaded={loadedImages.front}>
                            <MotionImage
                                src={props.sex === 'm' ? props.maleFront : props.femaleFront}
                                key={getImageKey(props.sex === 'm' ? props.maleFront : props.femaleFront)}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onLoad={() => handleImageLoad('front')}
                            />
                        </Skeleton>
                        <Skeleton boxSize={["100px", "100px"]} isLoaded={loadedImages.back}>
                            <MotionImage
                                src={props.sex === 'm' ? props.maleBack : props.femaleBack}
                                key={getImageKey(props.sex === 'm' ? props.maleBack : props.femaleBack)}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onLoad={() => handleImageLoad('back')}
                            />
                        </Skeleton>
                    </VStack>
                    <VStack spacing={[4, 8]}>
                        <Skeleton boxSize={["100px", "100px"]} isLoaded={loadedImages.shinyFront}>
                            <MotionImage
                                src={props.sex === 'm' ? props.maleShinyFront : props.femaleShinyFront}
                                key={getImageKey(props.sex === 'm' ? props.maleShinyFront : props.femaleShinyFront)}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onLoad={() => handleImageLoad('shinyFront')}
                            />
                        </Skeleton>
                        <Skeleton boxSize={["100px", "100px"]} isLoaded={loadedImages.shinyBack}>
                            <MotionImage
                                src={props.sex === 'm' ? props.maleShinyBack : props.femaleShinyBack}
                                key={getImageKey(props.sex === 'm' ? props.maleShinyBack : props.femaleShinyBack)}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onLoad={() => handleImageLoad('shinyBack')}
                            />
                        </Skeleton>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default PkCard;

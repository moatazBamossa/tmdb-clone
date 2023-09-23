import {
  Card,
  CardBody,
  CardFooter,
  Image,
  CircularProgress,
  useDisclosure,
} from "@nextui-org/react";
import ModalPage from "../Modal/Modal";

type CardPageProps = {
  title: string;
  subTitle: string;
  img: string;
  price: number;
};

const CardPage = (props: CardPageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalPage
        isOpen={isOpen}
        onClose={onClose}
        title={props.title}
        image={props.img}
        subTitle={props.subTitle}
      />

      <Card shadow="sm" isPressable onPress={onOpen}>
        <CardBody className="overflow-visible p-0">
          <Image
            className="object-cover"
            shadow="sm"
            radius="lg"
            isZoomed
            width={300}
            height={200}
            alt={props.title}
            src={props.img}
          />
        </CardBody>
        <b>Film Name: {props.title}</b>
        <CardFooter className="text-small justify-between">
          <h4>Evaluation</h4>
          <CircularProgress
            size="lg"
            value={props.price * 10}
            color="success"
            showValueLabel={true}
          />
        </CardFooter>
      </Card>
    </>
  );
};
export default CardPage;

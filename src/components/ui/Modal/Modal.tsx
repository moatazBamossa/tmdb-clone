import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  CircularProgress,
} from "@nextui-org/react";

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subTitle: string;
  image: string;
};

const ModalPage = (props: ModalPageProps) => {
  const { isOpen, onClose, title, subTitle, image } = props;
  return (
    <Modal size={"md"} isOpen={isOpen} onClose={onClose} backdrop={"blur"}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col">{title}</ModalHeader>
            <ModalBody>
              <Image
                className="object-cover"
                shadow="sm"
                radius="lg"
                isZoomed
                alt={title}
                src={image}
                style={{
                  height: "200px",
                }}
              />
              <p>{subTitle}</p>
              <div className="flex text-small justify-center items-center">
                <h4>Evaluation</h4>
                <CircularProgress
                  size="lg"
                  value={50 * 10}
                  color="success"
                  showValueLabel={true}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ModalPage;

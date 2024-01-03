import { Accordion, Container } from "@mantine/core";
import classes from "../assets/css/FaqSimple.module.css";

export default function Faq() {
  return (
    <Container>
      <div className="flex justify-center flex-col">
        <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
      </div>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            reiciendis nam rem ipsum rerum autem nemo voluptatem iste cumque
            fugiat labore magni, ut distinctio illo dignissimos cupiditate!
            Beatae, mollitia sint?
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Can I create more that one account?
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            reiciendis nam rem ipsum rerum autem nemo voluptatem iste cumque
            fugiat labore magni, ut distinctio illo dignissimos cupiditate!
            Beatae, mollitia sint?
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            How can I subscribe to monthly newsletter?
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            reiciendis nam rem ipsum rerum autem nemo voluptatem iste cumque
            fugiat labore magni, ut distinctio illo dignissimos cupiditate!
            Beatae, mollitia sint?
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            reiciendis nam rem ipsum rerum autem nemo voluptatem iste cumque
            fugiat labore magni, ut distinctio illo dignissimos cupiditate!
            Beatae, mollitia sint?
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            reiciendis nam rem ipsum rerum autem nemo voluptatem iste cumque
            fugiat labore magni, ut distinctio illo dignissimos cupiditate!
            Beatae, mollitia sint?
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

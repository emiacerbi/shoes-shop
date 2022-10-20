import Form from "../src/components/Form";
import PrimaryButton from "../src/components/PrimaryButton";
import PrimaryInput from "../src/components/PrimaryInput";
import Heading from "../src/components/Heading/heading";
import StyledText from "../src/components/StyledText/StyledText";
import Header from "../src/components/Header/Header";
import Link from "next/link";

import styles from "../styles/forgotpassword.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles["forgot-password-page"]}>
      <Header className={styles['forgot-password-header']}/>
      <main className={styles["forgot-password-main"]}>
        <Heading headingText="Forgot Password?" />

        <StyledText text="Don’t worry, we’ll send you reset instructions." />

        <Form onSubmit={(e) => e.preventDefault()}>
          <PrimaryInput
            type="email"
            label="Email"
            placeholder="example@mail.com"
          />
          <PrimaryButton
            type="submit"
            children="Reset password"
          ></PrimaryButton>
        </Form>

        <Link href="/index.js" >
          <a className={styles['forgot-password__go-back']} >Back to log in</a>
        </Link>
      </main>
      <aside className={styles["forgot-password-aside"]}>
        <img src="/shoes.png" alt="shoe pic" className={styles["forgot-password-aside__image"]}/>
      </aside>
    </div>
  );
}

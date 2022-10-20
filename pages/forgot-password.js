import Form from "../src/components/Form";
import PrimaryButton from "../src/components/PrimaryButton";
import PrimaryInput from "../src/components/PrimaryInput";
import Heading from "../src/components/Heading/heading";
import StyledText from "../src/components/StyledText/StyledText";
import Header from "../src/components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/forgotpassword.module.css";

export default function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <Header />

      <main className="forgot-password-main">
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
        <Link href="/index" className="forgot-password-main__go-back-button">
           <a>Back to log in</a>
        </Link>
      </main>
      <aside className={styles.aside}>
        <img src="/shoes.png"  alt="shoe pic" className={styles.aside__image}/>
      </aside>
    </div>
  );
}

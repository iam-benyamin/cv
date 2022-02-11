import { DefaultLayout } from "../../components/layout/defaultLayout";
import { AboutMeStyle } from "./style";
import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import phone from "../../static/images/phone.png";

import emailjs from "emailjs-com";


export function ContactMe() {
  document.title = "ContactMe";
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_g9l5vm1",
        "template_5mshkeo",
        event.target,
        "user_j5Ek9bGrQ4U3sqlqzeh1z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <DefaultLayout>
      <AboutMeStyle>
        <img src={phone} alt="background" />
        <div className="social">
          <p>می‌تونید من رو در شبکه های اجتماعی دنبال کنید</p>
          <a target="_blank" href="https://www.instagram.com/bmahmoudyan">
            <InstagramOutlined />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/benyamin-mahmoudyan"
          >
            <LinkedinOutlined />
          </a>
          <a target="_blank" href="https://www.github.com/bmahmoudyan">
            <GithubOutlined />
          </a>
          <a target="_blank" href="https://www.github.com/bmahmoudyan">
            <WhatsAppOutlined />
          </a>
        </div>
        <div className="mail">
          <form method="POST" onSubmit={sendEmail}>
            <input
              name="subject"
              type="text"
              placeholder="جرا می‌خوای با من صحبت بکنی؟ "
            />
            <input name="name" type="text" placeholder="اسمتون لطفا" />
            <input name="email" type="text" placeholder="ایمیل" />
            <textarea
              name="message"
              id="text"
              cols="30"
              rows="10"
              placeholder="پیامتون رو اینجا بنویسد سعی می‌کنم در زود ترین زمان جواب بدم"
            ></textarea>
            <button type="submit">ارسال</button>
          </form>
        </div>
      </AboutMeStyle>
    </DefaultLayout>
  );
}

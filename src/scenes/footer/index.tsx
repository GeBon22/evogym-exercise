import Logo from "../../assets/Logo.png";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus fugit totam architecto distinctio voluptatum dolore
            sunt. Mollitia expedita dolores tempore repellendus, illo veritatis
            dolore soluta voluptas sit incidunt nisi maxime!
          </p>
          <p>(C) Whatever - All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">This is the first Link</p>
            <p className="my-5">I am number two!</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Lorem turns boring</p>
            <p>+ 49 1632 - Please don't call</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
